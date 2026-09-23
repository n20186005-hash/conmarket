// Cloudflare Worker for conmarket.org
// - Serves the static Astro build from the assets binding.
// - Handles /api/weather: fetches a public weather service server-side, caches at the edge,
//   and returns a clean JSON payload plus a visitor-ready, structured recommendation.
//   No API key is involved.

const LAT = 16.0677927;
const LNG = 108.2049562;

// WMO weather interpretation codes → Vietnamese / English label, icon and rain flag.
const WMO = {
  0: { vi: "Trời quang", en: "Clear sky", icon: "☀️", rain: false },
  1: { vi: "Trời trong ít mây", en: "Mainly clear", icon: "🌤️", rain: false },
  2: { vi: "Có mây rải rác", en: "Partly cloudy", icon: "⛅", rain: false },
  3: { vi: "Nhiều mây", en: "Overcast", icon: "☁️", rain: false },
  45: { vi: "Sương mù", en: "Fog", icon: "🌫️", rain: false },
  48: { vi: "Sương mù giá lạnh", en: "Rime fog", icon: "🌫️", rain: false },
  51: { vi: "Mưa phùn nhẹ", en: "Light drizzle", icon: "🌦️", rain: true },
  53: { vi: "Mưa phùn", en: "Drizzle", icon: "🌦️", rain: true },
  55: { vi: "Mưa phùn dày", en: "Dense drizzle", icon: "🌦️", rain: true },
  56: { vi: "Mưa phùn đóng băng", en: "Freezing drizzle", icon: "🌧️", rain: true },
  57: { vi: "Mưa phùn đóng băng", en: "Freezing drizzle", icon: "🌧️", rain: true },
  61: { vi: "Mưa nhẹ", en: "Slight rain", icon: "🌧️", rain: true },
  63: { vi: "Mưa", en: "Rain", icon: "🌧️", rain: true },
  65: { vi: "Mưa to", en: "Heavy rain", icon: "🌧️", rain: true },
  66: { vi: "Mưa đóng băng", en: "Freezing rain", icon: "🌧️", rain: true },
  67: { vi: "Mưa đóng băng", en: "Freezing rain", icon: "🌧️", rain: true },
  71: { vi: "Tuyết rơi", en: "Slight snow", icon: "🌨️", rain: false },
  73: { vi: "Tuyết rơi", en: "Snow", icon: "🌨️", rain: false },
  75: { vi: "Tuyết dày", en: "Heavy snow", icon: "❄️", rain: false },
  77: { vi: "Hạt tuyết", en: "Snow grains", icon: "🌨️", rain: false },
  80: { vi: "Mưa rào", en: "Rain showers", icon: "🌦️", rain: true },
  81: { vi: "Mưa rào", en: "Rain showers", icon: "🌦️", rain: true },
  82: { vi: "Mưa rào mạnh", en: "Violent rain showers", icon: "⛈️", rain: true },
  85: { vi: "Mưa tuyết", en: "Snow showers", icon: "🌨️", rain: true },
  86: { vi: "Mưa tuyết", en: "Snow showers", icon: "🌨️", rain: true },
  95: { vi: "Có dông", en: "Thunderstorm", icon: "⛈️", rain: true },
  96: { vi: "Dông kèm mưa đá", en: "Thunderstorm w/ hail", icon: "⛈️", rain: true },
  99: { vi: "Dông kèm mưa đá", en: "Thunderstorm w/ hail", icon: "⛈️", rain: true }
};

function describe(code) {
  return WMO[code] ?? { vi: "Thời tiết thay đổi", en: "Variable weather", icon: "🌡️", rain: false };
}

// km/h → Beaufort level, used to describe wind in visitor-friendly terms.
function kmhToBeaufort(kmh) {
  const v = Math.round(kmh);
  if (v < 1) return 0;
  if (v <= 5) return 1;
  if (v <= 11) return 2;
  if (v <= 19) return 3;
  if (v <= 28) return 4;
  if (v <= 38) return 5;
  if (v <= 49) return 6;
  if (v <= 61) return 7;
  if (v <= 74) return 8;
  if (v <= 88) return 9;
  if (v <= 102) return 10;
  if (v <= 117) return 11;
  return 12;
}

function buildUrl() {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LNG),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max",
    timezone: "Asia/Ho_Chi_Minh",
    forecast_days: "7",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm"
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

// Build a structured, visitor-ready recommendation from the raw forecast.
// Returns { alert, outfit, plan, items }. `alert` is null unless a real risk is present.
function buildAdvice(now, today) {
  const outfit = [];
  const plan = [];
  const items = [];
  let alert = null;
  const push = (arr, item) => {
    if (!arr.find((x) => x.vi === item.vi)) arr.push(item);
  };

  const code = today.code;
  const isLightRain = [51, 53, 55, 56, 57, 61, 80, 81].includes(code);
  const isHeavyRain = [63, 65, 66, 67, 82].includes(code);
  const isStorm = [95, 96, 99].includes(code);
  const isFog = [45, 48].includes(code);
  const isClear = [0, 1].includes(code);
  const isOvercast = code === 3;
  const windLevel = kmhToBeaufort(Math.max(now.wind, today.windMax));

  // ── Rain / precipitation ──────────────────────────────────────────────
  if (today.pop >= 60) {
    push(plan, {
      vi: "Khả năng mưa cao — ưu tiên các khu vực trong nhà (gian ăn, gian hàng bên trong chợ), lùi lịch leo núi và vui chơi biển.",
      en: "High chance of rain — favour indoor areas (food court, covered stalls), and postpone hiking or beach plans."
    });
    push(items, { vi: "Ô / áo mưa", en: "Umbrella / raincoat" });
  } else if (isLightRain) {
    push(outfit, {
      vi: "Có mưa nhỏ, đường trơn — nên đi giày chống trượt.",
      en: "Light rain and slippery ground — wear slip-resistant shoes."
    });
    push(plan, {
      vi: "Các gian ngoài trời trải nghiệm kém hơn; dạo quanh quầy trong nhà thoải mái hơn.",
      en: "Open-air sections feel less pleasant; browsing indoor stalls is more comfortable."
    });
    push(items, { vi: "Ô gấp nhỏ", en: "Compact foldable umbrella" });
  } else if (isHeavyRain) {
    alert = {
      vi: "Mưa khá lớn — tránh thung lũng, vùng trũng thấp; tàu du lịch, cáp treo có thể ngưng hoạt động.",
      en: "Heavy rain — avoid valleys and low-lying areas; sightseeing boats and cable cars may stop."
    };
    push(plan, {
      vi: "Không nên chơi ngoài trời lâu, ưu tiên nhà triển lãm trong nhà.",
      en: "Avoid long outdoor activity; prefer indoor exhibition halls."
    });
    push(items, { vi: "Áo mưa (gió lớn, không nên dùng ô cán dài)", en: "Raincoat (windy — skip long-handle umbrellas)" });
  } else if (isStorm) {
    alert = {
      vi: "Đề phòng sấm sét — không lên núi, không tắm biển, không trú mưa dưới gốc cây; trò chơi trên nước khả năng cao phải đóng.",
      en: "Beware lightning — no mountain climbs, no swimming, no sheltering under trees; water activities are very likely closed."
    };
  }

  // ── Heat & UV ─────────────────────────────────────────────────────────
  if (today.tmax >= 32) {
    push(plan, {
      vi: "Trời khá nóng — hạn chế ra ngoài giữa trưa (khoảng 11:00–15:00), rút ngắn thời gian ngoài trời.",
      en: "Quite hot — avoid going out midday (about 11:00–15:00) and shorten outdoor time."
    });
    push(items, { vi: "Kem chống nắng, đủ nước uống, đồ dùng chống nóng", en: "Sunscreen, enough drinking water, heat-protection items" });
  }
  if (today.uv >= 5) {
    push(outfit, { vi: "Tia UV mạnh — cần bảo vệ nắng.", en: "Strong UV — protect against the sun." });
    push(items, { vi: "Kem chống nắng, kính râm, mũ rộng vành", en: "Sunscreen, sunglasses, wide-brim hat" });
  }

  // ── Cold & temperature swing ──────────────────────────────────────────
  if (today.tmax - today.tmin > 8) {
    push(outfit, {
      vi: "Chênh lệch nhiệt ngày đêm lớn — mang theo áo khoác mỏng để tiện mặc rút.",
      en: "Big day-night temperature swing — bring a light jacket you can add or remove."
    });
  }
  if (today.tmax <= 10) {
    push(outfit, { vi: "Nhiệt độ thấp — giữ ấm cơ thể.", en: "Low temperature — keep warm." });
    push(items, { vi: "Áo khoác dày, khăn", en: "Thick jacket, scarf" });
  }

  // ── Wind ──────────────────────────────────────────────────────────────
  if (windLevel >= 7) {
    alert = alert ?? {
      vi: "Gió mạnh — tránh xa biển báo, mỏm đá ven biển; trò chơi ngoài khơi khả năng cao phải đóng.",
      en: "Strong wind — stay away from billboards and coastal rocks; offshore activities are very likely closed."
    };
  } else if (windLevel >= 5) {
    push(plan, {
      vi: "Gió khá lớn — tàu du lịch biển và một số trò chơi ngoài trời có thể ngưng.",
      en: "Breezy — sea sightseeing boats and some outdoor rides may pause."
    });
    push(items, { vi: "Mũ dễ bị thổi bay, không mặc váy xòe rộng", en: "Hats may blow away; avoid loose long skirts" });
  }

  // ── Clear / overcast ──────────────────────────────────────────────────
  if (isClear) {
    push(plan, {
      vi: "Trời quang đãng — thích hợp đi ngoài trời và ngắm bình minh, hoàng hôn.",
      en: "Clear skies — good for outdoor visits and sunrise or sunset views."
    });
    push(items, { vi: "Nhớ bôi chống nắng", en: "Remember sun protection" });
  } else if (isOvercast) {
    push(plan, {
      vi: "Ánh sáng dịu — rất hợp để chụp ảnh, không nắng gắt nên dạo ngoài trời lâu cũng ổn.",
      en: "Soft light — great for photos; no harsh sun so longer outdoor strolls are fine."
    });
  }

  // ── Fog ───────────────────────────────────────────────────────────────
  if (isFog) {
    alert = alert ?? {
      vi: "Sương mù dày — tầm nhìn kém, phà và chuyến bay dễ chậm trễ; không thích hợp ngắm cảnh biển hay núi.",
      en: "Dense fog — poor visibility, ferries and flights may be delayed; not good for sea or mountain views."
    };
    push(items, { vi: "Khẩu trang", en: "Face mask" });
  }

  // ── Fallback when nothing notable ─────────────────────────────────────
  if (!alert && outfit.length === 0 && plan.length === 0 && items.length === 0) {
    push(plan, {
      vi: "Thời tiết ôn hòa — thuận tiện để dạo chợ và đi bộ quanh trung tâm.",
      en: "Mild weather — good for browsing the market and walking downtown."
    });
  }

  return { alert, outfit, plan, items };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=600, s-maxage=600" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/weather") {
      try {
        const upstream = await fetch(buildUrl(), { cf: { cacheTtl: 600 } });
        if (!upstream.ok) return json({ error: true });
        const d = await upstream.json();
        const cur = d.current;
        const info = describe(cur.weather_code);
        const now = {
          temperature: Math.round(cur.temperature_2m),
          feelsLike: Math.round(cur.apparent_temperature),
          humidity: Math.round(cur.relative_humidity_2m),
          wind: Math.round(cur.wind_speed_10m),
          code: cur.weather_code,
          labelVi: info.vi,
          labelEn: info.en,
          icon: info.icon,
          isRain: info.rain,
          uv: Math.round(d.daily.uv_index_max?.[0] ?? 0)
        };
        const days = d.daily.time.map((date, i) => {
          const di = describe(d.daily.weather_code[i]);
          return {
            date,
            labelVi: di.vi,
            labelEn: di.en,
            icon: di.icon,
            tmax: Math.round(d.daily.temperature_2m_max[i]),
            tmin: Math.round(d.daily.temperature_2m_min[i]),
            pop: Math.round(d.daily.precipitation_probability_max[i] ?? 0),
            windMax: Math.round(d.daily.wind_speed_10m_max[i] ?? 0),
            uv: Math.round(d.daily.uv_index_max[i] ?? 0)
          };
        });
        const today = days[0] ?? { code: cur.weather_code, tmax: now.temperature, tmin: now.temperature, pop: 0, windMax: now.wind, uv: now.uv };
        return json({ now, days, advice: buildAdvice(now, today) });
      } catch {
        return json({ error: true });
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// Exported for local testing of the recommendation engine (ignored by the Worker runtime).
export { buildAdvice, describe, kmhToBeaufort, buildUrl };

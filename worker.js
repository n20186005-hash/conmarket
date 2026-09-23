// Cloudflare Worker for conmarket.org
// - Serves the static Astro build from the assets binding.
// - Handles /api/weather: fetches a public weather service server-side, caches at the edge,
//   and returns a clean JSON payload plus a visitor-ready, structured recommendation (4 languages).
//   No API key is involved.

const LAT = 16.0677927;
const LNG = 108.2049562;

// WMO weather interpretation codes → label (vi/en/zh/ko), icon and rain flag.
const WMO = {
  0: { vi: "Trời quang", en: "Clear sky", zh: "晴", ko: "맑은 하늘", icon: "☀️", rain: false },
  1: { vi: "Trời trong ít mây", en: "Mainly clear", zh: "少云", ko: "대체로 맑음", icon: "🌤️", rain: false },
  2: { vi: "Có mây rải rác", en: "Partly cloudy", zh: "局部多云", ko: "구름 조금", icon: "⛅", rain: false },
  3: { vi: "Nhiều mây", en: "Overcast", zh: "多云", ko: "흐림", icon: "☁️", rain: false },
  45: { vi: "Sương mù", en: "Fog", zh: "雾", ko: "안개", icon: "🌫️", rain: false },
  48: { vi: "Sương mù giá lạnh", en: "Rime fog", zh: "雾凇", ko: "서리 안개", icon: "🌫️", rain: false },
  51: { vi: "Mưa phùn nhẹ", en: "Light drizzle", zh: "小毛毛雨", ko: "약한 이슬비", icon: "🌦️", rain: true },
  53: { vi: "Mưa phùn", en: "Drizzle", zh: "毛毛雨", ko: "이슬비", icon: "🌦️", rain: true },
  55: { vi: "Mưa phùn dày", en: "Dense drizzle", zh: "浓毛毛雨", ko: "짙은 이슬비", icon: "🌦️", rain: true },
  56: { vi: "Mưa phùn đóng băng", en: "Freezing drizzle", zh: "冻毛毛雨", ko: "어는 이슬비", icon: "🌧️", rain: true },
  57: { vi: "Mưa phùn đóng băng", en: "Freezing drizzle", zh: "冻毛毛雨", ko: "어는 이슬비", icon: "🌧️", rain: true },
  61: { vi: "Mưa nhẹ", en: "Slight rain", zh: "小雨", ko: "약한 비", icon: "🌧️", rain: true },
  63: { vi: "Mưa", en: "Rain", zh: "雨", ko: "비", icon: "🌧️", rain: true },
  65: { vi: "Mưa to", en: "Heavy rain", zh: "大雨", ko: "강한 비", icon: "🌧️", rain: true },
  66: { vi: "Mưa đóng băng", en: "Freezing rain", zh: "冻雨", ko: "어는 비", icon: "🌧️", rain: true },
  67: { vi: "Mưa đóng băng", en: "Freezing rain", zh: "冻雨", ko: "어는 비", icon: "🌧️", rain: true },
  71: { vi: "Tuyết rơi", en: "Slight snow", zh: "小雪", ko: "약한 눈", icon: "🌨️", rain: false },
  73: { vi: "Tuyết rơi", en: "Snow", zh: "雪", ko: "눈", icon: "🌨️", rain: false },
  75: { vi: "Tuyết dày", en: "Heavy snow", zh: "大雪", ko: "강한 눈", icon: "❄️", rain: false },
  77: { vi: "Hạt tuyết", en: "Snow grains", zh: "雪粒", ko: "싸락눈", icon: "🌨️", rain: false },
  80: { vi: "Mưa rào", en: "Rain showers", zh: "阵雨", ko: "소나기", icon: "🌦️", rain: true },
  81: { vi: "Mưa rào", en: "Rain showers", zh: "阵雨", ko: "소나기", icon: "🌦️", rain: true },
  82: { vi: "Mưa rào mạnh", en: "Violent rain showers", zh: "强阵雨", ko: "강한 소나기", icon: "⛈️", rain: true },
  85: { vi: "Mưa tuyết", en: "Snow showers", zh: "阵雪", ko: "눈 소나기", icon: "🌨️", rain: true },
  86: { vi: "Mưa tuyết", en: "Snow showers", zh: "阵雪", ko: "눈 소나기", icon: "🌨️", rain: true },
  95: { vi: "Có dông", en: "Thunderstorm", zh: "雷阵雨", ko: "뇌우", icon: "⛈️", rain: true },
  96: { vi: "Dông kèm mưa đá", en: "Thunderstorm w/ hail", zh: "雷阵雨伴冰雹", ko: "우박 동반 뇌우", icon: "⛈️", rain: true },
  99: { vi: "Dông kèm mưa đá", en: "Thunderstorm w/ hail", zh: "雷阵雨伴冰雹", ko: "우박 동반 뇌우", icon: "⛈️", rain: true }
};

function describe(code) {
  return WMO[code] ?? { vi: "Thời tiết thay đổi", en: "Variable weather", zh: "天气多变", ko: "변덕스러운 날씨", icon: "🌡️", rain: false };
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
      en: "High chance of rain — favour indoor areas (food court, covered stalls), and postpone hiking or beach plans.",
      zh: "降雨概率高——优先室内区域（美食区、有顶棚的摊位），推迟登山与海边游玩。",
      ko: "비 올 확률이 높음 — 실내(식당가, 지붕 있는 가게)를 우선하고 등산·해변 일정은 미루세요."
    });
    push(items, { vi: "Ô / áo mưa", en: "Umbrella / raincoat", zh: "雨伞 / 雨衣", ko: "우산 / 우비" });
  } else if (isLightRain) {
    push(outfit, {
      vi: "Có mưa nhỏ, đường trơn — nên đi giày chống trượt.",
      en: "Light rain and slippery ground — wear slip-resistant shoes.",
      zh: "有小雨、地面湿滑——穿防滑鞋。",
      ko: "비가 조금 와 길이 미끄러우니 미끄럼 방지 신발을 신으세요."
    });
    push(plan, {
      vi: "Các gian ngoài trời trải nghiệm kém hơn; dạo quanh quầy trong nhà thoải mái hơn.",
      en: "Open-air sections feel less pleasant; browsing indoor stalls is more comfortable.",
      zh: "露天区域体验较差；逛室内摊位更舒服。",
      ko: "노천 구역은 불편하고 실내 가게 둘러보기가 편합니다."
    });
    push(items, { vi: "Ô gấp nhỏ", en: "Compact foldable umbrella", zh: "轻便折叠伞", ko: "접이식 우산" });
  } else if (isHeavyRain) {
    alert = {
      vi: "Mưa khá lớn — tránh thung lũng, vùng trũng thấp; tàu du lịch, cáp treo có thể ngưng hoạt động.",
      en: "Heavy rain — avoid valleys and low-lying areas; sightseeing boats and cable cars may stop.",
      zh: "雨势较大——避开山谷与低洼地带；观光船、缆车可能停运。",
      ko: "비가 꽤 쎄게 내림 — 계곡·저지대를 피하고 유람선·케이블카가 멈출 수 있습니다."
    };
    push(plan, {
      vi: "Không nên chơi ngoài trời lâu, ưu tiên nhà triển lãm trong nhà.",
      en: "Avoid long outdoor activity; prefer indoor exhibition halls.",
      zh: "不宜长时间户外，优先室内展馆。",
      ko: "실외 활동을 오래 하지 말고 실내 전시장을 이용하세요."
    });
    push(items, { vi: "Áo mưa (gió lớn, không nên dùng ô cán dài)", en: "Raincoat (windy — skip long-handle umbrellas)", zh: "雨衣（风大，勿用长柄伞）", ko: "우비(바람 심하니 장대 우산은 피하세요)" });
  } else if (isStorm) {
    alert = {
      vi: "Đề phòng sấm sét — không lên núi, không tắm biển, không trú mưa dưới gốc cây; trò chơi trên nước khả năng cao phải đóng.",
      en: "Beware lightning — no mountain climbs, no swimming, no sheltering under trees; water activities are very likely closed.",
      zh: "谨防雷电——勿登山、勿下海、勿在树下躲雨；水上项目很可能关闭。",
      ko: "번개 주의 — 산에 오르거나 바다에 들어가거나 나무 아래서 비를 피하지 마세요. 수상 활동은 대개 중단됩니다."
    };
  }

  // ── Heat & UV ─────────────────────────────────────────────────────────
  if (today.tmax >= 32) {
    push(plan, {
      vi: "Trời khá nóng — hạn chế ra ngoài giữa trưa (khoảng 11:00–15:00), rút ngắn thời gian ngoài trời.",
      en: "Quite hot — avoid going out midday (about 11:00–15:00) and shorten outdoor time.",
      zh: "相当炎热——避免正午外出（约 11:00–15:00），缩短户外时间。",
      ko: "꽤 덥습니다 — 한낮(약 11:00~15:00) 외출을 피하고 실외 시간을 줄이세요."
    });
    push(items, { vi: "Kem chống nắng, đủ nước uống, đồ dùng chống nóng", en: "Sunscreen, enough drinking water, heat-protection items", zh: "防晒霜、充足饮水、防暑用品", ko: "선크림, 충분한 물, 더위 대비 용품" });
  }
  if (today.uv >= 5) {
    push(outfit, { vi: "Tia UV mạnh — cần bảo vệ nắng.", en: "Strong UV — protect against the sun.", zh: "紫外线强——需防晒。", ko: "자외선이 강함 — 햇빛을 막으세요." });
    push(items, { vi: "Kem chống nắng, kính râm, mũ rộng vành", en: "Sunscreen, sunglasses, wide-brim hat", zh: "防晒霜、墨镜、宽檐帽", ko: "선크림, 선글라스, 챙 넓은 모자" });
  }

  // ── Cold & temperature swing ──────────────────────────────────────────
  if (today.tmax - today.tmin > 8) {
    push(outfit, {
      vi: "Chênh lệch nhiệt ngày đêm lớn — mang theo áo khoác mỏng để tiện mặc rút.",
      en: "Big day-night temperature swing — bring a light jacket you can add or remove.",
      zh: "昼夜温差大——带件薄外套方便穿脱。",
      ko: "낮밤 기온 차가 큼 — 겹쳐 입을 얇은 재킷을 준비하세요."
    });
  }
  if (today.tmax <= 10) {
    push(outfit, { vi: "Nhiệt độ thấp — giữ ấm cơ thể.", en: "Low temperature — keep warm.", zh: "气温偏低——注意保暖。", ko: "기온이 낮음 — 몸을 따뜻하게 하세요." });
    push(items, { vi: "Áo khoác dày, khăn", en: "Thick jacket, scarf", zh: "厚外套、围巾", ko: "두꺼운 재킷, 목도리" });
  }

  // ── Wind ──────────────────────────────────────────────────────────────
  if (windLevel >= 7) {
    alert = alert ?? {
      vi: "Gió mạnh — tránh xa biển báo, mỏm đá ven biển; trò chơi ngoài khơi khả năng cao phải đóng.",
      en: "Strong wind — stay away from billboards and coastal rocks; offshore activities are very likely closed.",
      zh: "大风——远离广告牌与海边礁石；海上项目很可能关闭。",
      ko: "강풍 — 간판과 해안 암초에서 멀리 떨어지세요. 해상 활동은 대개 중단됩니다."
    };
  } else if (windLevel >= 5) {
    push(plan, {
      vi: "Gió khá lớn — tàu du lịch biển và một số trò chơi ngoài trời có thể ngưng.",
      en: "Breezy — sea sightseeing boats and some outdoor rides may pause.",
      zh: "风偏大——海上观光船与部分户外设施可能暂停。",
      ko: "바람이 제법 셈 — 해상 유람선과 일부 야외 놀이기구가 멈출 수 있습니다."
    });
    push(items, { vi: "Mũ dễ bị thổi bay, không mặc váy xòe rộng", en: "Hats may blow away; avoid loose long skirts", zh: "帽子易被吹走，勿穿宽大长裙", ko: "모자가 날아갈 수 있으니 통이 넓은 긴 치마는 피하세요" });
  }

  // ── Clear / overcast ──────────────────────────────────────────────────
  if (isClear) {
    push(plan, {
      vi: "Trời quang đãng — thích hợp đi ngoài trời và ngắm bình minh, hoàng hôn.",
      en: "Clear skies — good for outdoor visits and sunrise or sunset views.",
      zh: "天气晴朗——适合户外游览与看日出日落。",
      ko: "맑은 날씨 — 야외 관람과 일출·일몰 감상에 좋습니다."
    });
    push(items, { vi: "Nhớ bôi chống nắng", en: "Remember sun protection", zh: "记得防晒", ko: "선크림을 바르세요" });
  } else if (isOvercast) {
    push(plan, {
      vi: "Ánh sáng dịu — rất hợp để chụp ảnh, không nắng gắt nên dạo ngoài trời lâu cũng ổn.",
      en: "Soft light — great for photos; no harsh sun so longer outdoor strolls are fine.",
      zh: "光线柔和——很适合拍照；无烈日，长时间户外漫步也行。",
      ko: "부드러운 빛 — 사진 찍기에 좋고 강한 햇빛이 없어 긴 야외 산책도 괜찮습니다."
    });
  }

  // ── Fog ───────────────────────────────────────────────────────────────
  if (isFog) {
    alert = alert ?? {
      vi: "Sương mù dày — tầm nhìn kém, phà và chuyến bay dễ chậm trễ; không thích hợp ngắm cảnh biển hay núi.",
      en: "Dense fog — poor visibility, ferries and flights may be delayed; not good for sea or mountain views.",
      zh: "大雾——能见度差，轮渡与航班可能延误；不宜观海或登山。",
      ko: "짙은 안개 — 가시거리가 짧고 페리·항공편이 지연되기 쉬우며 바다·산 조망에 부적합합니다."
    };
    push(items, { vi: "Khẩu trang", en: "Face mask", zh: "口罩", ko: "마스크" });
  }

  // ── Fallback when nothing notable ─────────────────────────────────────
  if (!alert && outfit.length === 0 && plan.length === 0 && items.length === 0) {
    push(plan, {
      vi: "Thời tiết ôn hòa — thuận tiện để dạo chợ và đi bộ quanh trung tâm.",
      en: "Mild weather — good for browsing the market and walking downtown.",
      zh: "天气温和——适合逛市场与市中心散步。",
      ko: "날씨가 온화해 시장 둘러보기와 도심 산책에 좋습니다."
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
          labelZh: info.zh,
          labelKo: info.ko,
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
            labelZh: di.zh,
            labelKo: di.ko,
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

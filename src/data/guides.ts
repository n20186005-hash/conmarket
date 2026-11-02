// Content registry for every Chợ Cồn topic page (plan A–F, 45 pages).
// Each entry renders through src/pages/[slug].astro. Language fields are strict:
// vi/en use Latin scripts only; zh uses Han only; ko uses Hangul only — no cross-script leaks.

export interface L { vi: string; en: string; zh: string; ko: string; }
export interface Item { n: string; t: L; b: L; }
export interface Section { idx: string; eye: L; title: L; intro?: L; items: Item[]; }
export interface Faq { q: L; a: L; }
export interface Rel { slug: string; tag: L; title: L; desc: L; }
export interface Guide {
  slug: string;
  cat: string;
  title: L;
  desc: L;
  hero: { eye: L; h1: L; intro: L };
  sections: Section[];
  faqs: Faq[];
  rel: Rel[];
  transport?: boolean;
}

export const guides: Guide[] = [
  // ===== A1 — Giờ mở cửa =====
  {
    slug: "gio-mo-cua-cho-con",
    cat: "A",
    title: { vi: "Giờ mở cửa Chợ Cồn Đà Nẵng — Hướng dẫn", en: "Chợ Cồn (Con Market) Đà Nẵng — Opening hours", zh: "岘港昆市场营业时间 — 指南", ko: "다낭 꼰 시장 영업 시간 — 가이드" },
    desc: { vi: "Khung giờ thường thấy, thời điểm nên đi, thanh toán và tiện ích tại Chợ Cồn Đà Nẵng.", en: "Commonly listed hours, best time to visit, payment and facilities at Chợ Cồn in Đà Nẵng.", zh: "岘港昆市场的通常营业时间、最佳到访时间与支付、设施实用指南。", ko: "다낭 꼰 시장의 일반 영업 시간·방문 적기·결제·편의시설 안내." },
    hero: {
      eye: { vi: "Thông tin thực tế", en: "Practical info", zh: "实用信息", ko: "실용 정보" },
      h1: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" },
      intro: { vi: "Chợ Cồn là chợ truyền thống đang vận hành thật, nên giờ của từng khu hàng có thể khác nhau. Dưới đây là khung tham khảo để bạn sắp xếp chuyến đi.", en: "Con Market is a working traditional market, so hours vary by section. The notes below are a reference frame for planning your visit.", zh: "昆市场是真实运转的传统市场，各区域营业时间可能不同。以下为安排行程的参考框架。", ko: "꼰 시장은 실제 운영되는 전통 시장이라 구역마다 시간이 다를 수 있습니다. 아래는 동선 계획을 위한 참고 틀입니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Giờ & nhịp điệu", en: "Hours & rhythm", zh: "时间与节奏", ko: "시간과 리듬" },
        title: { vi: "Sắp xếp thời gian ghé chợ", en: "Plan your market timing", zh: "安排逛市场的时间", ko: "시장 방문 시간 계획" },
        intro: { vi: "Khung giờ dưới đây thường được ghi nhận, nhưng từng quầy có thể mở muộn hoặc nghỉ riêng.", en: "The frame below is commonly listed, yet individual stalls may open later or close on their own schedule.", zh: "以下时段为通常记录，但各摊位可能延后开门或自行休息。", ko: "아래는 일반적으로 알려진 틀이나 가게마다 늦게 열거나 쉴 수 있습니다." },
        items: [
          { n: "01", t: { vi: "Giờ thường thấy", en: "Commonly listed hours", zh: "通常营业时间", ko: "일반 영업 시간" }, b: { vi: "Khu chợ thường được ghi nhận mở cửa hàng ngày từ khoảng 07:00 đến 19:00.", en: "The market is commonly listed as open daily from about 07:00 to 19:00.", zh: "市场通常每日约 07:00 至 19:00 营业。", ko: "시장은 보통 매일 약 07:00~19:00 영업합니다." } },
          { n: "02", t: { vi: "Giờ theo khu vực", en: "Hours by section", zh: "按区域时间", ko: "구역별 시간" }, b: { vi: "Khu thực phẩm và ăn uống nhộn nhịp từ sớm; hàng khô, vải vóc mở suốt ngày.", en: "Food and eating areas are busy from early; dried goods and fabrics run through the day.", zh: "食品与饮食区清晨便热闹；干货、布艺全天营业。", ko: "식료품·식사 구역은 이른 아침부터 붐비고 건어물·직물은 종일 영업합니다." } },
          { n: "03", t: { vi: "Thời điểm nên đi", en: "Best time to go", zh: "最佳到访时间", ko: "방문 적기" }, b: { vi: "Sáng sớm (07:00–09:00) hợp quan sát khu thực phẩm; trưa cân bằng; chiều linh hoạt nhưng nắng hơn.", en: "Early morning (07:00–09:00) suits the food trade; midday is balanced; afternoon is flexible but hotter.", zh: "清晨（07:00–09:00）适合看食品交易；中午均衡；下午灵活但更晒。", ko: "이른 아침(07:00~09:00)은 식료품 장사 보기에 좋고 정오는 균형, 오후는 유연하나 더웁니다." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Chợ Cồn mở cửa mấy giờ?", en: "What are Chợ Cồn's opening hours?", zh: "昆市场几点营业？", ko: "꼰 시장은 몇 시에 영업하나요?" }, a: { vi: "Khu chợ thường được ghi nhận mở cửa hàng ngày từ khoảng 07:00 đến 19:00. Giờ của từng quầy có thể khác nhau, nên kiểm tra trực tiếp khi đến.", en: "The market is commonly listed as open daily from about 07:00 to 19:00. Individual stall hours can differ, so check on arrival.", zh: "市场通常每日约 07:00 至 19:00 营业；各摊位时间可能不同，到店时请确认。", ko: "시장은 보통 매일 약 07:00~19:00 영업합니다. 가게마다 다를 수 있으니 방문 시 확인하세요." } },
      { q: { vi: "Chợ Cồn có đóng cửa vào ngày nào không?", en: "Is the market closed on any day?", zh: "昆市场有固定休市日吗？", ko: "꼰 시장은 쉬는 날이 있나요?" }, a: { vi: "Chợ không có thông tin đóng cửa cố định theo tuần; hầu hết quầy hoạt động hàng ngày, riêng một số gian có thể nghỉ theo lịch riêng.", en: "No fixed weekly closure is listed; most stalls run daily, though a few may close on their own schedule.", zh: "无固定按周的休市；多数摊位每日营业，少数可能按自身安排休息。", ko: "고정 휴무는 없으며 대부분 매일 영업하나 일부는 각자 쉴 수 있습니다." } },
      { q: { vi: "Buổi nào đông nhất?", en: "When is it busiest?", zh: "哪个时段最拥挤？", ko: "언제 가장 붐비나요?" }, a: { vi: "Sáng sớm thường nhộn nhịp ở khu thực phẩm; giữa trưa và cuối tuần cũng đông hơn.", en: "Early morning is busiest in the food section; midday and weekends are also fuller.", zh: "清晨食品区最拥挤；中午与周末也更忙。", ko: "이른 아침 식료품 구역이 가장 붐비고 정오·주말도 많습니다." } },
      { q: { vi: "Có thể thanh toán bằng thẻ ở chợ không?", en: "Can I pay by card at the market?", zh: "市场内能刷卡吗？", ko: "시장에서 카드 결제가 되나요?" }, a: { vi: "Cách thanh toán khác nhau theo từng quầy. Nên mang tiền mặt mệnh giá nhỏ và hỏi giá trước khi gọi món hoặc mua hàng.", en: "Payment varies by stall. Carry small-denomination cash and ask the price before ordering or buying.", zh: "支付方式因摊位而异。请带小额现金，点餐或购买前先问价。", ko: "결제는 가게마다 다릅니다. 소액 현금을 준비하고 주문·구매 전 가격을 물어보세요." } }
    ],
    rel: [
      { slug: "gio-nao-nen-di-cho-con", tag: { vi: "Thời điểm", en: "Timing", zh: "时机", ko: "시기" }, title: { vi: "Giờ nào nên đi", en: "Best time to visit", zh: "最佳到访时间", ko: "방문 적기" }, desc: { vi: "So sánh nhịp chợ theo buổi và mùa.", en: "Compare the market rhythm by time of day and season.", zh: "按时段与季节比较市场节奏。", ko: "시간대와 계절별 시장 리듬을 비교하세요." } },
      { slug: "an-gi-o-cho-con", tag: { vi: "Món ăn", en: "Food", zh: "美食", ko: "음식" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng, trung lập.", en: "Food types by stall, described neutrally.", zh: "按摊位类型介绍美食，中立客观。", ko: "가게 유형별 음식, 중립적으로 안내." } },
      { slug: "cach-den-cho-con", tag: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Từ sân bay, xe buýt, taxi và đi bộ.", en: "From the airport, bus, taxi and on foot.", zh: "从机场、公交、出租车与步行。", ko: "공항·버스·택시·도보 안내." } }
    ]
  },
  // ===== A2 — Sơ đồ chợ =====
  {
    slug: "so-do-cho-con",
    cat: "A",
    title: { vi: "Sơ đồ Chợ Cồn Đà Nẵng — Cửa vào & khu vực", en: "Chợ Cồn (Con Market) map — entrances & sections", zh: "岘港昆市场平面图 — 入口与分区", ko: "다낭 꼰 시장 평면도 — 출입구와 구역" },
    desc: { vi: "Các cửa tiếp cận, khu thực phẩm, khô và ăn uống tại Chợ Cồn; hướng dẫn định hướng trung lập.", en: "Entrances, fresh-food, dried-goods and eating sections at Chợ Cồn; neutral orientation.", zh: "昆市场的入口、生鲜、干货与餐饮分区；中立导向说明。", ko: "꼰 시장의 출입구·신선식품·건어물·식사 구역 안내." },
    hero: {
      eye: { vi: "Định hướng", en: "Orientation", zh: "导览", ko: "안내" },
      h1: { vi: "Sơ đồ Chợ Cồn", en: "Chợ Cồn layout", zh: "昆市场布局", ko: "꼰 시장 구조" },
      intro: { vi: "Chợ Cồn có các lối vào hướng Hùng Vương và Ông Ích Khiêm. Dưới đây là cách hình dung các khu vực để bạn đi lại thuận tiện.", en: "Con Market has entrances facing Hùng Vương and Ông Ích Khiêm. Below is how to picture the sections for easy movement.", zh: "昆市场有面向雄王街与英节卿街的两侧入口。以下帮助你认识各区域以便顺畅走动。", ko: "꼰 시장은 훙브엉과 온 이히 껌 방면 출입구가 있습니다. 구역을 파악해 편하게 이동하세요." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Cửa vào", en: "Entrances", zh: "入口", ko: "출입구" },
        title: { vi: "Hai cửa tiếp cận chính", en: "Two main approaches", zh: "两个主要入口", ko: "두 개의 주요 출입구" },
        intro: { vi: "Dùng ghim bản đồ để đến đúng bên; hai mặt tiền nằm trên hai trục phố khác nhau.", en: "Use the map pin to reach the right side; the two frontages sit on different streets.", zh: "用地图定位到达正确的一侧；两个临街面位于不同街道。", ko: "지도 핀으로 올바른 쪽으로 가세요. 두 정면은 서로 다른 거리에 있습니다." },
        items: [
          { n: "01", t: { vi: "Mặt Hùng Vương", en: "Hùng Vương frontage", zh: "雄王街一侧", ko: "훙브엉 측" }, b: { vi: "Một mặt tiền chính của chợ, thuận tiện từ trung tâm thành phố đi tới.", en: "A main frontage, convenient when coming from the city centre.", zh: "市场主要临街面之一，从市中心前来很方便。", ko: "시장의 주요 정면 중 하나로 도심에서 오기 좋습니다." } },
          { n: "02", t: { vi: "Mặt Ông Ích Khiêm", en: "Ông Ích Khiêm frontage", zh: "英节卿街一侧", ko: "온 이히 껌 측" }, b: { vi: "Mặt tiền thứ hai, hữu ích khi đi từ hướng khác của Hải Châu.", en: "The second frontage, useful when approaching from another part of Hải Châu.", zh: "第二临街面，从海洲郡其他方向前来时很实用。", ko: "두 번째 정면으로 하이쩌우 다른 방면에서 올 때 유용합니다." } },
          { n: "03", t: { vi: "Dấu bản đồ", en: "Map pin", zh: "地图定位", ko: "지도 핀" }, b: { vi: "Ghim bản đồ dẫn đến một bên chợ; hỏi thêm nhân viên nếu cần cửa gần nhất.", en: "The map pin leads to one side; ask staff for the nearest gate if needed.", zh: "地图定位指向市场一侧；若需最近入口可询问工作人员。", ko: "지도 핀은 한쪽으로 안내합니다. 필요하면 직원에게 가장 가까운 문을 물어보세요." } }
        ]
      },
      {
        idx: "02",
        eye: { vi: "Khu vực", en: "Sections", zh: "分区", ko: "구역" },
        title: { vi: "Các khu vực bên trong", en: "Inside sections", zh: "内部各区域", ko: "내부 구역" },
        items: [
          { n: "01", t: { vi: "Khu thực phẩm tươi", en: "Fresh-food section", zh: "生鲜区", ko: "신선식품 구역" }, b: { vi: "Rau, thịt, hải sản và trái cây theo mùa; nhộn nhịp vào buổi sáng.", en: "Vegetables, meat, seafood and seasonal fruit; busiest in the morning.", zh: "蔬菜、肉类、海鲜与时令水果；清晨最热闹。", ko: "채소·고기·해산물·제철 과일, 아침에 가장 붐빕니다." } },
          { n: "02", t: { vi: "Khu đồ khô & gia vị", en: "Dried goods & spices", zh: "干货与香料区", ko: "건어물·향신료 구역" }, b: { vi: "Cà phê, hạt điều, gia vị và đặc sản khô đóng gói.", en: "Coffee, cashews, spices and packaged dried specialities.", zh: "咖啡、腰果、香料与包装干特产。", ko: "커피·캐슈너트·향신료·포장 건특산품." } },
          { n: "03", t: { vi: "Khu ăn uống", en: "Eating area", zh: "餐饮区", ko: "식사 구역" }, b: { vi: "Các quầy chế biến tại chỗ, phù hợp ăn nhanh và nghỉ giữa buổi.", en: "Prepared-food stalls for quick bites and mid-visit breaks.", zh: "现做摊位，适合简餐与中途休息。", ko: "조리 가게로 간단한 식사와 휴식에 좋습니다." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Chợ Cồn có sơ đồ chính thức không?", en: "Is there an official map of the market?", zh: "市场有官方平面图吗？", ko: "시장에 공식 평면도가 있나요?" }, a: { vi: "Chúng tôi không có sơ đồ chính thức; phần trên là khung định hướng trung lập, không thay thế biển chỉ dẫn tại chỗ.", en: "We do not hold an official map; the outline above is neutral orientation, not a substitute for on-site signs.", zh: "我们无官方平面图；上方仅为中立导向框架，不替代现场指示牌。", ko: "공식 평면도는 없으며 위 안내는 중립적 틀이지 현장 안내판을 대신하지 않습니다." } },
      { q: { vi: "Cửa nào gần nhất với khu ăn uống?", en: "Which entrance is closest to the food area?", zh: "哪个入口离餐饮区最近？", ko: "어느 출입구가 식사 구역과 가장 가까운가요?" }, a: { vi: "Tuỳ mặt bằng ngày; hãy hỏi nhân viên hoặc xem biển chỉ dẫn khi vào chợ.", en: "It depends on the day's layout; ask staff or follow posted signs on arrival.", zh: "取决于当天布局；进场时询问工作人员或看指示牌。", ko: "당일 구조에 따라 다릅니다. 입장 시 직원이나 안내판을 참고하세요." } },
      { q: { vi: "Có lối đi cho xe đẩy không?", en: "Is there space for a stroller or wheelchair?", zh: "有推车或轮椅通道吗？", ko: "유모차나 휠체어 통로가 있나요?" }, a: { vi: "Mặt bằng, bậc thềm và lối đi thay đổi theo khu. Người cần hỗ trợ nên đi cùng người đồng hành.", en: "Surfaces, steps and aisle widths vary by section. Visitors needing help should bring a companion.", zh: "地面、台阶与通道宽度因区域而异；需要协助者请结伴。", ko: "바닥·계단·통로 폭은 구역마다 다릅니다. 도움이 필요하면 동행하세요." } },
      { q: { vi: "Chợ có mất vé vào cửa không?", en: "Is there an entrance fee?", zh: "需要门票吗？", ko: "입장료가 있나요?" }, a: { vi: "Không có thông tin về vé cổng; chi tiêu tuỳ theo lựa chọn ăn uống, mua sắm của bạn.", en: "No gate ticket is listed; spending depends on your food and shopping choices.", zh: "未列出门票信息；花费视你的餐饮与购物选择而定。", ko: "입장료 정보는 없으며 지출은 식사·쇼핑 선택에 따릅니다." } }
    ],
    rel: [
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } },
      { slug: "khu-am-thuc-cho-con", tag: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" }, title: { vi: "Khu ẩm thực Chợ Cồn", en: "Chợ Cồn food court", zh: "昆市场餐饮区", ko: "꼰 시장 식사 구역" }, desc: { vi: "So sánh khu trong nhà và ngoài trời.", en: "Compare indoor and outdoor eating areas.", zh: "室内外餐饮区比较。", ko: "실내외 식사 구역 비교." } },
      { slug: "cach-den-cho-con", tag: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Từ sân bay, xe buýt, taxi và đi bộ.", en: "From the airport, bus, taxi and on foot.", zh: "从机场、公交、出租车与步行。", ko: "공항·버스·택시·도보 안내." } }
    ]
  },
  // ===== A3 — Cách đến (transport) =====
  {
    slug: "cach-den-cho-con",
    cat: "A",
    transport: true,
    title: { vi: "Đường đi Chợ Cồn Đà Nẵng — Địa chỉ & bản đồ", en: "Getting to Chợ Cồn Đà Nẵng — address & map", zh: "前往岘港昆市场 — 地址与地图", ko: "다낭 꼰 시장 가는 길 — 주소와 지도" },
    desc: { vi: "Ghim bản đồ Chợ Cồn, hai mặt tiền Hùng Vương và Ông Ích Khiêm, cùng lưu ý đi lại.", en: "Map pin for Chợ Cồn, its Hùng Vương and Ông Ích Khiêm frontages, and arrival notes.", zh: "昆市场地图定位、雄王街与英节卿街两侧入口及抵达提示。", ko: "꼰 시장 지도 핀, 훙브엉·온 이히 껌 정면과 도착 참고." },
    hero: {
      eye: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" },
      h1: { vi: "Đường đi Chợ Cồn", en: "Directions to Con Market", zh: "昆市场交通", ko: "꼰 시장 길찾기" },
      intro: { vi: "Chợ Cồn có hai mặt tiền trên Hùng Vương và Ông Ích Khiêm. Dùng ghim bản đồ dưới đây để đến đúng bên.", en: "Con Market has frontages on Hùng Vương and Ông Ích Khiêm. Use the map pin below to reach the right side.", zh: "昆市场有雄王街与英节卿街两侧临街面。请用下方地图定位到达正确一侧。", ko: "꼰 시장은 훙브엉과 온 이히 껌에 정면이 있습니다. 아래 지도 핀으로 올바른 쪽으로 가세요." }
    },
    sections: [],
    faqs: [
      { q: { vi: "Địa chỉ chính xác là gì?", en: "What is the exact address?", zh: "准确的地址是什么？", ko: "정확한 주소는 무엇인가요?" }, a: { vi: "Chợ có hai mặt tiền: Hùng Vương và Ông Ích Khiêm, phường Hải Châu, Đà Nẵng. Dùng ghim bản đồ để đến đúng bên.", en: "The market has two frontages: Hùng Vương and Ông Ích Khiêm, Hải Châu, Đà Nẵng. Use the map pin to reach the correct side.", zh: "市场有两面临街面：雄王街与英节卿街，位于岘港海洲郡。请用地图定位到达正确一侧。", ko: "시장은 훙브엉과 온 이히 껌 두 정면이 있습니다. 지도 핀으로 올바른 쪽으로 가세요." } },
      { q: { vi: "Nên đi bằng gì từ trung tâm?", en: "How should I travel from the centre?", zh: "从市中心怎么去？", ko: "도심에서 어떻게 가나요?" }, a: { vi: "Taxi, Grab hoặc xe buýt đều thuận tiện; xác nhận cửa xuống xe với tài xế vì có hai mặt tiền.", en: "Taxi, Grab or bus are all convenient; confirm your drop-off gate with the driver since there are two frontages.", zh: "出租车、Grab 或公交都方便；因有两面临街面，请与司机确认下车入口。", ko: "택시·그랩·버스 모두 편리하며 정면이 두 곳이라 운전기사와 하차문을 확인하세요." } },
      { q: { vi: "Có nên tự lái tới chợ không?", en: "Should I drive myself to the market?", zh: "要自己开车去市场吗？", ko: "직접 운전해 가나요?" }, a: { vi: "Có thể, nhưng chỗ gửi xe phụ thuộc cổng và thời điểm. Hỏi nhân viên khu gửi xe khi đến.", en: "You can, but parking depends on the gate and time. Ask parking staff on arrival.", zh: "可以，但车位取决于入口与时段。到场后请咨询停车处工作人员。", ko: "가능하나 주차는 출입구와 시간에 따라 다릅니다. 도착해 주차 안내원에게 문의하세요." } },
      { q: { vi: "Từ sân bay mất bao lâu?", en: "How long from the airport?", zh: "从机场要多久？", ko: "공항에서 얼마나 걸리나요?" }, a: { vi: "Khoảng 15–25 phút tuỳ giao thông; thời gian và giá tuỳ dịch vụ và giờ cao điểm.", en: "About 15–25 minutes depending on traffic; time and fare vary by service and peak hours.", zh: "约 15–25 分钟，视交通而定；时间与费用因服务与高峰而异。", ko: "교통에 따라 약 15~25분, 시간과 요금은 서비스와 피크타임에 따라 다릅니다." } }
    ],
    rel: [
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } },
      { slug: "bai-do-xe-cho-con", tag: { vi: "Xe cộ", en: "Parking", zh: "停车", ko: "주차" }, title: { vi: "Gửi xe Chợ Cồn", en: "Parking at Chợ Cồn", zh: "昆市场停车", ko: "꼰 시장 주차" }, desc: { vi: "Vị trí và lưu ý gửi xe máy, ô tô.", en: "Motorbike and car parking notes.", zh: "摩托车与汽车停车提示。", ko: "오토바이·승용차 주차 참고." } },
      { slug: "san-bay-da-nang-den-cho-con", tag: { vi: "Từ sân bay", en: "From airport", zh: "从机场", ko: "공항에서" }, title: { vi: "Sân bay đến Chợ Cồn", en: "Airport to Chợ Cồn", zh: "机场到昆市场", ko: "공항에서 꼰 시장" }, desc: { vi: "So sánh gọi xe, hành lý và chi phí.", en: "Compare ride-hailing, luggage and cost.", zh: "比较叫车、行李与费用。", ko: "호출택시·짐·비용 비교." } }
    ]
  },
  // ===== A4 — Bãi đỗ xe =====
  {
    slug: "bai-do-xe-cho-con",
    cat: "A",
    title: { vi: "Gửi xe Chợ Cồn Đà Nẵng — Lưu ý", en: "Parking at Chợ Cồn Đà Nẵng — notes", zh: "岘港昆市场停车 — 提示", ko: "다낭 꼰 시장 주차 — 참고" },
    desc: { vi: "Vị trí gửi xe máy, ô tô, quy tắc tại chỗ và lưu ý an toàn tại Chợ Cồn.", en: "Motorbike and car parking spots, on-site rules and safety notes at Chợ Cồn.", zh: "昆市场的摩托车、汽车停车位置、现场规则与安全提示。", ko: "꼰 시장의 오토바이·승용차 주차, 현장 규정, 안전 참고." },
    hero: {
      eye: { vi: "Xe cộ", en: "Parking", zh: "停车", ko: "주차" },
      h1: { vi: "Gửi xe Chợ Cồn", en: "Parking at Chợ Cồn", zh: "昆市场停车", ko: "꼰 시장 주차" },
      intro: { vi: "Chỗ gửi xe thay đổi theo cổng, thời điểm và quy định tại chỗ. Dưới đây là khung tham khảo.", en: "Parking availability changes by gate, time and on-site rules. The notes below are a reference frame.", zh: "停车与否随入口、时段和现场规定变化。以下为参考框架。", ko: "주차 가능 여부는 출입구·시간·현장 규정에 따라 다릅니다. 아래는 참고 틀입니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Gửi xe", en: "Parking", zh: "停车", ko: "주차" },
        title: { vi: "Các lưu ý gửi xe", en: "Parking pointers", zh: "停车要点", ko: "주차 요령" },
        items: [
          { n: "01", t: { vi: "Xe máy", en: "Motorbike", zh: "摩托车", ko: "오토바이" }, b: { vi: "Khu gửi xe máy thường nằm gần một cổng; hỏi nhân viên khu vực gửi xe khi đến.", en: "Motorbike parking is usually near a gate; ask parking staff on arrival.", zh: "摩托车停车通常靠近某入口；到场询问停车处工作人员。", ko: "오토바이 주차는 보통 한 출입구 근처, 도착해 주차 안내원에게 문의하세요." } },
          { n: "02", t: { vi: "Ô tô", en: "Car", zh: "汽车", ko: "승용차" }, b: { vi: "Chỗ ô tô hạn chế và phụ thuộc thời điểm; tránh đỗ trên làn xe lưu thông.", en: "Car spaces are limited and time-dependent; avoid stopping in traffic lanes.", zh: "汽车车位有限且随时段变化；勿在车道停靠。", ko: "승용차 자리는 제한적이고 시간에 따릅니다. 차로에 정차하지 마세요." } },
          { n: "03", t: { vi: "An toàn", en: "Safety", zh: "安全", ko: "안전" }, b: { vi: "Gửi đồ giá trị cùng người đi cùng; ghi nhớ vị trí xe trước khi vào chợ.", en: "Keep valuables with your party and note where you left the vehicle before entering.", zh: "贵重物品随身携带；进场前记住车辆位置。", ko: "귀중품은 동행과 함께 두고 입장 전 차 위치를 기억하세요." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Có bãi đỗ xe riêng không?", en: "Is there a dedicated car park?", zh: "有专用停车场吗？", ko: "전용 주차장이 있나요?" }, a: { vi: "Không có thông tin bãi đỗ chính thức; chỗ trống thay đổi theo cổng và giờ. Hỏi nhân viên khi đến.", en: "No official car park is listed; spaces change by gate and hour. Ask staff on arrival.", zh: "未列出官方停车场；空位随入口与时段变化。到场询问工作人员。", ko: "공식 주차장 정보는 없으며 자리는 출입구와 시간에 따라 다릅니다. 도착해 직원에게 문의하세요." } },
      { q: { vi: "Có mất phí gửi xe không?", en: "Is there a parking fee?", zh: "停车收费吗？", ko: "주차 요금이 있나요?" }, a: { vi: "Nếu có, mức phí do đơn vị tại chỗ quy định; hỏi rõ trước khi gửi.", en: "If charged, the rate is set on-site; confirm before leaving your vehicle.", zh: "若收费，标准由现场定；寄存前先问清。", ko: "요금이 있다면 현장 기준이니 맡기기 전 확인하세요." } },
      { q: { vi: "Có nên đi xe máy tới chợ không?", en: "Should I ride a motorbike there?", zh: "要骑摩托车去吗？", ko: "오토바이로 가나요?" }, a: { vi: "Thuận tiện nếu quen đường, nhưng để xe đâu cần hỏi kỹ nhân viên gửi xe.", en: "Handy if you know the roads, but confirm the parking spot with staff.", zh: "熟悉路况会很方便，但停车处务必向工作人员确认。", ko: "길에 익숙하면 편하나 주차는 직원에게 꼭 확인하세요." } },
      { q: { vi: "Gửi xe đạp hoặc xe đẩy được không?", en: "Can I park a bicycle or stroller?", zh: "自行车或推车能停吗？", ko: "자전거나 유모차를 둘 수 있나요?" }, a: { vi: "Xe đạp thường gửi cùng khu xe máy; xe đẩy mang vào trong tuỳ mặt bằng từng khu.", en: "Bicycles usually join the motorbike area; strollers inside depend on each section's layout.", zh: "自行车通常同摩托车区；推车进场视各区域地面而定。", ko: "자전거는 보통 오토바이 구역에, 유모차는 구역 바닥에 따라 다릅니다." } }
    ],
    rel: [
      { slug: "cach-den-cho-con", tag: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Từ sân bay, xe buýt, taxi và đi bộ.", en: "From the airport, bus, taxi and on foot.", zh: "从机场、公交、出租车与步行。", ko: "공항·버스·택시·도보 안내." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } },
      { slug: "khach-san-gan-cho-con", tag: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" }, title: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" }, desc: { vi: "Chọn nơi ở theo vị trí và cách đi lại.", en: "Choose where to stay by location and ease of travel.", zh: "按位置与交通便利度选住宿。", ko: "위치와 이동 편의로 숙소를 고르세요." } }
    ]
  },
  // ===== A5 — Giờ nào nên đi =====
  {
    slug: "gio-nao-nen-di-cho-con",
    cat: "A",
    title: { vi: "Giờ nào nên đi Chợ Cồn — Đông, vắng & thời tiết", en: "Best time to visit Chợ Cồn — crowds, quiet & weather", zh: "昆市场最佳到访时间 — 拥挤、清静与天气", ko: "꼰 시장 방문 적기 — 붐빔·한적·날씨" },
    desc: { vi: "So sánh nhịp chợ theo buổi và mùa, cùng lưu ý thời tiết khi ghé Chợ Cồn.", en: "Compare the market rhythm by time of day and season, plus weather notes for visiting Chợ Cồn.", zh: "按一天的时段与季节比较市场节奏，并附昆市场天气提示。", ko: "시간대와 계절별 시장 리듬 비교, 꼰 시장 날씨 참고." },
    hero: {
      eye: { vi: "Thời điểm", en: "Timing", zh: "时机", ko: "시기" },
      h1: { vi: "Giờ nào nên đi", en: "Best time to visit", zh: "最佳到访时间", ko: "방문 적기" },
      intro: { vi: "Chợ đông theo buổi và mùa. Chọn khung giờ phù hợp giúp bạn quan sát dễ hơn và đỡ chen lấn.", en: "The market fills by time of day and season. Picking the right window makes observing easier and less crowded.", zh: "市场按一天时段与季节变化拥挤程度。选对时间更易观察、更少拥挤。", ko: "시장은 시간대와 계절에 따라 붐빕니다. 알맞은 시간을 고르면 관찰이 쉽고 덜 붐빕니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Theo buổi", en: "By time of day", zh: "按一天时段", ko: "시간대별" },
        title: { vi: "Nhịp chợ trong ngày", en: "Market rhythm through the day", zh: "市场的一天节奏", ko: "하루 시장 리듬" },
        items: [
          { n: "01", t: { vi: "Sáng sớm", en: "Early morning", zh: "清晨", ko: "이른 아침" }, b: { vi: "Khu thực phẩm nhộn nhịp nhất; hợp người muốn xem buôn bán địa phương.", en: "The food section is at its busiest; good for watching local trade.", zh: "生鲜区最热闹；适合想看本地交易的人。", ko: "식료품 구역이 가장 붐비며 지역 장사를 보기에 좋습니다." } },
          { n: "02", t: { vi: "Giữa trưa", en: "Midday", zh: "中午", ko: "정오" }, b: { vi: "Cân bằng giữa ăn uống và mua sắm; đỡ đông hơn sáng sớm.", en: "A balance of eating and shopping; less busy than early morning.", zh: "餐饮与购物均衡；比清晨人少。", ko: "식사와 쇼핑의 균형, 이른 아침보다 덜 붐빕니다." } },
          { n: "03", t: { vi: "Chiều", en: "Afternoon", zh: "下午", ko: "오후" }, b: { vi: "Linh hoạt nhưng nắng hơn; một số quầy có thể đã nghỉ.", en: "Flexible yet hotter; some stalls may have closed.", zh: "灵活但更晒；部分摊位可能已收。", ko: "유연하나 더우며 일부 가게는 문을 닫을 수 있습니다." } }
        ]
      },
      {
        idx: "02",
        eye: { vi: "Theo mùa", en: "By season", zh: "按季节", ko: "계절별" },
        title: { vi: "Mùa nào dễ đi", en: "Which season is easier", zh: "哪个季节好走", ko: "어느 계절이 좋은가" },
        items: [
          { n: "01", t: { vi: "Mùa khô", en: "Dry season", zh: "旱季", ko: "건기" }, b: { vi: "Thuận tiện đi bộ và chụp ảnh; trời sáng rõ hơn.", en: "Good for walking and photos; clearer light.", zh: "适合步行与拍照；光线更明亮。", ko: "산책과 사진에 좋고 빛이 맑습니다." } },
          { n: "02", t: { vi: "Mùa mưa", en: "Rainy season", zh: "雨季", ko: "우기" }, b: { vi: "Mưa rào có thể làm chậm di chuyển; mang theo áo mưa gọn.", en: "Showers can slow movement; carry a compact raincoat.", zh: "阵雨可能拖慢行程；带轻便雨衣。", ko: "소나기가 이동을 늦출 수 있으니 가벼운 비옷을 준비하세요." } },
          { n: "03", t: { vi: "Ngày lễ", en: "Holidays", zh: "节假日", ko: "공휴일" }, b: { vi: "Giờ và số quầy mở có thể thay đổi; xác minh trước chuyến đi.", en: "Hours and open stalls can change; verify before visiting.", zh: "营业时间与开市摊位可能变化；出行前核实。", ko: "시간과 열리는 가게 수가 바뀔 수 있으니 방문 전 확인하세요." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Mấy giờ là lý tưởng nhất?", en: "What time is ideal?", zh: "几点最理想？", ko: "몇 시가 가장 좋은가요?" }, a: { vi: "Khoảng 07:00–09:00 hợp xem khu thực phẩm; 09:00–11:30 cân bằng hơn nếu tránh đông.", en: "About 07:00–09:00 suits the food section; 09:00–11:30 is calmer if avoiding crowds.", zh: "约 07:00–09:00 适合看生鲜区；若避开人潮，09:00–11:30 更从容。", ko: "약 07:00~09:00은 식료품 구역에 좋고, 09:00~11:30은 한적합니다." } },
      { q: { vi: "Chợ có đông vào cuối tuần không?", en: "Is it busy on weekends?", zh: "周末会拥挤吗？", ko: "주말에 붐비나요?" }, a: { vi: "Cuối tuần và ngày lễ thường đông hơn; đến sớm giúp dễ quan sát.", en: "Weekends and holidays are usually fuller; arriving early helps.", zh: "周末与节假日通常更忙；早到更易观察。", ko: "주말과 공휴일은 보통 더 붐비니 일찍 가세요." } },
      { q: { vi: "Có nên đi khi trời mưa không?", en: "Should I go in the rain?", zh: "下雨还要去吗？", ko: "비 오는 날 가나요?" }, a: { vi: "Khu trong nhà vẫn hoạt động; mang áo mưa và đi sớm trước cơn mưa lớn.", en: "Indoor sections still run; bring a raincoat and go before heavy showers.", zh: "室内区仍营业；带雨具并在大雨前早去。", ko: "실내 구역은 영업합니다. 비옷을 챙기고 큰 비 전에 가세요." } },
      { q: { vi: "Mấy giờ nên rời chợ?", en: "When should I leave?", zh: "几点该离开？", ko: "몇 시에 떠나야 하나요?" }, a: { vi: "Trước 18:30 giúp bạn thoải mái; một số quầy đóng theo giờ riêng.", en: "Before 18:30 keeps things relaxed; some stalls close on their own schedule.", zh: "18:30 前离开更从容；部分摊位自行打烊。", ko: "18:30 전이 여유롭고, 일부 가게는 각자 문을 닫습니다." } }
    ],
    rel: [
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } },
      { slug: "lich-trinh-ngay-mua-cho-con", tag: { vi: "Mưa", en: "Rainy", zh: "雨天", ko: "비 오는 날" }, title: { vi: "Lịch trình ngày mưa", en: "Rainy-day plan", zh: "雨天行程", ko: "우천 일정" }, desc: { vi: "Kết hợp chợ, cà phê và bảo tàng khi mưa.", en: "Combine market, coffee and museums in the rain.", zh: "雨天组合市场、咖啡与博物馆。", ko: "비 오는 날 시장·커피·박물관 조합." } },
      { slug: "cach-den-cho-con", tag: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Từ sân bay, xe buýt, taxi và đi bộ.", en: "From the airport, bus, taxi and on foot.", zh: "从机场、公交、出租车与步行。", ko: "공항·버스·택시·도보 안내." } }
    ]
  },
  // ===== A6 — Kinh nghiệm lần đầu =====
  {
    slug: "kinh-nghiem-di-cho-con-lan-dau",
    cat: "A",
    title: { vi: "Kinh nghiệm đi Chợ Cồn lần đầu — Thanh toán & ứng xử", en: "First visit to Chợ Cồn — payment & etiquette", zh: "初次逛昆市场 — 支付与礼仪", ko: "꼰 시장 첫 방문 — 결제와 예절" },
    desc: { vi: "Gợi ý cho người lần đầu: hỏi giá, thanh toán, giao tiếp và tôn trọng không gian chung.", en: "Tips for first-timers: asking prices, payment, communication and respecting shared space.", zh: "给初次到访者的建议：问价、支付、沟通与尊重公共空间。", ko: "첫 방문자를 위한 팁: 가격 묻기, 결제, 소통, 공용 공간 배려." },
    hero: {
      eye: { vi: "Lần đầu", en: "First visit", zh: "初次", ko: "첫 방문" },
      h1: { vi: "Đi Chợ Cồn lần đầu", en: "First time at Chợ Cồn", zh: "初次逛昆市场", ko: "꼰 시장 첫 방문" },
      intro: { vi: "Chợ là không gian buôn bán thật. Vài thói quen nhỏ giúp chuyến đi thuận lợi và tôn trọng người bán.", en: "The market is a real trading space. A few small habits make the visit smooth and respectful.", zh: "市场是真实的交易场所。几个小习惯能让行程顺畅并尊重摊主。", ko: "시장은 진짜 거래 공간입니다. 작은 습관으로 편하고 예의 바르게 방문하세요." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" },
        title: { vi: "Hỏi giá & thanh toán", en: "Asking & paying", zh: "问价与支付", ko: "가격 묻기와 결제" },
        items: [
          { n: "01", t: { vi: "Hỏi giá trước", en: "Ask first", zh: "先问价", ko: "먼저 묻기" }, b: { vi: "Hỏi giá trước khi chọn hàng hoặc gọi món để cả hai bên rõ ràng.", en: "Ask the price before choosing goods or ordering so both sides are clear.", zh: "挑选或点餐前先问价，双方都清楚。", ko: "고르거나 주문 전 가격을 물어보세요." } },
          { n: "02", t: { vi: "Tiền mặt nhỏ", en: "Small cash", zh: "小额现金", ko: "소액 현금" }, b: { vi: "Tiền mặt mệnh giá nhỏ thuận tiện; thẻ tuỳ từng quầy.", en: "Small-denomination cash is handy; cards depend on the stall.", zh: "小额现金方便；刷卡视摊位而定。", ko: "소액 현금이 편리하며 카드는 가게마다 다릅니다." } },
          { n: "03", t: { vi: "Giữ hoá đơn", en: "Keep proof", zh: "保留凭证", ko: "영수증 보관" }, b: { vi: "Với hàng đặc sản mang đi xa, hỏi rõ bao bì và hạn dùng.", en: "For souvenirs taken far, clarify packaging and use-by details.", zh: "购买远途携带的特产，问清包装与保质期。", ko: "먼 곳 갈 특산품은 포장과 유통기한을 확인하세요." } }
        ]
      },
      {
        idx: "02",
        eye: { vi: "Ứng xử", en: "Etiquette", zh: "礼仪", ko: "예절" },
        title: { vi: "Tôn trọng không gian", en: "Respecting the space", zh: "尊重空间", ko: "공간 배려" },
        items: [
          { n: "01", t: { vi: "Xin phép chụp ảnh", en: "Ask to photograph", zh: "拍摄先征得同意", ko: "촬영 허락" }, b: { vi: "Xin phép trước khi chụp người bán hoặc khách quen.", en: "Ask before photographing vendors or regular customers.", zh: "拍摄摊主或熟客前先征得同意。", ko: "가게 주인이나 단골 촬영 전 허락을 구하세요." } },
          { n: "02", t: { vi: "Đứng gọn", en: "Stand aside", zh: "靠边站立", ko: "한쪽으로" }, b: { vi: "Khi chợ đông, đứng gọn về một bên, không chặn lối đi.", en: "When busy, keep to one side and do not block aisles.", zh: "人多时靠边站立，不挡通道。", ko: "붐비면 통로 한쪽으로 물러서세요." } },
          { n: "03", t: { vi: "Để ý xe", en: "Watch vehicles", zh: "留意车辆", ko: "차량 조심" }, b: { vi: "Xe máy thường chạy sát lối ngoài; giữ trẻ em và túi gọn.", en: "Motorbikes often use outer lanes; keep children and bags close.", zh: "摩托车常走外侧车道；看管好儿童与包袋。", ko: "오토바이는 외곽 차로를 이용하니 아이와 가방을 가까이 두세요." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Có cần biết tiếng Việt không?", en: "Do I need to speak Vietnamese?", zh: "需要会越南语吗？", ko: "베트남어를 알아야 하나요?" }, a: { vi: "Không bắt buộc; chỉ tay, số và hỏi giá bằng tiếng Anh thường đủ.", en: "Not required; pointing, numbers and asking price in English usually suffice.", zh: "非必须；用手指、数字与英语问价通常足够。", ko: "필요 없으며 손짓·숫자·영어로 가격 묻기가 보통 충분합니다." } },
      { q: { vi: "Có an toàn cho du khách không?", en: "Is it safe for visitors?", zh: "对游客安全吗？", ko: "방문객에게 안전한가요?" }, a: { vi: "Là không gian công cộng đông đúc; giữ túi gọn và để ý xung quanh.", en: "It is a busy public space; keep bags compact and stay aware.", zh: "是拥挤的公共场所；收好包袋、留意四周。", ko: "붐비는 공공장소로 가방을 가까이 두고 주변을 살피세요." } },
      { q: { vi: "Nên mang theo gì?", en: "What should I bring?", zh: "该带什么？", ko: "뭘 챙기나요?" }, a: { vi: "Tiền mặt nhỏ, túi gọn, nước uống và áo mưa tuỳ mùa.", en: "Small cash, a compact bag, water and a raincoat by season.", zh: "小额现金、轻便包、饮水与按季节的雨具。", ko: "소액 현금, 가벼운 가방, 물, 계절별 비옷." } },
      { q: { vi: "Có nên mặc cả không?", en: "Should I bargain?", zh: "要讲价吗？", ko: "흥정해야 하나요?" }, a: { vi: "Ở quầy hàng ngày, giá thường cố định; hỏi nhẹ nhàng nếu mua số lượng nhiều.", en: "At daily stalls prices are often fixed; ask politely only for larger amounts.", zh: "日常摊位价格通常固定；量大可礼貌询问。", ko: "일상 가게는 보통 정가이며 많은 수량일 때만 정중히 여쭤보세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Món ăn", en: "Food", zh: "美食", ko: "음식" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng, trung lập.", en: "Food types by stall, described neutrally.", zh: "按摊位类型介绍美食，中立客观。", ko: "가게 유형별 음식, 중립적 안내." } },
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản và lưu ý mang đi.", en: "Specialty suggestions and travel notes.", zh: "特产建议与携带提示。", ko: "특산품 제안과 이동 참고." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== A7 — Lịch sử =====
  {
    slug: "lich-su-cho-con",
    cat: "A",
    title: { vi: "Lịch sử Chợ Cồn Đà Nẵng — Nguồn gốc & đô thị", en: "History of Chợ Cồn Đà Nẵng — origins & city", zh: "岘港昆市场历史 — 起源与城市", ko: "다낭 꼰 시장 역사 — 기원과 도시" },
    desc: { vi: "Nguồn gốc tên gọi, vai trò của chợ trong đời sống Đà Nẵng và vài nét văn hóa.", en: "The origin of the name, the market's role in Đà Nẵng life and a few cultural notes.", zh: "名称起源、市场在岘港生活中的角色与若干文化侧记。", ko: "이름의 기원, 다낭 생활에서 시장의 역할, 문화 메모." },
    hero: {
      eye: { vi: "Bối cảnh", en: "Context", zh: "背景", ko: "배경" },
      h1: { vi: "Lịch sử Chợ Cồn", en: "History of Chợ Cồn", zh: "昆市场历史", ko: "꼰 시장 역사" },
      intro: { vi: "Tên “Cồn” gợi nhớ vị trí trên một cồn đất cao xưa. Chợ nay vẫn là không gian mua sắm và ăn uống địa phương.", en: "The name “Cồn” recalls a higher sandbar of old Đà Nẵng. Today it remains a local shopping and food space.", zh: "“Cồn”一名让人联想旧岘港一处较高的沙丘。如今它仍是当地购物与饮食空间。", ko: "“Cồn”은 옛 다낭의 높은 사구를 떠올리게 합니다. 오늘날에도 현지 쇼핑·식생활 공간입니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Nguồn gốc", en: "Origins", zh: "起源", ko: "기원" },
        title: { vi: "Tên gọi & hình thành", en: "Name & formation", zh: "名称与形成", ko: "이름과 형성" },
        items: [
          { n: "01", t: { vi: "Chữ “Cồn”", en: "The word “Cồn”", zh: "“Cồn”一字", ko: "“Cồn”이라는 말" }, b: { vi: "Gợi nhớ vùng đất gò nổi trên nền thành phố xưa.", en: "Evokes a raised mound above the old city ground.", zh: "让人想起旧城地基上隆起的土丘。", ko: "옛 도심 터 위 솟은 언덕을 떠올리게 합니다." } },
          { n: "02", t: { vi: "Chợ địa phương", en: "Local market", zh: "地方市场", ko: "지역 시장" }, b: { vi: "Trở thành điểm giao thương quen thuộc của người dân quanh Hải Châu.", en: "Became a familiar trading point for residents around Hải Châu.", zh: "成为海洲郡周边居民熟悉的交易点。", ko: "하이쩌우 주민의 익숙한 거래처가 되었습니다." } },
          { n: "03", t: { vi: "Đến nay", en: "To today", zh: "至今", ko: "오늘날까지" }, b: { vi: "Vẫn vận hành như chợ truyền thống, kết hợp ăn uống và mua sắm.", en: "Still runs as a traditional market mixing food and shopping.", zh: "仍以传统市场方式运转，结合饮食与购物。", ko: "여전히 전통 시장으로 식생활과 쇼핑을 함께합니다." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Chợ Cồn có từ khi nào?", en: "How old is Chợ Cồn?", zh: "昆市场有多久历史？", ko: "꼰 시장은 얼마나 오래됐나요?" }, a: { vi: "Là chợ lâu đời của Đà Nẵng, gắn với khu vực Hải Châu; chi tiết năm tháng hãy đối chiếu nguồn chính thức.", en: "A long-standing market in Đà Nẵng tied to Hải Châu; verify exact dates with official sources.", zh: "岘港的悠久市场，与海洲郡相连；确切年代请对照官方来源。", ko: "하이쩌우와 연결된 다낭의 오래된 시장이며 정확한 연도는 공식 자료로 대조하세요." } },
      { q: { vi: "Tại sao gọi là Chợ Cồn?", en: "Why is it called Chợ Cồn?", zh: "为何叫昆市场？", ko: "왜 꼰 시장인가요?" }, a: { vi: "Tên gợi nhớ vị trí hình thành trên gò đất cao xưa của thành phố.", en: "The name recalls its origin on a higher sandbar of the old city.", zh: "名称让人想起旧城较高沙丘上的起源地。", ko: "옛 도심의 높은 사구에서 유래한 이름입니다." } },
      { q: { vi: "Chợ có thay đổi nhiều không?", en: "Has the market changed much?", zh: "市场变化大吗？", ko: "시장이 많이 변했나요?" }, a: { vi: "Vẫn giữ nhịp chợ truyền thống; một số khu được duy tu theo thời gian.", en: "It keeps a traditional market rhythm; some sections are maintained over time.", zh: "仍保持传统市场节奏；部分区域随岁月维护。", ko: "전통 시장 리듬을 유지하며 일부 구역은 시간 따라 정비됩니다." } },
      { q: { vi: "Có bảo tàng hay tài liệu về chợ không?", en: "Are there museum records about it?", zh: "有关于市场的博物馆资料吗？", ko: "시장 관련 박물관 자료가 있나요?" }, a: { vi: "Bảo tàng Điêu khắc Chăm gần đó giúp hiểu bối cảnh văn hóa rộng hơn của Đà Nẵng.", en: "The nearby Museum of Cham Sculpture helps wider cultural context of Đà Nẵng.", zh: "附近的占族雕塑博物馆有助于理解岘港更广阔的文化背景。", ko: "가까운 참 조각 박물관이 다낭의 wider 문화 맥락을 돕습니다." } }
    ],
    rel: [
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm bối cảnh văn hóa cho chuyến đi.", en: "Add cultural context to your trip.", zh: "为行程增添文化背景。", ko: "여행에 문화 맥락을 더하세요." } },
      { slug: "so-do-cho-con", tag: { vi: "Sơ đồ", en: "Layout", zh: "布局", ko: "구조" }, title: { vi: "Sơ đồ Chợ Cồn", en: "Chợ Cồn layout", zh: "昆市场布局", ko: "꼰 시장 구조" }, desc: { vi: "Hai mặt tiền và các khu vực chính.", en: "Two frontages and main sections.", zh: "两侧入口与主要分区。", ko: "두 정면과 주요 구역." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B1 — Ăn gì (replaces mon-an-cho-con) =====
  {
    slug: "an-gi-o-cho-con",
    cat: "B",
    title: { vi: "Ăn gì ở Chợ Cồn Đà Nẵng — Hướng dẫn món", en: "What to eat at Chợ Cồn Đà Nẵng — food guide", zh: "岘港昆市场吃什么 — 美食指南", ko: "다낭 꼰 시장 무엇을 먹을까 — 음식 가이드" },
    desc: { vi: "Thực phẩm và món ăn tại Chợ Cồn: các loại hình ẩm thực theo gian hàng, vệ sinh và lưu ý, hoàn toàn trung lập.", en: "Food and dishes at Chợ Cồn: food types by stall, hygiene notes, fully neutral.", zh: "昆市场的食品与美食指南：按摊位类型介绍，中立不推具体摊位。", ko: "꼰 시장의 음식: 가게 유형별 안내, 중립적." },
    hero: {
      eye: { vi: "Ẩm thực quanh chợ", en: "Food around the market", zh: "市场周边美食", ko: "시장 주변 음식" },
      h1: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" },
      intro: { vi: "Chợ Cồn thường được nhắc tới cùng văn hóa ăn vặt và nguyên liệu địa phương. Chúng tôi chỉ giới thiệu dạng trải nghiệm để giữ thông tin trung lập.", en: "Con Market is commonly associated with local snacks and ingredients. We describe experience types to stay neutral.", zh: "昆市场常与当地小吃和食材联系在一起。为保持中立，我们只介绍体验类型。", ko: "꼰 시장은 현지 간식과 식재료로 알려져 있습니다. 중립을 위해 체험 유형만 안내합니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Theo gian hàng", en: "By stall type", zh: "按摊位类型", ko: "가게 유형별" },
        title: { vi: "Tìm hiểu theo nhóm món", en: "Explore by food type", zh: "按食物类型了解", ko: "음식 유형별로" },
        intro: { vi: "Dưới đây là các dạng ẩm thực thường gặp. Giá và món cụ thể thay đổi theo từng quầy và mùa.", en: "Below are common food types. Prices and specific dishes vary by stall and season.", zh: "以下是常见食物类型。具体菜品与价格因摊位和季节而异。", ko: "아래는 흔한 음식 유형이며 가격과 요리는 가게·계절에 따라 다릅니다." },
        items: [
          { n: "01", t: { vi: "Món ăn chế biến tại chỗ", en: "Prepared-food area", zh: "现做餐饮区", ko: "조리 식사 구역" }, b: { vi: "Phù hợp gọi phần nhỏ, ăn tại chỗ; có thể gặp bún, bánh xèo, chè, ốc tuỳ quầy.", en: "Good for small, eat-on-site portions; you may find bún, bánh xèo, chè, snails by stall.", zh: "适合点小份、就地用餐；视摊位可有米线、煎饼、甜品、螺。", ko: "소량 즉석 식사에 좋으며 가게에 따라 쌀국수·녹두전·단팥·복족류가 있습니다." } },
          { n: "02", t: { vi: "Đồ khô, gia vị & đóng gói", en: "Dried goods, spices & packaged", zh: "干货、香料与包装", ko: "건어물·향신료·포장" }, b: { vi: "Cà phê, hạt điều, gia vị và đặc sản khô — kiểm tra bao bì, hạn dùng khi mang xa.", en: "Coffee, cashews, spices and dried specialities — check packaging for longer trips.", zh: "咖啡、腰果、香料与干特产——远途携带检查包装。", ko: "커피·캐슈너트·향신료·건특산품, 멀리 갈 때 포장을 확인하세요." } },
          { n: "03", t: { vi: "Trái cây & nông sản", en: "Fruit & produce", zh: "水果与农产", ko: "과일·농산물" }, b: { vi: "Trái cây theo mùa và rau củ địa phương; hỏi giá theo đơn vị.", en: "Seasonal fruit and local produce; ask how prices are measured.", zh: "时令水果与当地蔬菜；询问计价单位。", ko: "제철 과일과 현지 농산물, 단위 가격을 물어보세요." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Chợ Cồn có nhiều món ăn không?", en: "Does Chợ Cồn have a lot of food?", zh: "昆市场有很多美食吗？", ko: "꼰 시장에 음식이 많나요?" }, a: { vi: "Có các quầy ăn, khu thực phẩm tươi và gian gia vị. Chúng tôi mô tả theo dạng trải nghiệm, không đề xuất quầy cụ thể.", en: "The market includes food stalls, fresh-food and spice sections. We describe experience types, not specific stalls.", zh: "市场内有餐饮摊位、生鲜与香料区。本指南按体验类型描述，不推荐具体摊位。", ko: "시장 안에는 식당·식료품·향신료 구역이 있습니다. 특정 가게를 추천하지 않습니다." } },
      { q: { vi: "Giá món ăn ở chợ thế nào?", en: "How much does market food cost?", zh: "市场里食物大概多少钱？", ko: "시장 음식 가격은 얼마인가요?" }, a: { vi: "Giá do từng quầy tự định và thường theo khẩu phần hoặc theo cân. Hỏi giá trước khi gọi món.", en: "Prices are set per stall, usually by portion or by weight. Ask before ordering.", zh: "价格由摊位自定，通常按份或按重量。点餐前问价。", ko: "가격은 가게마다 다르며 보통 1인분 또는 중량 단위입니다. 주문 전 물어보세요." } },
      { q: { vi: "Có an toàn khi ăn ở chợ không?", en: "Is it safe to eat at the market?", zh: "在市场吃东西安全吗？", ko: "시장에서 먹는 것은 안전한가요?" }, a: { vi: "Nên chọn quầy đông khách, quan sát chế biến và hỏi thành phần nếu có dị ứng.", en: "Prefer busy stalls, watch preparation and ask ingredients if allergic.", zh: "优先人气摊位、观察制作过程，有过敏请询问成分。", ko: "손님 많은 가게를 고르고 조리 과정을 지켜보며 알레르기 있으면 재료를 물어보세요." } },
      { q: { vi: "Món nào nên thử trước?", en: "Which dish should I try first?", zh: "先试哪种食物好？", ko: "무엇을 먼저 시도할까요?" }, a: { vi: "Tuỳ sở thích, bắt đầu từ bún, bánh xèo, chè hoặc ăn vặt miền Trung. Chúng tôi chỉ gợi ý dạng món, không xếp hạng quầy.", en: "By preference, start with bún, bánh xèo, chè or Central-Vietnam snacks. We suggest types, not ranked stalls.", zh: "按喜好，可从米线、煎饼、甜品或中部小吃开始。我们只建议类型，不排名次。", ko: "취향에 따라 쌀국수·녹두전·단팥·중부 간식부터 시작하세요. 순위는 매기지 않습니다." } }
    ],
    rel: [
      { slug: "khu-am-thuc-cho-con", tag: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" }, title: { vi: "Khu ẩm thực Chợ Cồn", en: "Chợ Cồn food court", zh: "昆市场餐饮区", ko: "꼰 시장 식사 구역" }, desc: { vi: "So sánh khu trong nhà và ngoài trời.", en: "Compare indoor and outdoor eating areas.", zh: "室内外餐饮区比较。", ko: "실내외 식사 구역 비교." } },
      { slug: "mi-quang-cho-con", tag: { vi: "Món cụ thể", en: "Dishes", zh: "具体美食", ko: "요리" }, title: { vi: "Mì Quảng Chợ Cồn", en: "Mì Quảng at Chợ Cồn", zh: "昆市场广南面", ko: "꼰 시장 미 꽝" }, desc: { vi: "Món bún đặc trưng miền Trung.", en: "A signature Central-Vietnam noodle.", zh: "中部特色米线。", ko: "중부 대표 국수." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B2 — Khu ăn uống =====
  {
    slug: "khu-am-thuc-cho-con",
    cat: "B",
    title: { vi: "Khu ẩm thực Chợ Cồn — Trong nhà & ngoài trời", en: "Chợ Cồn food court — indoor & outdoor", zh: "昆市场餐饮区 — 室内与室外", ko: "꼰 시장 식사 구역 — 실내외" },
    desc: { vi: "So sánh khu ăn uống trong nhà và ngoài trời tại Chợ Cồn: không gian, món và lưu ý.", en: "Compare indoor and outdoor eating areas at Chợ Cồn: space, dishes and notes.", zh: "比较昆市场室内与室外餐饮区：空间、菜品与提示。", ko: "꼰 시장 실내외 식사 구역 비교: 공간·요리·참고." },
    hero: {
      eye: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" },
      h1: { vi: "Khu ẩm thực Chợ Cồn", en: "Chợ Cồn food court", zh: "昆市场餐饮区", ko: "꼰 시장 식사 구역" },
      intro: { vi: "Chợ có cả khu ăn uống trong nhà và không gian ngoài trời. Mỗi nơi hợp một nhịp đi khác nhau.", en: "The market has both indoor eating areas and open-air space. Each suits a different pace.", zh: "市场有室内餐饮区与露天空间。各自适合不同节奏。", ko: "시장에는 실내 식사 구역과 야외 공간이 있습니다. 각각 다른 호흡에 좋습니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Trong nhà", en: "Indoor", zh: "室内", ko: "실내" },
        title: { vi: "Khu trong nhà", en: "Indoor area", zh: "室内区", ko: "실내 구역" },
        items: [
          { n: "01", t: { vi: "Che nắng mưa", en: "Sheltered", zh: "遮阳挡雨", ko: "비바람 가림" }, b: { vi: "Thuận tiện khi trời nóng hoặc mưa rào; không khí có thể đông hơn.", en: "Handy in heat or showers; can feel busier.", zh: "天热或阵雨时方便；可能更拥挤。", ko: "더위나 소나기 때 좋으나 더 붐빌 수 있습니다." } },
          { n: "02", t: { vi: "Ghế ngồi đơn giản", en: "Simple seating", zh: "简易座位", ko: "간단 좌석" }, b: { vi: "Nhiều quầy có chỗ ngồi tại chỗ, phù hợp ăn nhanh.", en: "Many stalls have on-site seating, good for quick meals.", zh: "许多摊位有现场座位，适合简餐。", ko: "많은 가게에 즉석 좌석이 있어 간식에 좋습니다." } },
          { n: "03", t: { vi: "Đa dạng món", en: "Varied dishes", zh: "菜品多样", ko: "다양 요리" }, b: { vi: "Từ bún, bánh đến chè; tuỳ quầy theo ngày.", en: "From bún and bánh to chè; varies by stall and day.", zh: "从米线、糕点到甜品；视摊位与日期。", ko: "쌀국수·떡·단팥까지, 가게와 날짜에 따라 다릅니다." } }
        ]
      },
      {
        idx: "02",
        eye: { vi: "Ngoài trời", en: "Outdoor", zh: "室外", ko: "야외" },
        title: { vi: "Không gian ngoài trời", en: "Open-air space", zh: "露天空间", ko: "야외 공간" },
        items: [
          { n: "01", t: { vi: "Gió và ánh sáng", en: "Air & light", zh: "通风采光", ko: "바람과 빛" }, b: { vi: "Thoáng hơn vào sáng sớm; nắng hơn vào trưa.", en: "Airier in early morning; sunnier at midday.", zh: "清晨更通风；中午更晒。", ko: "이른 아침은 더 시원하고 정오는 더웁니다." } },
          { n: "02", t: { vi: "Phù hợp quan sát", en: "Good for watching", zh: "适合观察", ko: "관찰 좋음" }, b: { vi: "Dễ thấy nhịp chợ và giao tiếp giữa các quầy.", en: "Easy to sense the market rhythm and stall interaction.", zh: "易感受市场节奏与摊位互动。", ko: "시장 리듬과 가게 간 교류를 느끼기 좋습니다." } },
          { n: "03", t: { vi: "Lưu ý thời tiết", en: "Weather watch", zh: "注意天气", ko: "날씨 확인" }, b: { vi: "Mang áo mưa gọn nếu đi vào mùa mưa.", en: "Carry a compact raincoat in the rainy season.", zh: "雨季出行带轻便雨具。", ko: "우기에는 가벼운 비옷을 준비하세요." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Nên chọn khu nào?", en: "Which area should I pick?", zh: "该选哪区？", ko: "어느 구역이 좋나요?" }, a: { vi: "Trong nhà khi cần che nắng mưa; ngoài trời khi muốn thoáng và quan sát nhịp chợ.", en: "Indoor for shelter; outdoor for air and watching the rhythm.", zh: "需遮阳挡雨选室内；想通风观察选室外。", ko: "비바람 가리려면 실내, 통풍과 리듬 관찰은 야외." } },
      { q: { vi: "Có chỗ ngồi không?", en: "Is there seating?", zh: "有座位吗？", ko: "좌석이 있나요?" }, a: { vi: "Nhiều quầy chế biến tại chỗ có chỗ ngồi đơn giản; giờ cao điểm có thể đông.", en: "Many prepared-food stalls have simple seating; peak times can be busy.", zh: "许多现做摊位有简易座位；高峰可能拥挤。", ko: "많은 조리 가게에 간단한 좌석이 있으나 피크타임엔 붐빕니다." } },
      { q: { vi: "Giá hai khu có khác nhau không?", en: "Do prices differ by area?", zh: "两区价格不同吗？", ko: "구역마다 가격이 다른가요?" }, a: { vi: "Giá do từng quầy định; không phụ thuộc khu trong hay ngoài.", en: "Prices are set per stall; not by indoor or outdoor.", zh: "价格由摊位自定，与室内外无关。", ko: "가격은 가게마다 정하며 실내외와 무관합니다." } },
      { q: { vi: "Có phù hợp cho gia đình không?", en: "Is it family-friendly?", zh: "适合家庭吗？", ko: "가족에게 좋나요?" }, a: { vi: "Có, nhưng giữ trẻ nhỏ gần mình và tránh giờ cao điểm.", en: "Yes, but keep young children close and avoid peak hours.", zh: "适合，但请看管好儿童并避开高峰。", ko: "네, 단 아이를 가까이 두고 피크타임을 피하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Món ăn", en: "Food", zh: "美食", ko: "음식" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng, trung lập.", en: "Food types by stall, described neutrally.", zh: "按摊位类型介绍美食，中立客观。", ko: "가게 유형별 음식, 중립적 안내." } },
      { slug: "an-chay-va-di-ung-cho-con", tag: { vi: "Ăn kiêng", en: "Diet", zh: "饮食", ko: "식이" }, title: { vi: "Ăn chay & dị ứng", en: "Vegetarian & allergy", zh: "素食与过敏", ko: "채식과 알레르기" }, desc: { vi: "Cách hỏi món và nhận biết thành phần.", en: "How to ask and identify ingredients.", zh: "如何询问菜品与识别成分。", ko: "요리 묻기와 성분 파악법." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B3 — Mì Quảng =====
  {
    slug: "mi-quang-cho-con",
    cat: "B",
    title: { vi: "Mì Quảng Chợ Cồn — Món bún miền Trung", en: "Mì Quảng at Chợ Cồn — Central-Vietnam noodle", zh: "昆市场广南面 — 中部米线", ko: "꼰 시장 미 꽝 — 중부 국수" },
    desc: { vi: "Giới thiệu Mì Quảng: đặc điểm, cách gọi món và lưu ý tại Chợ Cồn, trung lập.", en: "An introduction to Mì Quảng: traits, how to order and notes at Chợ Cồn, neutral.", zh: "广南面介绍：特色、点餐方式与昆市场提示，中立。", ko: "미 꽝 소개: 특징·주문법·꼰 시장 참고, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Mì Quảng Chợ Cồn", en: "Mì Quảng at Chợ Cồn", zh: "昆市场广南面", ko: "꼰 시장 미 꽝" },
      intro: { vi: "Mì Quảng là món bún miền Trung với nước dùng ít, topping đa dạng. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Mì Quảng is a Central-Vietnam noodle with little broth and varied toppings. Below are experience notes, not stall rankings.", zh: "广南面是中部米线，汤少、配料丰富。以下为体验建议，不排摊位名次。", ko: "미 꽝은 국물이 적고 토핑이 다양한 중부 국수입니다. 아래는 체험 메모이지 순위가 아닙니다." }
    },
    sections: [
      {
        idx: "01",
        eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" },
        title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Nước dùng ít", en: "Little broth", zh: "汤少", ko: "국물 적음" }, b: { vi: "Khác bún nước nhiều; Mì Quảng dùng ít nước, đậm đà hơn.", en: "Unlike soupy bún, Mì Quảng uses little broth and tastes richer.", zh: "不同于汤多的米线；广南面汤少、味更浓。", ko: "국물 많은 쌀국수와 달리 미 꽝은 국물이 적고 진합니다." } },
          { n: "02", t: { vi: "Topping đa dạng", en: "Varied toppings", zh: "配料丰富", ko: "다양 토핑" }, b: { vi: "Thịt, trứng, bánh tráng và rau tuỳ quầy.", en: "Meat, egg, rice crackers and herbs vary by stall.", zh: "肉、蛋、米纸与香草视摊位而定。", ko: "고기·계란·라이스 크래커·허브는 가게마다 다릅니다." } },
          { n: "03", t: { vi: "Ăn kèm", en: "Sides", zh: "配食", ko: "곁들임" }, b: { vi: "Thường đi cùng bánh tráng giòn và chanh ớt.", en: "Usually with crispy rice crackers and lime-chilli.", zh: "常配脆米纸与青柠辣椒。", ko: "보통 바삭한 라이스 크래커와 라임·고추와 함께." } }
        ]
      }
    ],
    faqs: [
      { q: { vi: "Mì Quảng có cay không?", en: "Is Mì Quảng spicy?", zh: "广南面辣吗？", ko: "미 꽝 매운가요?" }, a: { vi: "Tuỳ quầy; bạn tự thêm ớt và chanh theo khẩu vị.", en: "Varies by stall; you add chilli and lime to taste.", zh: "视摊位而定；可自行加辣椒与青柠。", ko: "가게마다 다르며 고추와 라임을 취향대로 넣으세요." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Một số quầy có thể làm bản ít thịt; hãy hỏi rõ thành phần.", en: "Some stalls may make a leaner version; ask about ingredients.", zh: "部分摊位可少肉制作；请询问成分。", ko: "일부 가게는 담백하게 만들 수 있으니 성분을 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi món.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "banh-xeo-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Bánh xèo Chợ Cồn", en: "Bánh xèo at Chợ Cồn", zh: "昆市场越南煎饼", ko: "꼰 시장 반 쎄오" }, desc: { vi: "Bánh xèo — món chiên giòn miền Trung.", en: "Bánh xèo — a crispy Central-Vietnam pancake.", zh: "越南煎饼——中部脆饼。", ko: "반 쎄오 — 중부 바삭한 부침개." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B4 — Bánh bèo =====
  {
    slug: "banh-beo-cho-con",
    cat: "B",
    title: { vi: "Bánh bèo Chợ Cồn — Bánh hấp miền Trung", en: "Bánh bèo at Chợ Cồn — steamed cakes", zh: "昆市场蒸糕 — 中部蒸制小吃", ko: "꼰 시장 반 베오 — 쪄낸 떡" },
    desc: { vi: "Giới thiệu Bánh bèo: bánh bột gạo hấp, nhân tôm chấy và nước mắm, trung lập.", en: "An introduction to Bánh bèo: steamed rice cakes with shrimp and fish sauce, neutral.", zh: "蒸糕介绍：米浆蒸糕配虾米与鱼露，中立说明。", ko: "반 베오 소개: 쪄낸 쌀가루 떡에 새우와 액젓, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Bánh bèo Chợ Cồn", en: "Bánh bèo at Chợ Cồn", zh: "昆市场蒸糕", ko: "꼰 시장 반 베오" },
      intro: { vi: "Bánh bèo là những đĩa bột gạo hấp nhỏ, ăn kèm nhân và nước chấm. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Bánh bèo are small steamed rice cakes served with toppings and dipping sauce. Notes below, not stall rankings.", zh: "蒸糕是小型米浆蒸糕，配馅料与蘸汁。以下为体验建议，不排摊位名次。", ko: "반 베오는 작은 쪄낸 쌀가루 떡으로 토핑과 소스와 함께 합니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Bánh nhỏ", en: "Small cakes", zh: "小糕", ko: "작은 떡" }, b: { vi: "Mỗi đĩa là một bánh hấp lót bột mỏng trong chén.", en: "Each plate is a thin steamed cake in a small bowl.", zh: "每碟是浅碗中的薄蒸糕。", ko: "각 접시는 얕은 그릇에 쪄낸 얇은 떡입니다." } },
          { n: "02", t: { vi: "Nhân tôm chấy", en: "Crispy shrimp", zh: "虾米", ko: "바삭 새우" }, b: { vi: "Thường rắc tôm khô chấy và hành phi lên mặt.", en: "Usually topped with crispy dried shrimp and fried shallots.", zh: "表面常撒虾米与炸葱。", ko: "보통 바삭한 건새우와 튀긴 샬롯을 올립니다." } },
          { n: "03", t: { vi: "Nước chấm", en: "Dipping sauce", zh: "蘸汁", ko: "소스" }, b: { vi: "Chan nước mắm chua ngọt tuỳ khẩu vị từng quầy.", en: "A sweet-sour fish sauce is added to taste per stall.", zh: "按摊位口味加酸甜鱼露。", ko: "가게마다 단새콤한 액젓을 취향대로 넣습니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bánh bèo có nóng không?", en: "Is Bánh bèo served hot?", zh: "蒸糕是热的吗？", ko: "반 베오는 뜨거운가요?" }, a: { vi: "Thường ăn lúc vừa hấp xong, còn ấm; hỏi quầy nếu muốn độ nóng cụ thể.", en: "Usually eaten warm right after steaming; ask the stall for specifics.", zh: "通常蒸好趁温吃；具体温度问摊位。", ko: "보통 찌자마자 따뜻하게 먹으며 자세히는 가게에 물어보세요." } },
      { q: { vi: "Có bản không tôm không?", en: "Is there a no-shrimp version?", zh: "有不加虾的版本吗？", ko: "새우 없는 버전 있나요?" }, a: { vi: "Có thể hỏi quầy bớt nhân; nêu rõ dị ứng nếu cần.", en: "You can ask to reduce toppings; state any allergy clearly.", zh: "可请摊位少放馅料；若有过敏请说明。", ko: "토핑을 줄여달라고 요청하세요. 알레르기면 분명히 말씀하세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "banh-bot-loc-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Bánh bột lọc Chợ Cồn", en: "Bánh bột lọc at Chợ Cồn", zh: "昆市场透明粉粿", ko: "꼰 시장 반 보̣t lọc" }, desc: { vi: "Bánh bột lọc — bánh nhân tôm trong suốt.", en: "Bánh bột lọc — translucent shrimp dumplings.", zh: "透明虾饺粉粿。", ko: "반 보̣t lọc — 투명 새우 만두." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B5 — Bánh bột lọc =====
  {
    slug: "banh-bot-loc-cho-con",
    cat: "B",
    title: { vi: "Bánh bột lọc Chợ Cồn — Bánh nhân tôm", en: "Bánh bột lọc at Chợ Cồn — shrimp dumplings", zh: "昆市场透明粉粿 — 虾饺", ko: "꼰 시장 반 보̣t lọc — 새우 만두" },
    desc: { vi: "Giới thiệu Bánh bột lọc: vỏ bột trong suốt, nhân tôm, chấm nước mắm, trung lập.", en: "An introduction to Bánh bột lọc: translucent dough, shrimp filling, fish sauce, neutral.", zh: "透明粉粿介绍：透明外皮、虾馅、鱼露蘸食，中立说明。", ko: "반 보̣t lọc 소개: 투명 피, 새우 소, 액젓, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Bánh bột lọc Chợ Cồn", en: "Bánh bột lọc at Chợ Cồn", zh: "昆市场透明粉粿", ko: "꼰 시장 반 보̣t lọc" },
      intro: { vi: "Bánh bột lọc có vỏ bột sắn trong suốt, thường gói nhân tôm. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Bánh bột lọc has a translucent tapioca wrap, usually with shrimp. Notes below, not stall rankings.", zh: "透明粉粿以木薯粉皮包裹虾馅。以下为体验建议，不排摊位名次。", ko: "반 보̣t lọc는 투명한 타피오카 피에 새우를 싸니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Vỏ trong suốt", en: "Clear wrap", zh: "透明皮", ko: "투명 피" }, b: { vi: "Bột sắn trong, nhìn thấy nhân bên trong.", en: "Clear tapioca shows the filling inside.", zh: "木薯粉皮透明，可见内馅。", ko: "투명한 타피오카로 속이 보입니다." } },
          { n: "02", t: { vi: "Nhân tôm", en: "Shrimp filling", zh: "虾馅", ko: "새우 소" }, b: { vi: "Thường là tôm và hành phi; tuỳ quầy có thể thêm nấm.", en: "Usually shrimp and fried shallot; some stalls add mushroom.", zh: "通常为虾与炸葱；部分摊位加菇。", ko: "보통 새우와 튀긴 샬롯, 가게에 따라 버섯 추가." } },
          { n: "03", t: { vi: "Chấm nước mắm", en: "With fish sauce", zh: "配鱼露", ko: "액젓에" }, b: { vi: "Chan nước mắm chua ngọt và ít ớt.", en: "Served with sweet-sour fish sauce and a little chilli.", zh: "配酸甜鱼露与少许辣椒。", ko: "단새콤한 액젓과 약간의 고추와 함께." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bánh bột lọc có cay không?", en: "Is it spicy?", zh: "辣吗？", ko: "매운가요?" }, a: { vi: "Bản thân bánh không cay; tuỳ bạn thêm ớt vào nước chấm.", en: "The cake itself is not spicy; add chilli to the sauce as you like.", zh: "糕本身不辣；可按喜好在蘸汁加辣椒。", ko: "떡 자체는 맵지 않으며 소스에 고추를 취향대로 넣으세요." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Không đảm bảo; hãy hỏi kỹ thành phần vì nhân thường có tôm.", en: "Not guaranteed; ask ingredients since filling usually has shrimp.", zh: "不保证；因馅常含虾，请仔细询问成分。", ko: "보장되지 않으며 속에 보통 새우가 있어 성분을 꼭 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "banh-beo-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Bánh bèo Chợ Cồn", en: "Bánh bèo at Chợ Cồn", zh: "昆市场蒸糕", ko: "꼰 시장 반 베오" }, desc: { vi: "Bánh bèo — bánh hấp miền Trung.", en: "Bánh bèo — steamed Central-Vietnam cakes.", zh: "中部蒸糕。", ko: "반 베오 — 중부 쪄낸 떡." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B6 — Bánh xèo =====
  {
    slug: "banh-xeo-cho-con",
    cat: "B",
    title: { vi: "Bánh xèo Chợ Cồn — Bánh chiên giòn", en: "Bánh xèo at Chợ Cồn — crispy pancake", zh: "昆市场越南煎饼 — 脆饼", ko: "꼰 시장 반 쎄오 — 바삭한 부침개" },
    desc: { vi: "Giới thiệu Bánh xèo: bánh chiên vàng, nhân giá và tôm, cuốn rau, trung lập.", en: "An introduction to Bánh xèo: a golden fried pancake with sprouts and shrimp, wrapped in herbs, neutral.", zh: "越南煎饼介绍：金黄煎饼配豆芽鲜虾、包蔬菜，中立说明。", ko: "반 쎄오 소개: golden 튀긴 부침개에 숙주·새우, 허브에 싸 먹기, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Bánh xèo Chợ Cồn", en: "Bánh xèo at Chợ Cồn", zh: "昆市场越南煎饼", ko: "꼰 시장 반 쎄오" },
      intro: { vi: "Bánh xèo là bánh chiên giòn, gập đôi và cuốn cùng rau sống. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Bánh xèo is a crispy fried pancake, folded and rolled with fresh herbs. Notes below, not stall rankings.", zh: "越南煎饼是酥脆煎饼，对折后与生鲜蔬菜同卷。以下为体验建议，不排名次。", ko: "반 쎄오는 바삭하게 튀긴 부침개로 싸 먹습니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Vỏ vàng giòn", en: "Golden crisp", zh: "金黄酥脆", ko: "황금 바삭" }, b: { vi: "Bột nghệ chiên vàng, cạnh giòn.", en: "Turmeric batter fried golden with crisp edges.", zh: "姜黄面糊煎至金黄、边脆。", ko: "강황 반죽을 golden 튀겨 가장자리가 바삭합니다." } },
          { n: "02", t: { vi: "Nhân tôm giá", en: "Shrimp & sprouts", zh: "虾与豆芽", ko: "새우·숙주" }, b: { vi: "Thường có tôm, giá và hành; tuỳ quầy thêm thịt.", en: "Usually shrimp, sprouts and onion; some add pork.", zh: "通常有虾、豆芽与葱；部分加肉。", ko: "보통 새우·숙주·파, 가게에 따라 돼지고기 추가." } },
          { n: "03", t: { vi: "Cuốn rau sống", en: "With herbs", zh: "配生菜", ko: "허브와" }, b: { vi: "Gập đôi, cuốn với rau thơm và chấm mắm nêm hoặc nước mắm.", en: "Folded, rolled with herbs and dipped in mắm nêm or fish sauce.", zh: "对折，与香叶同卷，蘸鱼露或发酵酱。", ko: "접어 허브와 함께 말아 맘 넴이나 액젓에 찍어 먹습니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bánh xèo có gluten không?", en: "Does it contain gluten?", zh: "含麸质吗？", ko: "글루텐이 있나요?" }, a: { vi: "Vỏ làm từ bột gạo; nếu nhạy cảm, hãy hỏi quầy về nguyên liệu chiên.", en: "The wrap is rice flour; if sensitive, ask the stall about frying ingredients.", zh: "外皮为米粉；若敏感请向摊位询问油炸用料。", ko: "피는 쌀가루이며 예민하면 가게에 튀김 재료를 물어보세요." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Một số quầy làm bản chỉ giá và nấm; hỏi rõ thành phần.", en: "Some stalls make a sprouts-and-mushroom version; ask ingredients.", zh: "部分摊位做豆芽香菇版；请询问成分。", ko: "일부 가게는 숙주·버섯 버전을 만들며 성분을 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "banh-canh-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Bánh canh Chợ Cồn", en: "Bánh canh at Chợ Cồn", zh: "昆市场粗米面汤", ko: "꼰 시장 반 깐" }, desc: { vi: "Bánh canh — bún sợi dày nước dùng đậm.", en: "Bánh canh — thick noodles in rich broth.", zh: "粗米线配浓汤。", ko: "반 깐 — 국물 진한 굵은 국수." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B7 — Bánh canh =====
  {
    slug: "banh-canh-cho-con",
    cat: "B",
    title: { vi: "Bánh canh Chợ Cồn — Bún sợi dày", en: "Bánh canh at Chợ Cồn — thick noodles", zh: "昆市场粗米面汤 — 厚米线", ko: "꼰 시장 반 깐 — 굵은 국수" },
    desc: { vi: "Giới thiệu Bánh canh: sợi bún dày, nước dùng đậm, topping tuỳ quầy, trung lập.", en: "An introduction to Bánh canh: thick noodles, rich broth, stall-topped, neutral.", zh: "粗米面汤介绍：粗米线、浓汤、配料随摊位，中立说明。", ko: "반 깐 소개: 굵은 국수·진한 국물·가게 토핑, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Bánh canh Chợ Cồn", en: "Bánh canh at Chợ Cồn", zh: "昆市场粗米面汤", ko: "꼰 시장 반 깐" },
      intro: { vi: "Bánh canh có sợi bún to, ăn với nước dùng nóng. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Bánh canh uses thick noodles in a hot broth. Notes below, not stall rankings.", zh: "粗米面汤以粗米线配热汤。以下为体验建议，不排名次。", ko: "반 깐은 굵은 국수를 뜨거운 국물에 합니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Sợi dày", en: "Thick noodles", zh: "粗米线", ko: "굵은 국수" }, b: { vi: "Sợi bột gạo hoặc bột năng to hơn bún thường.", en: "Rice or tapioca noodles thicker than regular bún.", zh: "米粉或木薯粉制成的线比普通米线粗。", ko: "쌀가루나 타피오카 국수로 일반 쌀국수보다 굵습니다." } },
          { n: "02", t: { vi: "Nước dùng đậm", en: "Rich broth", zh: "浓汤", ko: "진한 국물" }, b: { vi: "Nước dùng thường đậm, ăn lúc nóng.", en: "The broth is usually rich, served hot.", zh: "汤通常较浓，趁热吃。", ko: "국물은 보통 진하며 뜨겁게 먹습니다." } },
          { n: "03", t: { vi: "Topping tuỳ quầy", en: "Varied toppings", zh: "配料随摊", ko: "가게 토핑" }, b: { vi: "Thịt, chả hoặc hải sản tuỳ quầy theo ngày.", en: "Meat, sausage or seafood vary by stall and day.", zh: "肉、鱼饼或海鲜视摊位与日期。", ko: "고기·어묵·해산물은 가게와 날짜에 따라 다릅니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bánh canh có cay không?", en: "Is it spicy?", zh: "辣吗？", ko: "매운가요?" }, a: { vi: "Bản thân canh không cay; tuỳ bạn thêm ớt.", en: "The soup itself is not spicy; add chilli as you like.", zh: "汤本身不辣；可按喜好加辣椒。", ko: "국물 자체는 맵지 않으며 고추를 취향대로 넣으세요." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Không đảm bảo; hãy hỏi kỹ thành phần nước dùng.", en: "Not guaranteed; ask about broth ingredients.", zh: "不保证；请仔细询问汤底成分。", ko: "보장되지 않으며 국물 성분을 꼭 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "mi-quang-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Mì Quảng Chợ Cồn", en: "Mì Quảng at Chợ Cồn", zh: "昆市场广南面", ko: "꼰 시장 미 꽝" }, desc: { vi: "Mì Quảng — bún miền Trung nước ít.", en: "Mì Quảng — Central-Vietnam noodle, little broth.", zh: "中部米线、汤少。", ko: "미 꽝 — 국물 적은 중부 국수." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B8 — Bún mắm nêm =====
  {
    slug: "bun-mam-nem-cho-con",
    cat: "B",
    title: { vi: "Bún mắm nêm Chợ Cồn — Món miền Trung", en: "Bún mắm nêm at Chợ Cồn — Central-Vietnam dish", zh: "昆市场鱼露米线 — 中部风味", ko: "꼰 시장 번 맘 넴 — 중부 요리" },
    desc: { vi: "Giới thiệu Bún mắm nêm: bún ăn với nước mắm nêm, rau và thịt, trung lập.", en: "An introduction to Bún mắm nêm: noodles with fermented sauce, herbs and meat, neutral.", zh: "鱼露米线介绍：米线配发酵鱼露、蔬菜与肉，中立说明。", ko: "번 맘 넴 소개: 발효 소스를 곁들인 국수, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Bún mắm nêm Chợ Cồn", en: "Bún mắm nêm at Chợ Cồn", zh: "昆市场鱼露米线", ko: "꼰 시장 번 맘 넴" },
      intro: { vi: "Bún mắm nêm dùng nước chấm lên men đặc trưng miền Trung. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Bún mắm nêm uses a distinctive fermented dipping sauce from Central Vietnam. Notes below, not stall rankings.", zh: "鱼露米线使用中部特有的发酵蘸汁。以下为体验建议，不排名次。", ko: "번 맘 넴은 중부 특유의 발효 소스를 씁니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Nước mắm nêm", en: "Fermented sauce", zh: "发酵鱼露", ko: "발효 소스" }, b: { vi: "Nước chấm mắm nêm đặc trưng, mùi và vị riêng.", en: "A distinctive fermented sauce with its own aroma and taste.", zh: "特有的发酵鱼露，气味与味道独特。", ko: "특유의 발효 소스로 향과 맛이 독특합니다." } },
          { n: "02", t: { vi: "Rau và thịt", en: "Herbs & meat", zh: "菜与肉", ko: "허브·고기" }, b: { vi: "Ăn cùng rau thơm, thịt heo hoặc chả tuỳ quầy.", en: "Served with herbs, pork or sausage by stall.", zh: "配香叶、猪肉或鱼饼，视摊位。", ko: "허브·돼지고기·어묵을 가게에 따라 곁들입니다." } },
          { n: "03", t: { vi: "Không cho trẻ nhỏ", en: "For adults", zh: "成人为宜", ko: "성인용" }, b: { vi: "Vị đậm và mùi lên men; quan sát trẻ nhỏ nếu ăn thử.", en: "Strong flavour and ferment; watch children if they try it.", zh: "味重且有发酵味；儿童试吃需留意。", ko: "진한 맛과 발효 향이라 아이가 먹을 땐 살피세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bún mắm nêm có mùi mạnh không?", en: "Does it have a strong smell?", zh: "气味重吗？", ko: "향이 강한가요?" }, a: { vi: "Có mùi mắm nêm lên men riêng; tuỳ khẩu vị từng người.", en: "It has a distinct fermented aroma; a matter of personal taste.", zh: "有独特的发酵鱼露气味；因人而异。", ko: "특유의 발효 향이 있으며 개인 취향입니다." } },
      { q: { vi: "Có bản ít mặn không?", en: "Can it be less salty?", zh: "能淡一点吗？", ko: "덜 짜게 가능한가요?" }, a: { vi: "Có thể nhờ quầy cho ít nước chấm hơn.", en: "You can ask the stall for less sauce.", zh: "可请摊位少放蘸汁。", ko: "가게에 소스를 줄여달라고 요청하세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "nuoc-mam-mam-nem-cho-con", tag: { vi: "Gia vị", en: "Sauces", zh: "调味", ko: "소스" }, title: { vi: "Nước mắm & mắm nêm", en: "Fish sauce & mắm nêm", zh: "鱼露与发酵酱", ko: "액젓과 맘 넴" }, desc: { vi: "Hiểu thêm gia vị miền Trung.", en: "More on Central-Vietnam condiments.", zh: "进一步了解中部调味品。", ko: "중부 양념 더 알기." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B9 — Ram cuốn cải =====
  {
    slug: "ram-cuon-cai-cho-con",
    cat: "B",
    title: { vi: "Ram cuốn cải Chợ Cồn — Cuốn giòn miền Trung", en: "Ram cuốn cải at Chợ Cồn — crispy rolls", zh: "昆市场芥菜炸卷 — 中部脆卷", ko: "꼰 시장 람 꾸온 까이 — 중부 바삭 롤" },
    desc: { vi: "Giới thiệu Ram cuốn cải: ram chiên giòn cuốn với cải và rau, trung lập.", en: "An introduction to Ram cuốn cải: crispy fried rolls wrapped with mustard greens, neutral.", zh: "芥菜炸卷介绍：炸脆卷配芥菜与蔬菜，中立说明。", ko: "람 꾸온 까이 소개: 바삭한 튀김 롤을 겨자잎에 싸 먹기, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Ram cuốn cải Chợ Cồn", en: "Ram cuốn cải at Chợ Cồn", zh: "昆市场芥菜炸卷", ko: "꼰 시장 람 꾸온 까이" },
      intro: { vi: "Ram là ram chiên giòn, cuốn cùng lá cải và rau sống. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Ram are crispy fried rolls, wrapped with mustard greens and herbs. Notes below, not stall rankings.", zh: "炸卷酥脆，与芥菜叶及生菜同卷。以下为体验建议，不排名次。", ko: "람은 바삭한 튀김 롤로 겨자잎과 허브에 싸 먹습니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Ram giòn", en: "Crispy rolls", zh: "酥脆卷", ko: "바삭 롤" }, b: { vi: "Ram chiên vàng, vỏ mỏng giòn.", en: "Fried golden with a thin crisp wrap.", zh: "炸至金黄、外皮薄脆。", ko: "golden 튀겨 얇고 바삭한 피." } },
          { n: "02", t: { vi: "Cuốn lá cải", en: "With greens", zh: "配菜叶", ko: "잎채소와" }, b: { vi: "Cuốn lá cải, rau thơm và chấm mắm nêm hoặc nước mắm.", en: "Wrapped in mustard greens and herbs, dipped in mắm nêm or fish sauce.", zh: "以芥菜叶、香草包裹，蘸发酵酱或鱼露。", ko: "겨자잎과 허브에 싸 맘 넴이나 액젓에 찍습니다." } },
          { n: "03", t: { vi: "Ăn nóng", en: "Eat hot", zh: "趁热吃", ko: "뜨겁게" }, b: { vi: "Nên ăn lúc còn nóng để giữ độ giòn.", en: "Best eaten hot to keep the crunch.", zh: "趁热吃以保酥脆。", ko: "바삭함을 위해 뜨거울 때 먹습니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Ram cuốn cải có cay không?", en: "Is it spicy?", zh: "辣吗？", ko: "매운가요?" }, a: { vi: "Ram bản thân không cay; vị tuỳ nước chấm.", en: "The roll itself is not spicy; flavour comes from the dip.", zh: "卷本身不辣；味道来自蘸汁。", ko: "롤 자체는 맵지 않고 소스에서 맛이 납니다." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Không đảm bảo; hãy hỏi kỹ nhân vì ram thường có thịt.", en: "Not guaranteed; ask about filling since ram usually has meat.", zh: "不保证；炸卷常含肉，请询问馅料。", ko: "보장되지 않으며 람에 보통 고기가 있어 속을 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "banh-xeo-cho-con", tag: { vi: "Món khác", en: "Other dishes", zh: "其他美食", ko: "다른 요리" }, title: { vi: "Bánh xèo Chợ Cồn", en: "Bánh xèo at Chợ Cồn", zh: "昆市场越南煎饼", ko: "꼰 시장 반 쎄오" }, desc: { vi: "Bánh xèo — bánh chiên giòn cuốn rau.", en: "Bánh xèo — crispy pancake rolled with herbs.", zh: "脆饼配蔬菜卷。", ko: "반 쎄오 — 바삭한 부침개를 허브에 말아." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B10 — Ốc hút =====
  {
    slug: "oc-hut-cho-con",
    cat: "B",
    title: { vi: "Ốc hút Chợ Cồn — Món ốc miền Trung", en: "Ốc hút at Chợ Cồn — snails", zh: "昆市场吸螺 — 螺类小吃", ko: "꼰 시장 옥 헛 — 복족류" },
    desc: { vi: "Giới thiệu Ốc hút: các loại ốc chế biến theo kiểu miền Trung, trung lập.", en: "An introduction to Ốc hút: Central-Vietnam style snails, neutral.", zh: "吸螺介绍：中部风味螺类做法，中立说明。", ko: "옥 헛 소개: 중부풍 복족류, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Ốc hút Chợ Cồn", en: "Ốc hút at Chợ Cồn", zh: "昆市场吸螺", ko: "꼰 시장 옥 헛" },
      intro: { vi: "Ốc hút gồm nhiều loại ốc chế biến với gia vị địa phương. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Ốc hút covers various snails cooked with local spices. Notes below, not stall rankings.", zh: "吸螺包含多种以本地香料烹制的螺。以下为体验建议，不排名次。", ko: "옥 헛은 여러 복족류를 현지 양념에 조리합니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Nhiều loại ốc", en: "Many types", zh: "多种螺", ko: "다양 복족류" }, b: { vi: "Tuỳ mùa và quầy, có thể gặp ốc, sò khác nhau.", en: "By season and stall you may see different snails and shellfish.", zh: "视季节与摊位可见不同螺贝。", ko: "계절과 가게에 따라 다양한 복족류·조개가 있습니다." } },
          { n: "02", t: { vi: "Gia vị địa phương", en: "Local spices", zh: "本地香料", ko: "현지 양념" }, b: { vi: "Chế biến với sả, ớt, tỏi và nước mắm.", en: "Cooked with lemongrass, chilli, garlic and fish sauce.", zh: "以香茅、辣椒、蒜与鱼露烹制。", ko: "레몬그라스·고추·마늘·액젓으로 조리." } },
          { n: "03", t: { vi: "Ăn khéo", en: "Eat carefully", zh: "细品尝", ko: "조심히" }, b: { vi: "Dùng tăm hoặc hút nhẹ; hỏi quầy cách ăn nếu lạ.", en: "Use a pick or sip gently; ask the stall if unfamiliar.", zh: "用牙签或轻吸；不熟悉可问摊位。", ko: "이쑤시개나 가볍게 빨아 먹고 낯설면 가게에 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Ốc hút có cay không?", en: "Is it spicy?", zh: "辣吗？", ko: "매운가요?" }, a: { vi: "Thường có ớt; có thể nhờ quầy giảm.", en: "Usually has chilli; ask the stall to reduce it.", zh: "通常带辣椒；可请摊位减少。", ko: "보통 고추가 들어가며 줄여달라고 하세요." } },
      { q: { vi: "Có an toàn không?", en: "Is it safe?", zh: "安全吗？", ko: "안전한가요?" }, a: { vi: "Chọn quầy đông khách và quan sát chế biến; hỏi kỹ nếu dị ứng hải sản.", en: "Pick busy stalls and watch preparation; ask if allergic to seafood.", zh: "选人气摊位、观察制作；海鲜过敏请详问。", ko: "손님 많은 가게를 골라 조리 과정을 보고 해산물 알레르기면 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "che-cho-con", tag: { vi: "Tráng miệng", en: "Sweets", zh: "甜品", ko: "단것" }, title: { vi: "Chè Chợ Cồn", en: "Chè at Chợ Cồn", zh: "昆市场甜品", ko: "꼰 시장 쩨" }, desc: { vi: "Chè — món ngọt tráng miệng.", en: "Chè — sweet desserts.", zh: "甜品——餐后甜食。", ko: "쩨 — 단 디저트." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B11 — Chè =====
  {
    slug: "che-cho-con",
    cat: "B",
    title: { vi: "Chè Chợ Cồn — Món ngọt tráng miệng", en: "Chè at Chợ Cồn — sweet desserts", zh: "昆市场甜品 — 餐后甜食", ko: "꼰 시장 쩨 — 단 디저트" },
    desc: { vi: "Giới thiệu Chè: các món ngọt từ đậu, nước cốt và thạch, trung lập.", en: "An introduction to Chè: sweet treats of beans, coconut and jelly, neutral.", zh: "甜品介绍：以豆类、椰浆与冻类制成的甜食，中立说明。", ko: "쩨 소개: 콩·코코넛·젤리 단 음식, 중립적." },
    hero: {
      eye: { vi: "Món cụ thể", en: "A dish", zh: "具体美食", ko: "요리" },
      h1: { vi: "Chè Chợ Cồn", en: "Chè at Chợ Cồn", zh: "昆市场甜品", ko: "꼰 시장 쩨" },
      intro: { vi: "Chè là nhóm món ngọt, thường mát, ăn giữa buổi hoặc sau ăn. Dưới đây là gợi ý trải nghiệm, không xếp hạng quầy.", en: "Chè is a group of sweet, often cool dishes for a break or after meals. Notes below, not stall rankings.", zh: "甜品是一类常带凉意的甜食，适合中途或餐后。以下为体验建议，不排名次。", ko: "쩨는 단맛으로 간식이나 식후에 어울리는 그룹입니다. 순위 아닌 체험 메모." }
    },
    sections: [
      { idx: "01", eye: { vi: "Đặc điểm", en: "Traits", zh: "特色", ko: "특징" }, title: { vi: "Nhận biết món", en: "Recognising the dish", zh: "认识这道菜", ko: "요리 알아보기" },
        items: [
          { n: "01", t: { vi: "Nhiều loại", en: "Many kinds", zh: "种类多", ko: "다양함" }, b: { vi: "Tuỳ quầy: chè đậu, chè nước cốt dừa, chè thạch.", en: "By stall: bean, coconut-milk or jelly versions.", zh: "视摊位：豆、椰浆或冻类。", ko: "가게에 따라 콩·코코넛밀크·젤리형." } },
          { n: "02", t: { vi: "Thường mát", en: "Often cool", zh: "常带凉", ko: "보통 차갑게" }, b: { vi: "Nhiều chè ăn mát, hợp ngày nóng.", en: "Many are served cool, good on hot days.", zh: "许多冷藏食用，适合炎热天。", ko: "많이 차갑게 나와 더운 날 좋습니다." } },
          { n: "03", t: { vi: "Đường tuỳ khẩu vị", en: "Sweetness to taste", zh: "甜度自调", ko: "단맛 조절" }, b: { vi: "Hỏi quầy nếu muốn giảm đường.", en: "Ask the stall if you want less sugar.", zh: "想少糖可问摊位。", ko: "당분을 줄이려면 가게에 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Chè có cay không?", en: "Is Chè spicy?", zh: "甜品辣吗？", ko: "쩨 매운가요?" }, a: { vi: "Không; chè là món ngọt, một vài loại có thể thêm gừng tuỳ quầy.", en: "No; Chè is sweet, though a few may add ginger by stall.", zh: "不辣；甜品偏甜，少数会按摊位加姜。", ko: "아니요, 쩨는 단맛이며 가게에 따라 생강을 넣기도 합니다." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Hầu hết chè không có thịt; hỏi kỹ nếu kiêng động vật.", en: "Most Chè has no meat; ask if you avoid animal products.", zh: "多数甜品无肉；若忌动物制品请详问。", ko: "대부분 고기가 없으나 동물성 기피 시 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá trước khi gọi.", en: "Set per stall; ask before ordering.", zh: "由各摊位自定；点餐前问价。", ko: "가게마다 다르며 주문 전 물어보세요." } },
      { q: { vi: "Món này có ở khu nào?", en: "Which section has it?", zh: "在哪个区？", ko: "어느 구역에 있나요?" }, a: { vi: "Thường ở khu ăn uống; tuỳ quầy theo ngày, hãy hỏi khi đến.", en: "Usually in the eating area; varies by stall and day, so ask on arrival.", zh: "通常在餐饮区；视摊位与日期，到场询问。", ko: "보통 식사 구역이며 가게와 날짜에 따라 다르니 문의하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "an-o-cho-con-duoi-100k", tag: { vi: "Ngân sách", en: "Budget", zh: "预算", ko: "예산" }, title: { vi: "Ăn dưới 100k", en: "Under 100k", zh: "百元预算", ko: "10만 동 이하" }, desc: { vi: "Gợi ý ăn vặt trong ngân sách.", en: "Snack ideas within budget.", zh: "预算内的小吃建议。", ko: "예산 안 간식 제안." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B12 — Ăn dưới 100k =====
  {
    slug: "an-o-cho-con-duoi-100k",
    cat: "B",
    title: { vi: "Ăn ở Chợ Cồn dưới 100k — Gợi ý ngân sách", en: "Eating at Chợ Cồn under 100k — budget tips", zh: "昆市场百元预算 — 省钱建议", ko: "꼰 시장 10만 동 이하 — 예산 팁" },
    desc: { vi: "Gợi ý ăn vặt và món nhẹ tại Chợ Cồn trong khoảng 100.000 VND, trung lập.", en: "Suggestions for snacks and light meals at Chợ Cồn within about 100,000 VND, neutral.", zh: "在昆市场约 100,000 越南盾内的小吃与轻食建议，中立。", ko: "꼰 시장에서 약 10만 동 안 패스트푸드와 가벼운 식사 제안, 중립적." },
    hero: {
      eye: { vi: "Ngân sách", en: "Budget", zh: "预算", ko: "예산" },
      h1: { vi: "Ăn dưới 100k ở Chợ Cồn", en: "Eating under 100k at Chợ Cồn", zh: "昆市场百元内吃喝", ko: "꼰 시장 10만 동 이하" },
      intro: { vi: "Chợ là nơi thuận tiện ăn nhẹ với chi phí vừa phải. Con số dưới đây là khung tham khảo, giá tuỳ quầy.", en: "The market is handy for modestly priced snacks. The figures below are a reference; prices vary by stall.", zh: "市场便于以适中花费吃轻食。以下数字为参考，价格视摊位而定。", ko: "시장은 적당한 가격 간식을 하기 좋습니다. 아래 수치는 참고이며 가격은 가게마다 다릅니다." }
    },
    sections: [
      { idx: "01", eye: { vi: "Gợi ý", en: "Ideas", zh: "建议", ko: "제안" }, title: { vi: "Cách ăn vừa túi tiền", en: "Eating within budget", zh: "省钱吃法", ko: "예산 맞는 먹기" },
        items: [
          { n: "01", t: { vi: "Chọn phần nhỏ", en: "Small portions", zh: "点小份", ko: "소량" }, b: { vi: "Gọi phần nhỏ hoặc chia nhau để thử nhiều món.", en: "Order small or share to try several dishes.", zh: "点小份或分食以试多种。", ko: "소량 주문하거나 나눠 여러 요리를 드세요." } },
          { n: "02", t: { vi: "Hỏi giá trước", en: "Ask first", zh: "先问价", ko: "먼저 묻기" }, b: { vi: "Xác nhận giá từng món trước khi gọi để không vượt ngân sách.", en: "Confirm each price before ordering to stay in budget.", zh: "点餐前确认单价以免超预算。", ko: "주문 전 가격을 확인해 예산을 지키세요." } },
          { n: "03", t: { vi: "Ưu tiên quầy đông", en: "Busy stalls", zh: "选人气摊", ko: "손님 많은 곳" }, b: { vi: "Quầy đông khách thường có giá công khai và ổn định.", en: "Busy stalls often have open, stable pricing.", zh: "人气摊位通常标价公开、价格稳定。", ko: "손님 많은 가게는 공개되고 안정적인 가격이 많습니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "100k ăn được mấy món?", en: "How many dishes for 100k?", zh: "百元能吃几样？", ko: "10만 동으로 몇 인분?" }, a: { vi: "Tuỳ món; thường đủ vài món ăn vặt hoặc một bữa nhẹ. Hỏi giá từng quầy.", en: "Depends on dishes; usually a few snacks or one light meal. Ask per stall.", zh: "视菜品而定；通常几样小吃或一顿轻食。逐摊问价。", ko: "요리에 따라 다르며 보통 간식 몇 개나 가벼운 한 끼입니다. 가게마다 물어보세요." } },
      { q: { vi: "Có nước uống giá rẻ không?", en: "Are there cheap drinks?", zh: "有便宜饮品吗？", ko: "저렴한 음료 있나요?" }, a: { vi: "Nước dừa, trà hoặc nước lọc thường có mức vừa phải; hỏi trước.", en: "Coconut water, tea or plain water are usually modest; ask first.", zh: "椰子水、茶或白水通常适中；先问价。", ko: "코코넛 워터·차·생수는 보통 적당하며 먼저 물어보세요." } },
      { q: { vi: "Có nên trả giá không?", en: "Should I bargain?", zh: "要讲价吗？", ko: "흥정하나요?" }, a: { vi: "Ở quầy hàng ngày giá thường cố định; hỏi nhẹ nhàng nếu mua số lượng nhiều.", en: "Daily stalls often have fixed prices; ask politely only for larger amounts.", zh: "日常摊位价格通常固定；量大可礼貌询问。", ko: "일상 가게는 보통 정가이며 많은 수량일 때만 정중히 여쭤보세요." } },
      { q: { vi: "Có phụ thu giờ cao điểm không?", en: "Extra charge at peak?", zh: "高峰会加价吗？", ko: "피크타임 추가요금?" }, a: { vi: "Không có thông tin phụ thu; giá do từng quầy quyết định.", en: "No surcharge is listed; prices are set per stall.", zh: "未列出加价；价格由各摊位决定。", ko: "추가요금 정보는 없으며 가격은 가게마다 정합니다." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "che-cho-con", tag: { vi: "Tráng miệng", en: "Sweets", zh: "甜品", ko: "단것" }, title: { vi: "Chè Chợ Cồn", en: "Chè at Chợ Cồn", zh: "昆市场甜品", ko: "꼰 시장 쩨" }, desc: { vi: "Chè — món ngọt tráng miệng.", en: "Chè — sweet desserts.", zh: "甜品——餐后甜食。", ko: "쩨 — 단 디저트." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== B13 — Ăn chay & dị ứng =====
  {
    slug: "an-chay-va-di-ung-cho-con",
    cat: "B",
    title: { vi: "Ăn chay & dị ứng ở Chợ Cồn — Lưu ý", en: "Vegetarian & allergy at Chợ Cồn — notes", zh: "昆市场素食与过敏 — 提示", ko: "꼰 시장 채식과 알레르기 — 참고" },
    desc: { vi: "Cách nhận biết món chay, hỏi thành phần và tránh dị ứng tại Chợ Cồn, trung lập.", en: "How to spot vegetarian dishes, ask ingredients and avoid allergens at Chợ Cồn, neutral.", zh: "在昆市场识别素食、询问成分与避免过敏的提示，中立。", ko: "꼰 시장에서 채식 구별·성분 묻기·알레르기 회피 법, 중립적." },
    hero: {
      eye: { vi: "Ăn kiêng", en: "Diet", zh: "饮食", ko: "식이" },
      h1: { vi: "Ăn chay & dị ứng", en: "Vegetarian & allergy", zh: "素食与过敏", ko: "채식과 알레르기" },
      intro: { vi: "Chợ là không gian buôn bán hỗn hợp; không có bếp riêng cho ăn chay hay không đường. Hãy tự hỏi kỹ từng quầy.", en: "The market is a mixed trading space; there is no separate vegetarian or allergen-free kitchen. Ask each stall carefully.", zh: "市场是混合交易场所；没有独立的素食或免致敏厨房。请向每个摊位仔细询问。", ko: "시장은 혼합 거래 공간으로 별도 채식·알레르기 프리 주방이 없습니다. 각 가게에 꼼꼼히 물어보세요." }
    },
    sections: [
      { idx: "01", eye: { vi: "Ăn chay", en: "Vegetarian", zh: "素食", ko: "채식" }, title: { vi: "Tìm món chay", en: "Finding vegetarian dishes", zh: "寻找素食", ko: "채식 찾기" },
        items: [
          { n: "01", t: { vi: "Hỏi rõ", en: "Ask clearly", zh: "问清楚", ko: "분명히" }, b: { vi: "Dùng từ “tôi ăn chay” và hỏi nước dùng, mỡ, trứng.", en: "Use “I eat vegetarian” and ask about broth, lard and egg.", zh: "说“我吃素”并问汤底、猪油与蛋。", ko: "“채식한다”고 하고 국물·라드·계란을 물어보세요." } },
          { n: "02", t: { vi: "Rau & trái cây", en: "Produce", zh: "蔬果", ko: "채소·과일" }, b: { vi: "Rau, trái cây và đồ khô thường dễ chọn bản chay hơn.", en: "Vegetables, fruit and dried goods are often easier vegetarian picks.", zh: "蔬菜、水果与干货通常更易选素食。", ko: "채소·과일·건어물은 채식 고르기가 쉬운 편입니다." } },
          { n: "03", t: { vi: "Không đảm bảo", en: "Not guaranteed", zh: "不保证", ko: "보장 안 됨" }, b: { vi: "Chéo nhiễm có thể xảy ra; hãy cân nhắc mức độ của bạn.", en: "Cross-contact can happen; weigh your own sensitivity.", zh: "可能发生交叉接触；请按自身敏感度权衡。", ko: "교차 오염이 있을 수 있으니 본인 민감도를 따지세요." } }
        ] },
      { idx: "02", eye: { vi: "Dị ứng", en: "Allergy", zh: "过敏", ko: "알레르기" }, title: { vi: "Hỏi để tránh dị ứng", en: "Asking to avoid allergens", zh: "询问以避免过敏", ko: "알레르기 회피 묻기" },
        items: [
          { n: "01", t: { vi: "Nêu rõ tên", en: "Name it", zh: "说清名称", ko: "이름 밝히기" }, b: { vi: "Nêu tên dị ứng (tôm, đậu phộng…) bằng tiếng Anh nếu cần.", en: "State the allergen (shrimp, peanut…) in English if needed.", zh: "必要时用英语说出过敏原（虾、花生…）。", ko: "알레르기 항원(새우·땅콩…)을 영어로 밝히세요." } },
          { n: "02", t: { vi: "Xem chế biến", en: "Watch prep", zh: "看制作", ko: "조리 관찰" }, b: { vi: "Quan sát chảo, dầu và dụng cụ chung nếu nhạy cảm cao.", en: "Watch shared pans, oil and tools if highly sensitive.", zh: "若高度敏感，留意共用锅、油与工具。", ko: "매우 예민하면 공용 팬·기름·도구를 살피세요." } },
          { n: "03", t: { vi: "Mang thuốc", en: "Carry meds", zh: "带药", ko: "약 챙기기" }, b: { vi: "Mang theo thuốc theo chỉ dẫn y tế của bạn.", en: "Carry any medication per your medical advice.", zh: "按医嘱随身携带药物。", ko: "의료 지시에 따른 약을 지니세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có quầy chay riêng không?", en: "Is there a separate vegetarian stall?", zh: "有独立素食摊吗？", ko: "별도 채식 가게 있나요?" }, a: { vi: "Không có thông tin bếp riêng; hãy hỏi từng quầy về thành phần.", en: "No separate kitchen is listed; ask each stall about ingredients.", zh: "未列出独立厨房；请逐摊询问成分。", ko: "별도 주방 정보는 없으며 각 가게에 성분을 물어보세요." } },
      { q: { vi: "Làm sao hỏi không có tôm?", en: "How do I ask for no shrimp?", zh: "怎么要求不加虾？", ko: "새우 빼달라면?" }, a: { vi: "Nói “không có tôm” và chỉ vào món nếu cần minh hoạ.", en: "Say “no shrimp” and point at the dish if illustrating.", zh: "说“不要虾”并可指向菜品示意。", ko: "“새우 빼주세요”라 하고 필요하면 요리를 가리키세요." } },
      { q: { vi: "Dị ứng đậu phộng thì sao?", en: "What if allergic to peanuts?", zh: "对花生过敏怎么办？", ko: "땅콩 알레르기면?" }, a: { vi: "Nêu rõ và hỏi cả nước chấm, vì nhiều món có thể thêm đậu phộng.", en: "State it and ask about dipping sauces, since many dishes may add peanuts.", zh: "说清楚并询问蘸汁，因许多菜可能加花生。", ko: "분명히 말하고 소스도 물어보세요. 많은 요리에 땅콩이 들어갈 수 있습니다." } },
      { q: { vi: "Ai theo ăn kiêng nghiêm ngặt có nên đến không?", en: "Should strict diets visit?", zh: "严格饮食者适合来吗？", ko: "엄격한 식이자도 와야 하나요?" }, a: { vi: "Có thể, nhưng tự hỏi kỹ từng quầy và cân nhắc rủi ro chéo nhiễm.", en: "Possible, but ask each stall and weigh cross-contact risk.", zh: "可以，但请逐摊细问并权衡交叉污染风险。", ko: "가능하나 각 가게에 꼼꼼히 묻고 교차 오염 위험을 따지세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "khu-am-thuc-cho-con", tag: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" }, title: { vi: "Khu ẩm thực Chợ Cồn", en: "Chợ Cồn food court", zh: "昆市场餐饮区", ko: "꼰 시장 식사 구역" }, desc: { vi: "So sánh khu trong nhà và ngoài trời.", en: "Compare indoor and outdoor eating areas.", zh: "室内外餐饮区比较。", ko: "실내외 식사 구역 비교." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== C1 — Mua gì =====
  {
    slug: "mua-gi-o-cho-con",
    cat: "C",
    title: { vi: "Mua gì ở Chợ Cồn Đà Nẵng — Hướng dẫn", en: "What to buy at Chợ Cồn Đà Nẵng — guide", zh: "岘港昆市场买什么 — 指南", ko: "다낭 꼰 시장 무엇을 살까 — 가이드" },
    desc: { vi: "Gợi ý mua sắm tại Chợ Cồn: đặc sản, đồ khô, vải và lưu ý mang đi.", en: "Shopping suggestions at Chợ Cồn: specialities, dried goods, fabrics and travel notes.", zh: "昆市场购物建议：特产、干货、布料与携带提示。", ko: "꼰 시장 쇼핑 제안: 특산품·건어물·직물·이동 참고." },
    hero: {
      eye: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" },
      h1: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" },
      intro: { vi: "Chợ có đặc sản địa phương, đồ khô, gia vị và vải vóc. Dưới đây là gợi ý trung lập, không đề xuất quầy cụ thể.", en: "The market has local specialities, dried goods, spices and fabrics. Neutral suggestions below, no specific stalls.", zh: "市场有当地特产、干货、香料与布料。以下为中立建议，不推荐具体摊位。", ko: "시장에는 특산품·건어물·향신료·직물이 있습니다. 중립 제안이며 특정 가게 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhóm hàng", en: "Categories", zh: "品类", ko: "품목" }, title: { vi: "Các nhóm nên xem", en: "Groups worth a look", zh: "值得看看的品类", ko: "둘러볼 품목" },
        items: [
          { n: "01", t: { vi: "Đặc sản khô", en: "Dried specialities", zh: "干特产", ko: "건특산품" }, b: { vi: "Cà phê, hạt điều, mực khô đóng gói — kiểm tra hạn dùng.", en: "Coffee, cashews, dried squid — check use-by dates.", zh: "咖啡、腰果、干鱿鱼——检查保质期。", ko: "커피·캐슈너트·건오징어, 유통기한을 확인하세요." } },
          { n: "02", t: { vi: "Gia vị & nước chấm", en: "Spices & sauces", zh: "香料与酱料", ko: "향신료·소스" }, b: { vi: "Muối, tiêu, nước mắm, mắm nêm — hỏi rõ xuất xứ.", en: "Salt, pepper, fish sauce, mắm nêm — ask about origin.", zh: "盐、胡椒、鱼露、发酵酱——问清产地。", ko: "소금·후추·액젓·맘 넴, 원산지를 물어보세요." } },
          { n: "03", t: { vi: "Vải & may mặc", en: "Fabrics & clothing", zh: "布料与衣物", ko: "직물·의류" }, b: { vi: "Vải, áo và giày với giá tuỳ chất lượng; xem kỹ trước khi mua.", en: "Fabric, shirts and shoes at quality-based prices; inspect before buying.", zh: "布料、上衣与鞋按品质定价；购买前细看。", ko: "직물·셔츠·신발은 품질별 가격, 사기 전 꼼꼼히 보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có nên mặc cả không?", en: "Should I bargain?", zh: "要讲价吗？", ko: "흥정하나요?" }, a: { vi: "Ở vài quầy hàng ngày có thể hỏi nhẹ nhàng; giá đôi khi linh hoạt.", en: "At some daily stalls a polite ask is fine; prices can be flexible.", zh: "部分日常摊位可礼貌询问；价格有时可议。", ko: "일부 일상 가게는 정중히 여쭤보세요. 가격이 유연할 수 있습니다." } },
      { q: { vi: "Mua quà mang máy bay thế nào?", en: "How to buy gifts for the flight?", zh: "买什么带上飞机？", ko: "비행기 선물은?" }, a: { vi: "Chọn đồ khô đóng kín, kiểm tra quy định hãng và điểm đến.", en: "Pick well-sealed dried goods; check airline and destination rules.", zh: "选密封干货；查航司与目的地规定。", ko: "밀봉 건어물을 고르고 항공사·목적지 규정을 확인하세요." } },
      { q: { vi: "Có nhận thanh toán thẻ không?", en: "Do stalls take cards?", zh: "摊位收卡吗？", ko: "카드 결제 되나요?" }, a: { vi: "Tuỳ quầy; tiền mặt nhỏ thường thuận tiện hơn.", en: "Varies by stall; small cash is often handier.", zh: "视摊位而定；小额现金通常更方便。", ko: "가게마다 다르며 소액 현금이 편리합니다." } },
      { q: { vi: "Giờ mua sắm tốt nhất?", en: "Best shopping time?", zh: "最佳购物时间？", ko: "쇼핑 적기?" }, a: { vi: "Sáng và trưa thường đủ hàng; một số gian nghỉ chiều.", en: "Morning and midday usually have stock; some stalls close in the afternoon.", zh: "上午与中午货源较足；部分摊位下午休息。", ko: "오전과 정오는 물건이 충분, 일부는 오후에 문닫습니다." } }
    ],
    rel: [
      { slug: "dac-san-da-nang-lam-qua", tag: { vi: "Quà", en: "Gifts", zh: "伴手礼", ko: "선물" }, title: { vi: "Đặc sản Đà Nẵng làm quà", en: "Đà Nẵng souvenirs", zh: "岘港伴手礼", ko: "다낭 특산 선물" }, desc: { vi: "Gợi ý quà và lưu ý mang đi.", en: "Souvenir ideas and travel notes.", zh: "伴手礼建议与携带提示。", ko: "선물 제안과 이동 참고." } },
      { slug: "hai-san-kho-cho-con", tag: { vi: "Đồ khô", en: "Dried", zh: "干货", ko: "건어물" }, title: { vi: "Hải sản khô Chợ Cồn", en: "Dried seafood at Chợ Cồn", zh: "昆市场干海产", ko: "꼰 시장 건해산물" }, desc: { vi: "Cách chọn mực, tôm khô.", en: "How to choose dried squid and shrimp.", zh: "如何挑选干鱿鱼与虾干。", ko: "건오징어·새우 고르는 법." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== C2 — Đặc sản làm quà =====
  {
    slug: "dac-san-da-nang-lam-qua",
    cat: "C",
    title: { vi: "Đặc sản Đà Nẵng làm quà — Từ Chợ Cồn", en: "Đà Nẵng souvenirs — from Chợ Cồn", zh: "岘港伴手礼 — 来自昆市场", ko: "다낭 특산 선물 — 꼰 시장에서" },
    desc: { vi: "Gợi ý đặc sản Đà Nẵng mua tại Chợ Cồn làm quà, cùng lưu ý đóng gói và mang đi.", en: "Souvenir ideas from Chợ Cồn and notes on packaging and travel.", zh: "在昆市场购买的岘港伴手礼建议，含包装与携带提示。", ko: "꼰 시장에서 살 다낭 특산 선물 제안과 포장·이동 참고." },
    hero: {
      eye: { vi: "Quà tặng", en: "Gifts", zh: "伴手礼", ko: "선물" },
      h1: { vi: "Đặc sản Đà Nẵng làm quà", en: "Đà Nẵng souvenirs", zh: "岘港伴手礼", ko: "다낭 특산 선물" },
      intro: { vi: "Chợ Cồn thuận tiện chọn đặc sản đóng gói để mang về. Dưới đây là gợi ý trung lập, không đề xuất quầy.", en: "Chợ Cồn is handy for packaged specialities to take home. Neutral suggestions, no specific stalls.", zh: "昆市场便于挑选可携带的包装特产。以下为中立建议，不推荐摊位。", ko: "꼰 시장은 포장 특산품을 고르기 좋습니다. 중립 제안이며 가게 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Gợi ý", en: "Ideas", zh: "建议", ko: "제안" }, title: { vi: "Món nên cân nhắc", en: "Worth considering", zh: "值得考虑", ko: "고려할 것" },
        items: [
          { n: "01", t: { vi: "Hạt & cà phê", en: "Nuts & coffee", zh: "坚果与咖啡", ko: "견과·커피" }, b: { vi: "Hạt điều, cà phê rang — đóng gói kín, dễ mang.", en: "Cashews, roasted coffee — sealed and easy to carry.", zh: "腰果、烘焙咖啡——密封易带。", ko: "캐슈너트·볶은 커피, 밀봉되어 들고 다니기 좋습니다." } },
          { n: "02", t: { vi: "Đồ khô", en: "Dried goods", zh: "干货", ko: "건어물" }, b: { vi: "Mực, tôm khô — hỏi rõ hạn dùng và nguồn gốc.", en: "Dried squid, shrimp — ask use-by and origin.", zh: "干鱿鱼、虾干——问清保质期与产地。", ko: "건오징어·새우, 유통기한과 원산지를 물어보세요." } },
          { n: "03", t: { vi: "Gia vị", en: "Spices", zh: "香料", ko: "향신료" }, b: { vi: "Muối tiêu, nước mắm — kiểm tra quy định mang qua biên giới.", en: "Salt-pepper, fish sauce — check cross-border rules.", zh: "椒盐、鱼露——查跨境携带规定。", ko: "소금후추·액젓, 국경 반입 규정을 확인하세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mang thực phẩm khô qua máy bay được không?", en: "Can I fly with dried food?", zh: "干食能带上飞机吗？", ko: "건식품 비행기 반입 가능?" }, a: { vi: "Thường được nếu đóng kín và theo quy định hãng, điểm đến; kiểm tra trước.", en: "Usually if sealed and per airline and destination rules; check first.", zh: "若密封且符合航司与目的地规定通常可以；先查。", ko: "보통 밀봉되고 항공사·목적지 규정에 따르면 가능, 먼저 확인하세요." } },
      { q: { vi: "Bao lâu thì hỏng?", en: "How long before spoiling?", zh: "能放多久？", ko: "얼마나 보관되나요?" }, a: { vi: "Tuỳ bao bì và bảo quản; luôn xem hạn dùng trên gói.", en: "Depends on packaging and storage; always read the date.", zh: "视包装与保存而定；请看包装日期。", ko: "포장과 보관에 따라 다르며 유통기한을 확인하세요." } },
      { q: { vi: "Có nên mua số lượng nhiều?", en: "Buy in bulk?", zh: "要大量买吗？", ko: "대량 구매?" }, a: { vi: "Chỉ mua nhiều nếu chắc về bảo quản và mang đi.", en: "Only in bulk if sure about storage and transport.", zh: "仅在你确定保存与携带时才多买。", ko: "보관과 운반이 확실할 때만 대량 구매하세요." } },
      { q: { vi: "Giá quà tặng thế nào?", en: "What do gifts cost?", zh: "伴手礼大概多少钱？", ko: "선물 가격은?" }, a: { vi: "Do từng quầy định; hỏi giá và so sánh vài nơi.", en: "Set per stall; ask and compare a few spots.", zh: "由各摊位自定；问价并比较几家。", ko: "가게마다 다르며 몇 곳 비교해 보세요." } }
    ],
    rel: [
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản, đồ khô, vải và lưu ý.", en: "Specialities, dried goods, fabrics and notes.", zh: "特产、干货、布料与提示。", ko: "특산품·건어물·직물·참고." } },
      { slug: "nuoc-mam-mam-nem-cho-con", tag: { vi: "Gia vị", en: "Sauces", zh: "调味", ko: "소스" }, title: { vi: "Nước mắm & mắm nêm", en: "Fish sauce & mắm nêm", zh: "鱼露与发酵酱", ko: "액젓과 맘 넴" }, desc: { vi: "Hiểu thêm gia vị miền Trung.", en: "More on Central-Vietnam condiments.", zh: "进一步了解中部调味品。", ko: "중부 양념 더 알기." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== C3 — Hải sản khô =====
  {
    slug: "hai-san-kho-cho-con",
    cat: "C",
    title: { vi: "Hải sản khô Chợ Cồn — Chọn & bảo quản", en: "Dried seafood at Chợ Cồn — choose & store", zh: "昆市场干海产 — 挑选与保存", ko: "꼰 시장 건해산물 — 고르기와 보관" },
    desc: { vi: "Cách chọn mực, tôm khô và bảo quản khi mua tại Chợ Cồn, trung lập.", en: "How to choose dried squid and shrimp and store them at Chợ Cồn, neutral.", zh: "在昆市场挑选干鱿鱼、虾干与保存的方法，中立。", ko: "꼰 시장에서 건오징어·새우 고르기와 보관법, 중립적." },
    hero: {
      eye: { vi: "Đồ khô", en: "Dried goods", zh: "干货", ko: "건어물" },
      h1: { vi: "Hải sản khô Chợ Cồn", en: "Dried seafood at Chợ Cồn", zh: "昆市场干海产", ko: "꼰 시장 건해산물" },
      intro: { vi: "Mực, tôm khô là đặc sản phổ biến. Dưới đây là gợi ý chọn và bảo quản, không đề xuất quầy.", en: "Dried squid and shrimp are common specialities. Below are choosing and storage tips, no specific stalls.", zh: "干鱿鱼与虾干是常见特产。以下为挑选与保存建议，不推荐摊位。", ko: "건오징어·건새우는 흔한 특산품입니다. 고르기와 보관 팁이며 가게 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Chọn", en: "Choosing", zh: "挑选", ko: "고르기" }, title: { vi: "Cách chọn đồ khô", en: "Choosing dried goods", zh: "如何挑选干货", ko: "건어물 고르는 법" },
        items: [
          { n: "01", t: { vi: "Màu & mùi", en: "Colour & smell", zh: "色泽与气味", ko: "색과 향" }, b: { vi: "Chọn mẫu đều màu, mùi hải sản tự nhiên, không mốc.", en: "Pick even-coloured pieces with natural seafood smell, no mould.", zh: "选色泽均匀、有自然海鲜味、无霉的。", ko: "색이 고르고 자연스러운 해산물 향, 곰팡이 없는 것." } },
          { n: "02", t: { vi: "Đóng gói", en: "Packaging", zh: "包装", ko: "포장" }, b: { vi: "Ưu tiên gói kín, có hạn dùng rõ ràng.", en: "Prefer sealed packs with a clear use-by date.", zh: "优先密封、保质期清晰的包装。", ko: "유통기한이 분명한 밀봉 포장을 고르세요." } },
          { n: "03", t: { vi: "Hỏi nguồn", en: "Ask origin", zh: "问产地", ko: "원산지" }, b: { vi: "Hỏi quầy về nguồn và ngày đóng gói nếu cần.", en: "Ask the stall about source and packing date if needed.", zh: "需要时向摊位问产地与包装日期。", ko: "필요하면 가게에 원산지와 포장일을 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Bảo quản thế nào khi mang xa?", en: "How to store for travel?", zh: "远途怎么保存？", ko: "먼 곳 가져갈 땐?" }, a: { vi: "Giữ nơi khô, mát; tránh ánh nắng và ẩm.", en: "Keep dry and cool; avoid sun and moisture.", zh: "置于干燥阴凉处；避光避潮。", ko: "건조하고 서늘하게, 햇빛과 습기 피하세요." } },
      { q: { vi: "Mang qua biên giới được không?", en: "Allowed across borders?", zh: "能跨境带吗？", ko: "국경 반입 가능?" }, a: { vi: "Tuỳ quy định điểm đến; kiểm tra trước khi bay.", en: "Depends on destination rules; check before flying.", zh: "视目的地规定；乘机前查。", ko: "목적지 규정에 따르며 비행 전 확인하세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; so sánh vài nơi trước khi mua.", en: "Set per stall; compare a few spots before buying.", zh: "由各摊位自定；购买前比较几家。", ko: "가게마다 다르며 사기 전 몇 곳 비교하세요." } },
      { q: { vi: "Có loại nào phổ biến nhất?", en: "Which is most common?", zh: "哪种最常见？", ko: "가장 흔한 건?" }, a: { vi: "Mực khô và tôm khô thường gặp nhất; tuỳ mùa.", en: "Dried squid and shrimp are most common; by season.", zh: "干鱿鱼与虾干最常见；视季节。", ko: "건오징어와 건새우가 가장 흔하며 계절에 따라 다릅니다." } }
    ],
    rel: [
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản, đồ khô, vải và lưu ý.", en: "Specialities, dried goods, fabrics and notes.", zh: "特产、干货、布料与提示。", ko: "특산품·건어물·직물·참고." } },
      { slug: "dac-san-da-nang-lam-qua", tag: { vi: "Quà", en: "Gifts", zh: "伴手礼", ko: "선물" }, title: { vi: "Đặc sản Đà Nẵng làm quà", en: "Đà Nẵng souvenirs", zh: "岘港伴手礼", ko: "다낭 특산 선물" }, desc: { vi: "Gợi ý quà và lưu ý mang đi.", en: "Souvenir ideas and travel notes.", zh: "伴手礼建议与携带提示。", ko: "선물 제안과 이동 참고." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== C4 — Nước mắm & mắm nêm =====
  {
    slug: "nuoc-mam-mam-nem-cho-con",
    cat: "C",
    title: { vi: "Nước mắm & mắm nêm Chợ Cồn — Gia vị miền Trung", en: "Fish sauce & mắm nêm at Chợ Cồn — Central condiments", zh: "昆市场鱼露与发酵酱 — 中部调味品", ko: "꼰 시장 액젓과 맘 넴 — 중부 양념" },
    desc: { vi: "Giới thiệu nước mắm, mắm nêm và gia vị miền Trung tại Chợ Cồn, trung lập.", en: "An introduction to fish sauce, mắm nêm and Central-Vietnam condiments at Chợ Cồn, neutral.", zh: "昆市场的鱼露、发酵酱与中部调味品介绍，中立。", ko: "꼰 시장의 액젓·맘 넴·중부 양념 소개, 중립적." },
    hero: {
      eye: { vi: "Gia vị", en: "Condiments", zh: "调味", ko: "양념" },
      h1: { vi: "Nước mắm & mắm nêm", en: "Fish sauce & mắm nêm", zh: "鱼露与发酵酱", ko: "액젓과 맘 넴" },
      intro: { vi: "Nước mắm và mắm nêm là gia vị đặc trưng miền Trung. Dưới đây là gợi ý tìm hiểu, không đề xuất quầy.", en: "Fish sauce and mắm nêm are signature Central-Vietnam condiments. Notes below, no specific stalls.", zh: "鱼露与发酵酱是中部特色调味品。以下为认识建议，不推荐摊位。", ko: "액젓과 맘 넴은 중부 특유 양념입니다. 알아보기 팁이며 가게 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Phân biệt", en: "Differences", zh: "区别", ko: "차이" }, title: { vi: "Hiểu hai loại", en: "Two types explained", zh: "认识两种", ko: "두 가지 알기" },
        items: [
          { n: "01", t: { vi: "Nước mắm", en: "Fish sauce", zh: "鱼露", ko: "액젓" }, b: { vi: "Nước chấm từ cá lên men, dùng phổ biến khắp Việt Nam.", en: "A fermented fish dipping sauce used across Vietnam.", zh: "鱼类发酵蘸汁，全越南通用。", ko: "발효된 생선 소스로 베트남 전역에서 씁니다." } },
          { n: "02", t: { vi: "Mắm nêm", en: "Mắm nêm", zh: "发酵酱", ko: "맘 넴" }, b: { vi: "Đặc trưng miền Trung, mùi và vị đậm hơn.", en: "A Central-Vietnam speciality with a stronger aroma and taste.", zh: "中部特有，气味与味道更浓。", ko: "중부 특유로 향과 맛이 더 진합니다." } },
          { n: "03", t: { vi: "Chọn lọ", en: "Choose a bottle", zh: "选瓶", ko: "병 고르기" }, b: { vi: "Xem nhãn, hạn dùng và độ đạm nếu muốn.", en: "Read the label, use-by and protein grade if you wish.", zh: "看标签、保质期与若在意则看蛋白度。", ko: "라벨·유통기한·함량 등급을 보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mắm nêm có mùi mạnh không?", en: "Does mắm nêm smell strong?", zh: "发酵酱味重吗？", ko: "맘 넴 향이 강한가요?" }, a: { vi: "Có mùi lên men riêng, nhẹ hơn với người quen; tuỳ khẩu vị.", en: "It has a distinct fermented scent; a matter of taste.", zh: "有独特发酵味；因人而异。", ko: "특유의 발효 향이 있으며 취향 문제입니다." } },
      { q: { vi: "Mang đi máy bay được không?", en: "Can I take it on a plane?", zh: "能带上飞机吗？", ko: "비행기 반입 가능?" }, a: { vi: "Chai đã niêm phong thường được ký gửi; kiểm tra quy định hãng.", en: "Sealed bottles are usually checked in; check airline rules.", zh: "密封瓶通常可托运；查航司规定。", ko: "밀봉 병은 보통 위탁이며 항공사 규정을 확인하세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do từng quầy định; so sánh vài nơi.", en: "Set per stall; compare a few spots.", zh: "由各摊位自定；比较几家。", ko: "가게마다 다르며 몇 곳 비교하세요." } },
      { q: { vi: "Có bản chay không?", en: "Is there a vegetarian version?", zh: "有素食版吗？", ko: "채식 버전이 있나요?" }, a: { vi: "Không; cả hai đều từ cá, không phù hợp ăn chay.", en: "No; both are fish-based and not vegetarian.", zh: "无；两者皆鱼制，不适合素食。", ko: "아니요, 둘 다 생선 기반이라 채식에 안 맞습니다." } }
    ],
    rel: [
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản, đồ khô, vải và lưu ý.", en: "Specialities, dried goods, fabrics and notes.", zh: "特产、干货、布料与提示。", ko: "특산품·건어물·직물·참고." } },
      { slug: "bun-mam-nem-cho-con", tag: { vi: "Món ăn", en: "Dish", zh: "美食", ko: "요리" }, title: { vi: "Bún mắm nêm Chợ Cồn", en: "Bún mắm nêm at Chợ Cồn", zh: "昆市场鱼露米线", ko: "꼰 시장 번 맘 넴" }, desc: { vi: "Món dùng nước mắm nêm đặc trưng.", en: "A dish using fermented sauce.", zh: "使用发酵鱼露的菜品。", ko: "발효 소스를 쓰는 요리." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== C5 — Quần áo & vải =====
  {
    slug: "quan-ao-va-vai-o-cho-con",
    cat: "C",
    title: { vi: "Quần áo & vải Chợ Cồn — Mua sắm", en: "Clothing & fabric at Chợ Cồn — shopping", zh: "昆市场衣物与布料 — 购物", ko: "꼰 시장 의류와 직물 — 쇼핑" },
    desc: { vi: "Gợi ý mua vải, áo và giày tại Chợ Cồn, cùng lưu ý chất lượng và giá.", en: "Tips for buying fabric, shirts and shoes at Chợ Cồn, with quality and price notes.", zh: "在昆市场购买布料、上衣与鞋的建议，含质量与价格提示。", ko: "꼰 시장에서 직물·셔츠·신발 사기 팁과 품질·가격 참고." },
    hero: {
      eye: { vi: "May mặc", en: "Apparel", zh: "衣物", ko: "의류" },
      h1: { vi: "Quần áo & vải Chợ Cồn", en: "Clothing & fabric at Chợ Cồn", zh: "昆市场衣物与布料", ko: "꼰 시장 의류와 직물" },
      intro: { vi: "Khu vải và may mặc có giá tuỳ chất lượng. Dưới đây là gợi ý trung lập, không đề xuất quầy.", en: "The fabric and apparel section prices by quality. Neutral suggestions, no specific stalls.", zh: "布料与衣物区按品质定价。以下为中立建议，不推荐摊位。", ko: "직물·의류 구역은 품질별 가격입니다. 중립 제안이며 가게 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Chọn", en: "Choosing", zh: "挑选", ko: "고르기" }, title: { vi: "Mua may mặc thế nào", en: "Buying apparel", zh: "如何买衣物", ko: "의류 사기" },
        items: [
          { n: "01", t: { vi: "Xem kỹ", en: "Inspect", zh: "细看", ko: "꼼꼼히" }, b: { vi: "Kiểm tra đường may, vải và khuy trước khi mua.", en: "Check seams, fabric and buttons before buying.", zh: "购买前检查缝线、布料与纽扣。", ko: "사기 전 바느질·원단·단추를 확인하세요." } },
          { n: "02", t: { vi: "Thử size", en: "Try size", zh: "试尺寸", ko: "사이즈" }, b: { vi: "Nếu có thể, thử mẫu vì size có thể khác nhãn.", en: "If possible, try it on since sizing may differ from labels.", zh: "如可试穿，因尺码可能与标牌不同。", ko: "가능하면 입어보세요. 사이즈가 라벨과 다를 수 있습니다." } },
          { n: "03", t: { vi: "Hỏi giá", en: "Ask price", zh: "问价", ko: "가격" }, b: { vi: "Hỏi giá từng món; một số nơi có thể hỏi nhẹ nhàng.", en: "Ask each price; some spots may allow a polite ask.", zh: "逐件问价；部分可礼貌询问。", ko: "개별 가격을 물어보고 일부는 정중히 여쭤보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có may đo riêng không?", en: "Is tailoring available?", zh: "能定做吗？", ko: "맞춤 제작 있나요?" }, a: { vi: "Một số gian may cơ bản; hỏi kỹ thời gian và giá.", en: "Some stalls do basic sewing; ask time and price clearly.", zh: "部分摊位可做基础缝制；问清时间与价格。", ko: "일부 가게는 기본 재봉을 하니 시간과 가격을 분명히 물어보세요." } },
      { q: { vi: "Vải có nhiều loại không?", en: "Are there many fabrics?", zh: "布料种类多吗？", ko: "직물 종류 많나요?" }, a: { vi: "Có vải cotton, lụa và tổng hợp; tuỳ mục đích sử dụng.", en: "Cotton, silk and synthetics exist; by use.", zh: "有棉、丝与化纤；按用途。", ko: "면·실크·합성섬유가 있으며 용도에 따라 다릅니다." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Do chất lượng và loại; hỏi và so sánh vài nơi.", en: "By quality and type; ask and compare.", zh: "视质量与种类；问价并比较。", ko: "품질과 종류에 따라 다르며 물어보고 비교하세요." } },
      { q: { vi: "Có nên mua số lượng nhiều?", en: "Buy in bulk?", zh: "要大量买吗？", ko: "대량 구매?" }, a: { vi: "Chỉ nếu chắc về chất lượng và cách mang đi.", en: "Only if sure about quality and transport.", zh: "仅在你确定质量与携带方式时。", ko: "품질과 운반이 확실할 때만." } }
    ],
    rel: [
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản, đồ khô, vải và lưu ý.", en: "Specialities, dried goods, fabrics and notes.", zh: "特产、干货、布料与提示。", ko: "특산품·건어물·직물·참고." } },
      { slug: "khach-san-gan-cho-con", tag: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" }, title: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" }, desc: { vi: "Chọn nơi ở theo vị trí và đi lại.", en: "Choose where to stay by location.", zh: "按位置选住宿。", ko: "위치로 숙소 고르기." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D1 — Quán ăn gần =====
  {
    slug: "quan-an-gan-cho-con",
    cat: "D",
    title: { vi: "Quán ăn gần Chợ Cồn — Góc ẩm thực", en: "Restaurants near Chợ Cồn — dining around", zh: "昆市场附近餐厅 — 周边餐饮", ko: "꼰 시장 인근 식당 — 주변 식사" },
    desc: { vi: "Góc ẩm thực quanh Chợ Cồn: quán ăn, bữa và cách ghép vào lộ trình, trung lập.", en: "Dining around Chợ Cồn: eateries, meals and how to fit them in, neutral.", zh: "昆市场周边餐饮：食肆、餐别与如何纳入行程，中立。", ko: "꼰 시장 주변 식당: 식사류와 일정 편성, 중립적." },
    hero: {
      eye: { vi: "Quanh chợ", en: "Around the market", zh: "市场周边", ko: "시장 주변" },
      h1: { vi: "Quán ăn gần Chợ Cồn", en: "Restaurants near Chợ Cồn", zh: "昆市场附近餐厅", ko: "꼰 시장 인근 식당" },
      intro: { vi: "Xung quanh chợ có nhiều quán ăn từ nhanh đến ngồi lâu. Dưới đây là góc nhìn trung lập, không xếp hạng.", en: "Around the market are many eateries from quick to sit-down. A neutral overview, not ranked.", zh: "市场周边有许多从快餐到堂食的食肆。中立概览，不排名。", ko: "시장 주변에는 간편식부터 매장 식사까지 많습니다. 순위 아닌 중립 개요." }
    },
    sections: [
      { idx: "01", eye: { vi: "Theo bữa", en: "By meal", zh: "按餐别", ko: "식사별" }, title: { vi: "Chọn theo bữa", en: "Choose by meal", zh: "按餐选择", ko: "식사로 고르기" },
        items: [
          { n: "01", t: { vi: "Sáng & trưa", en: "Breakfast & lunch", zh: "早午", ko: "아침·점심" }, b: { vi: "Quán phở, bún và cơm thường mở sớm, thuận tiện trước khi vào chợ.", en: "Phở, bún and rice shops often open early, handy before the market.", zh: "粉、米线与会馆通常早开，进场前方便。", ko: "쌀국수·분·쌀 요리 집은 일찍 열어 시장 전에 좋습니다." } },
          { n: "02", t: { vi: "Chiều & tối", en: "Afternoon & evening", zh: "下午晚", ko: "오후·저녁" }, b: { vi: "Quán nướng, lẩu và café kéo dài sang tối quanh Hải Châu.", en: "Grill, hotpot and café spots run into the evening around Hải Châu.", zh: "烤肉、火锅与咖啡馆在海洲郡一带延续至晚间。", ko: "고기구이·전골·카페는 하이쩌우 일대 저녁까지." } },
          { n: "03", t: { vi: "Ăn nhanh", en: "Quick bites", zh: "简餐", ko: "간편식" }, b: { vi: "Quán vỉa hè và quầy chợ phù hợp ăn vặt giữa buổi.", en: "Street and stall spots suit mid-visit snacks.", zh: "路边摊与市场摊位适合中途小吃。", ko: "노점과 시장 가게는 중간 간식에 좋습니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Quán nào gần nhất chợ?", en: "Which is closest to the market?", zh: "哪家离市场最近？", ko: "시장과 가장 가까운 곳?" }, a: { vi: "Nhiều quán nằm trên các trục phố quanh Hùng Vương và Ông Ích Khiêm; đi bộ vài phút.", en: "Many sit on streets around Hùng Vương and Ông Ích Khiêm; a few minutes' walk.", zh: "许多位于雄王街与英节卿街周边；步行几分钟。", ko: "훙브엉과 온 이히 껌 주변 거리에 많으며 도보 수 분." } },
      { q: { vi: "Có quán chay không?", en: "Are there vegetarian restaurants?", zh: "有素食餐厅吗？", ko: "채식 식당 있나요?" }, a: { vi: "Một số quán có món chay; hỏi kỹ thực đơn nếu cần.", en: "Some serve vegetarian dishes; ask the menu if needed.", zh: "部分提供素食；需要时细问菜单。", ko: "일부는 채식 요리가 있으며 필요하면 메뉴를 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Tuỳ loại quán; hỏi giá và xem thực đơn trước.", en: "Depends on the venue; ask and read the menu first.", zh: "视店型而定；先看菜单问价。", ko: "가게 종류에 따라 다르며 메뉴를 먼저 보세요." } },
      { q: { vi: "Có cần đặt bàn không?", en: "Do I need a reservation?", zh: "需要订位吗？", ko: "예약 필요한가요?" }, a: { vi: "Quán nhỏ thường không; quán lớn giờ cao điểm có thể đông.", en: "Small spots usually no; large ones may fill at peak.", zh: "小店通常不用；大店高峰可能满座。", ko: "작은 곳은 보통 불필요, 큰 곳은 피크타임에 붐빕니다." } }
    ],
    rel: [
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Cà phê", en: "Coffee", zh: "咖啡", ko: "커피" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi tham quan.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } },
      { slug: "an-gi-o-cho-con", tag: { vi: "Trong chợ", en: "In market", zh: "市场内", ko: "시장 안" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "cho-con-hay-cho-han", tag: { vi: "So sánh", en: "Compare", zh: "比较", ko: "비교" }, title: { vi: "Chợ Cồn hay Chợ Hàn?", en: "Con Market or Hàn Market?", zh: "昆市场还是韩市场？", ko: "꼰 시장 아니면 한 시장?" }, desc: { vi: "Chọn chợ theo nhu cầu.", en: "Pick a market by need.", zh: "按需求选市场。", ko: "필요에 따라 시장 고르기." } }
    ]
  },
  // ===== D2 — Cà phê gần =====
  {
    slug: "ca-phe-gan-cho-con",
    cat: "D",
    title: { vi: "Cà phê gần Chợ Cồn — Nghỉ giữa buổi", en: "Coffee near Chợ Cồn — a mid-visit break", zh: "昆市场附近咖啡 — 中途歇脚", ko: "꼰 시장 인근 커피 — 관람 중 휴식" },
    desc: { vi: "Gợi ý quán cà phê quanh Chợ Cồn để nghỉ ngơi, trung lập và không xếp hạng.", en: "Café suggestions around Chợ Cồn for a rest, neutral and unranked.", zh: "昆市场周边咖啡馆建议，用以休息，中立不排名。", ko: "꼰 시장 주변 카페 제안, 중립적 비순위." },
    hero: {
      eye: { vi: "Cà phê", en: "Coffee", zh: "咖啡", ko: "커피" },
      h1: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" },
      intro: { vi: "Sau khi đi chợ, một quán cà phê là nơi hợp để ngồi lại. Dưới đây là góc nhìn trung lập.", en: "After the market, a café is a good place to sit. A neutral overview.", zh: "逛完市场，咖啡馆适合坐下来。中立概览。", ko: "시장 이후 카페는 앉아 쉬기 좋습니다. 중립 개요." }
    },
    sections: [
      { idx: "01", eye: { vi: "Chọn quán", en: "Choosing", zh: "选店", ko: "고르기" }, title: { vi: "Cà phê phù hợp", en: "The right café", zh: "合适的咖啡馆", ko: "알맞은 카페" },
        items: [
          { n: "01", t: { vi: "Cà phê Việt", en: "Vietnamese coffee", zh: "越南咖啡", ko: "베트남 커피" }, b: { vi: "Pha phin đen hoặc sữa đá là trải nghiệm quen thuộc.", en: "Black or iced-milk drip coffee is the familiar experience.", zh: "黑咖啡或炼乳冰咖啡是熟悉的体验。", ko: "블랙이나 우유 얼음 커피가 친숙한 경험입니다." } },
          { n: "02", t: { vi: "Cà phê muối", en: "Salt coffee", zh: "盐咖啡", ko: "소금 커피" }, b: { vi: "Một biến tấu địa phương; thử nếu thích vị lạ.", en: "A local twist; try if you like unusual flavours.", zh: "一种本地变体；喜欢特别口味可试。", ko: "현지 변주로 특이한 맛을 좋아하면 드세요." } },
          { n: "03", t: { vi: "Không gian", en: "Setting", zh: "环境", ko: "공간" }, b: { vi: "Chọn quán có máy lạnh hoặc ban công tuỳ thời tiết.", en: "Pick air-conditioned or balcony spots by weather.", zh: "按天气选有空调或露台者。", ko: "날씨에 따라 에어컨 or 발코니 자리를 고르세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Cà phê có mở sớm không?", en: "Do cafés open early?", zh: "咖啡馆早开吗？", ko: "카페 일찍 열나요?" }, a: { vi: "Nhiều quán mở từ sáng; một số quán đậm phong cách mở muộn hơn.", en: "Many open in the morning; some styled spots open later.", zh: "许多早上开业；部分风格店较晚。", ko: "많은 곳이 아침에 열고 일부 감성 카페는 늦게." } },
      { q: { vi: "Có Wi-Fi không?", en: "Is there Wi-Fi?", zh: "有 Wi-Fi 吗？", ko: "와이파이 있나요?" }, a: { vi: "Nhiều quán có; hỏi nhân viên nếu cần làm việc.", en: "Many have it; ask staff if you need to work.", zh: "许多有；若需办公可问店员。", ko: "많이 있습니다. 작업 필요하면 직원에게 물어보세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Tuỳ quán; xem bảng giá trước khi gọi.", en: "Depends on the venue; check the price board first.", zh: "视店型而定；点单前看价目。", ko: "가게에 따라 다르며 주문 전 가격표를 보세요." } },
      { q: { vi: "Có phù hợp gia đình không?", en: "Family-friendly?", zh: "适合家庭吗？", ko: "가족에게 좋나요?" }, a: { vi: "Có; chọn quán rộng và ít ồn nếu đi cùng trẻ.", en: "Yes; pick roomy, quieter spots with kids.", zh: "适合；带儿童选宽敞安静的。", ko: "네, 아이와는 넓고 조용한 곳을 고르세요." } }
    ],
    rel: [
      { slug: "quan-an-gan-cho-con", tag: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" }, title: { vi: "Quán ăn gần Chợ Cồn", en: "Restaurants near Chợ Cồn", zh: "昆市场附近餐厅", ko: "꼰 시장 인근 식당" }, desc: { vi: "Góc ẩm thực quanh chợ.", en: "Dining around the market.", zh: "市场周边餐饮。", ko: "시장 주변 식당." } },
      { slug: "cho-con-den-cau-rong", tag: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" }, title: { vi: "Đến Cầu Rồng", en: "To Dragon Bridge", zh: "前往龙桥", ko: "용 다리로" }, desc: { vi: "Nối buổi tối chợ với cảnh đêm.", en: "Link market evening with night views.", zh: "把市场夜晚与夜景相接。", ko: "시장 저녁과 야경 연결." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D3 — Chợ Cồn hay Chợ Hàn =====
  {
    slug: "cho-con-hay-cho-han",
    cat: "D",
    title: { vi: "Chợ Cồn hay Chợ Hàn — Chọn chợ nào", en: "Con Market or Hàn Market — which to pick", zh: "昆市场还是韩市场 — 选哪个", ko: "꼰 시장 아니면 한 시장 — 어느 쪽" },
    desc: { vi: "So sánh Chợ Cồn và Chợ Hàn để chọn theo nhu cầu: ăn uống hay mua sắm.", en: "Compare Con Market and Hàn Market to choose by need: food or shopping.", zh: "比较昆市场与韩市场，按需求选择：吃还是买。", ko: "꼰 시장과 한 시장 비교, 필요에 따라 고르기: 식사 또는 쇼핑." },
    hero: {
      eye: { vi: "So sánh", en: "Compare", zh: "比较", ko: "비교" },
      h1: { vi: "Chợ Cồn hay Chợ Hàn?", en: "Con Market or Hàn Market?", zh: "昆市场还是韩市场？", ko: "꼰 시장 아니면 한 시장?" },
      intro: { vi: "Hai chợ đều ở trung tâm, nhưng thiên về trải nghiệm khác nhau. Dưới đây là gợi ý trung lập.", en: "Both markets are central but lean to different experiences. Neutral guidance.", zh: "两座市场都在市中心，但体验侧重不同。中立指引。", ko: "두 시장 모두 도심이나 경험 성격이 다릅니다. 중립 안내." }
    },
    sections: [
      { idx: "01", eye: { vi: "Khác biệt", en: "Differences", zh: "区别", ko: "차이" }, title: { vi: "Mỗi chợ một thế mạnh", en: "Each has a strength", zh: "各有侧重", ko: "각자의 강점" },
        items: [
          { n: "01", t: { vi: "Chợ Cồn", en: "Con Market", zh: "昆市场", ko: "꼰 시장" }, b: { vi: "Thiên về ăn uống địa phương và đời sống thường nhật.", en: "Leans to local food and everyday life.", zh: "偏向本地饮食与日常烟火。", ko: "현지 식생활과 일상에 치중." } },
          { n: "02", t: { vi: "Chợ Hàn", en: "Hàn Market", zh: "韩市场", ko: "한 시장" }, b: { vi: "Thiên về mua sắm, quà tặng và áo quần hơn.", en: "Leans more to shopping, gifts and clothing.", zh: "更偏购物、伴手礼与衣物。", ko: "쇼핑·선물·의류에 더 치중." } },
          { n: "03", t: { vi: "Khoảng cách", en: "Distance", zh: "距离", ko: "거리" }, b: { vi: "Cách nhau vài km, đi bộ hoặc taxi tuỳ sức.", en: "A few km apart; walk or taxi by stamina.", zh: "相距数公里，按体力步行或打车。", ko: "수 km 거리로 체력 따라 도보나 택시." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Nên đi chợ nào trước?", en: "Which to visit first?", zh: "先去哪个？", ko: "먼저 어디로?" }, a: { vi: "Nếu thích ăn uống, bắt đầu Chợ Cồn; nếu mua sắm, Chợ Hàn.", en: "Start with Con Market for food, Hàn for shopping.", zh: "想吃先昆市场；想买先韩市场。", ko: "식사면 꼰, 쇼핑이면 한 시장 먼저." } },
      { q: { vi: "Có thể đi cả hai trong nửa ngày không?", en: "Can I do both in half a day?", zh: "半天能去两个吗？", ko: "반나절에 둘 다 가능?" }, a: { vi: "Có; xem lộ trình đi bộ nối hai chợ để thuận tiện.", en: "Yes; see the walking route linking both markets.", zh: "可以；参照连接两市的步行路线。", ko: "네, 두 시장을 잇는 도보 경로를 보세요." } },
      { q: { vi: "Chợ nào rẻ hơn?", en: "Which is cheaper?", zh: "哪个更便宜？", ko: "어느 쪽이 싼가요?" }, a: { vi: "Giá do từng quầy; hỏi và so sánh vài nơi ở cả hai.", en: "Prices are per stall; ask and compare at both.", zh: "价格因摊位而异；两边多问多比。", ko: "가격은 가게마다, 양쪽에서 비교하세요." } },
      { q: { vi: "Có an toàn cho du khách không?", en: "Safe for visitors?", zh: "对游客安全吗？", ko: "방문객에게 안전한가요?" }, a: { vi: "Cả hai đều là chợ công cộng đông đúc; giữ tư trang gọn.", en: "Both are busy public markets; keep belongings compact.", zh: "两者都是拥挤公共市场；收好随身物。", ko: "둘 다 붐비는 공공 시장으로 소지품을 가까이 두세요." } }
    ],
    rel: [
      { slug: "di-bo-cho-con-den-cho-han", tag: { vi: "Đi bộ", en: "Walking", zh: "步行", ko: "도보" }, title: { vi: "Đi bộ hai chợ", en: "Walking both markets", zh: "两市场步行", ko: "두 시장 도보" }, desc: { vi: "Lộ trình nối Chợ Cồn và Chợ Hàn.", en: "Route linking Con and Hàn markets.", zh: "连接昆市场与韩市场的路线。", ko: "꼰과 한 시장 잇는 경로." } },
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản và lưu ý.", en: "Speciality suggestions and notes.", zh: "特产建议与提示。", ko: "특산품 제안과 참고." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D4 — Đi bộ hai chợ =====
  {
    slug: "di-bo-cho-con-den-cho-han",
    cat: "D",
    title: { vi: "Đi bộ Chợ Cồn đến Chợ Hàn — Lộ trình", en: "Walking from Con Market to Hàn Market — route", zh: "昆市场步行至韩市场 — 路线", ko: "꼰 시장에서 한 시장까지 도보 — 경로" },
    desc: { vi: "Lộ trình đi bộ nối Chợ Cồn và Chợ Hàn: khoảng cách, hướng và lưu ý nghỉ.", en: "A walking route linking Con and Hàn markets: distance, direction and rest notes.", zh: "连接昆市场与韩市场的步行路线：距离、方向与休息提示。", ko: "꼰과 한 시장 잇는 도보 경로: 거리·방향·휴식 참고." },
    hero: {
      eye: { vi: "Đi bộ", en: "Walking", zh: "步行", ko: "도보" },
      h1: { vi: "Đi bộ Chợ Cồn → Chợ Hàn", en: "Con Market → Hàn Market walk", zh: "昆市场 → 韩市场 步行", ko: "꼰 시장 → 한 시장 도보" },
      intro: { vi: "Hai chợ cách nhau vài km qua khu phố trung tâm. Dưới đây là khung tham khảo, tốc độ và đường phụ thuộc bạn.", en: "The markets are a few km apart through central streets. A reference frame; pace and streets depend on you.", zh: "两市场相隔数公里，穿越中心街区。以下为参考框架，步速与街道由你定。", ko: "두 시장은 도심 거리로 수 km, 참고 틀일 뿐 속도와 길은 상황에 따라 다릅니다." }
    },
    sections: [
      { idx: "01", eye: { vi: "Lộ trình", en: "Route", zh: "路线", ko: "경로" }, title: { vi: "Đi như thế nào", en: "How to go", zh: "怎么走", ko: "가는 법" },
        items: [
          { n: "01", t: { vi: "Hướng", en: "Direction", zh: "方向", ko: "방향" }, b: { vi: "Đi theo trục phố chính hướng về phía đông bắc trung tâm.", en: "Follow the main streets toward the north-east centre.", zh: "沿主街向东北市中心方向。", ko: "주요 거리를 따라 동북 도심 방향으로." } },
          { n: "02", t: { vi: "Khoảng cách", en: "Distance", zh: "距离", ko: "거리" }, b: { vi: "Khoảng vài km; tuỳ lộ trình cụ thể và thời tiết.", en: "About a few km; by exact path and weather.", zh: "约数公里；视具体路径与天气。", ko: "약 수 km, 정확한 길과 날씨에 따라 다릅니다." } },
          { n: "03", t: { vi: "Nghỉ giữa đường", en: "Rest stops", zh: "中途休息", ko: "중간 휴식" }, b: { vi: "Ghé quán cà phê hoặc công viên nhỏ nếu cần.", en: "Stop at a café or small park if needed.", zh: "需要时可进咖啡馆或小公园。", ko: "필요하면 카페나 작은 공원에서 쉬세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Đi bộ mất bao lâu?", en: "How long on foot?", zh: "步行要多久？", ko: "도보로 얼마나?" }, a: { vi: "Thường khoảng 30–45 phút tuỳ tốc độ; chia nhỏ nếu nóng.", en: "Usually 30–45 minutes by pace; break it up if hot.", zh: "通常约 30–45 分钟，视步速；天热可分段。", ko: "보통 30~45분, 더우면 나눠 걷세요." } },
      { q: { vi: "Có nên đi taxi thay vì đi bộ?", en: "Taxi instead of walking?", zh: "打车代替步行？", ko: "도보 대신 택시?" }, a: { vi: "Nếu mang nhiều đồ hoặc trời mưa, taxi/Grab thuận tiện hơn.", en: "If carrying much or raining, taxi/Grab is handier.", zh: "若提重物或下雨，打车/Grab 更方便。", ko: "짐이 많거나 비 오면 택시·그랩이 편합니다." } },
      { q: { vi: "Đường có an toàn không?", en: "Is the route safe?", zh: "路线安全吗？", ko: "경로 안전한가요?" }, a: { vi: "Qua khu phố đông đúc; chú ý sang đường và tài sản.", en: "Through busy streets; mind crossings and belongings.", zh: "穿越热闹街区；注意过马路与财物。", ko: "붐비는 거리로 횡단과 소지품에 유의하세요." } },
      { q: { vi: "Nên đi lúc nào?", en: "When to walk?", zh: "何时走？", ko: "언제 걷나요?" }, a: { vi: "Sáng sớm hoặc cuối chiều mát hơn; tránh giữa trưa nắng.", en: "Early morning or late afternoon is cooler; avoid midday sun.", zh: "清晨或傍晚较凉；避开正午烈日。", ko: "이른 아침이나 늦은 오후가 서늘, 정오 직사광 피하세요." } }
    ],
    rel: [
      { slug: "cho-con-hay-cho-han", tag: { vi: "So sánh", en: "Compare", zh: "比较", ko: "비교" }, title: { vi: "Chợ Cồn hay Chợ Hàn?", en: "Con Market or Hàn Market?", zh: "昆市场还是韩市场？", ko: "꼰 시장 아니면 한 시장?" }, desc: { vi: "Chọn chợ theo nhu cầu.", en: "Pick a market by need.", zh: "按需求选市场。", ko: "필요에 따라 시장 고르기." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D5 — Đến Nhà thờ =====
  {
    slug: "cho-con-den-nha-tho-da-nang",
    cat: "D",
    title: { vi: "Chợ Cồn đến Nhà thờ Chính tòa Đà Nẵng", en: "Chợ Cồn to Đà Nẵng Cathedral", zh: "昆市场前往岘港大教堂", ko: "꼰 시장에서 다낭 대성당까지" },
    desc: { vi: "Gợi ý ghép Chợ Cồn và Nhà thờ Chính tòa vào một buổi đi bộ, trung lập.", en: "Suggestions to pair Chợ Cồn with Đà Nẵng Cathedral in one walk, neutral.", zh: "将昆市场与岘港大教堂纳入同一次步行的建议，中立。", ko: "꼰 시장과 다낭 대성당을 한 도보에 묶는 제안, 중립적." },
    hero: {
      eye: { vi: "Di sản", en: "Heritage", zh: "遗产", ko: "유산" },
      h1: { vi: "Chợ Cồn → Nhà thờ", en: "Chợ Cồn → Cathedral", zh: "昆市场 → 大教堂", ko: "꼰 시장 → 대성당" },
      intro: { vi: "Nhà thờ màu hồng là điểm kiến trúc dễ nhận diện. Dưới đây là gợi ý kết hợp, không xếp hạng.", en: "The pink cathedral is an easy landmark. Pairing suggestions, not ranked.", zh: "粉色教堂是易识别的地标。结合建议，不排名。", ko: "분홍 성당은 알아보기 쉬운 랜드마크. 조합 제안, 비순위." }
    },
    sections: [
      { idx: "01", eye: { vi: "Kết hợp", en: "Pairing", zh: "结合", ko: "조합" }, title: { vi: "Sắp xếp buổi đi", en: "Plan the outing", zh: "安排出行", ko: "나들이 계획" },
        items: [
          { n: "01", t: { vi: "Thời lượng", en: "Duration", zh: "时长", ko: "소요" }, b: { vi: "Khoảng 1–2 giờ nếu ghé cả chợ và nhà thờ.", en: "About 1–2 hours if visiting both.", zh: "两处都逛约 1–2 小时。", ko: "두 곳 다 보면 약 1~2시간." } },
          { n: "02", t: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "이동" }, b: { vi: "Đi bộ ngắn hoặc taxi qua khu trung tâm.", en: "A short walk or taxi through the centre.", zh: "短步行或打车穿越市中心。", ko: "도심을 가로지르는 짧은 도보나 택시." } },
          { n: "03", t: { vi: "Lưu ý", en: "Notes", zh: "提示", ko: "참고" }, b: { vi: "Quan sát kiến trúc từ ngoài; tôn trọng khi có lễ.", en: "View architecture from outside; respect services.", zh: "从外部欣赏建筑；有仪式时请尊重。", ko: "외부에서 건축 감상, 미사 때는 예의 지키기." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có cần vé vào nhà thờ không?", en: "Is there an entry ticket?", zh: "进教堂要门票吗？", ko: "성당 입장료 있나요?" }, a: { vi: "Thường không thu vé tham quan bên ngoài; vào trong tuỳ giờ lễ.", en: "Usually no ticket for outside viewing; inside depends on services.", zh: "外部参观通常免票；入内需看弥撒时间。", ko: "보통 외부 관람은 무료, 내부는 미사 시간에 따라 다릅니다." } },
      { q: { vi: "Đi bộ từ chợ mất bao lâu?", en: "Walking time from the market?", zh: "从市场步行多久？", ko: "시장에서 도보 시간?" }, a: { vi: "Khoảng 15–25 phút tuỳ lộ trình; taxi nhanh hơn.", en: "About 15–25 minutes by route; taxi is faster.", zh: "约 15–25 分钟，视路线；打车更快。", ko: "약 15~25분, 택시가 더 빠릅니다." } },
      { q: { vi: "Có phù hợp trẻ em không?", en: "Good for children?", zh: "适合儿童吗？", ko: "아이에게 좋나요?" }, a: { vi: "Có; không gian ngoài rộng, dễ đi cùng gia đình.", en: "Yes; open outdoor space, easy with family.", zh: "适合；外部空间开阔，便于偕家。", ko: "네, 외부 공간이 넓어 가족과 쉽습니다." } },
      { q: { vi: "Chụp ảnh thế nào?", en: "How to photograph?", zh: "怎么拍照？", ko: "촬영은?" }, a: { vi: "Chụp từ xa và góc đường; xin phép nếu chụp người.", en: "Shoot from across and the street corner; ask before people.", zh: "从对面与街角拍；拍人先征得同意。", ko: "맞은편과 모퉁이에서 촬영, 인물 촬영 전 허락." } }
    ],
    rel: [
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm điểm văn hóa gần đó.", en: "Add a cultural stop nearby.", zh: "再加一处附近文化点。", ko: "근처 문화 명소 추가." } },
      { slug: "cho-con-den-cau-rong", tag: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" }, title: { vi: "Đến Cầu Rồng", en: "To Dragon Bridge", zh: "前往龙桥", ko: "용 다리로" }, desc: { vi: "Nối tiếp cảnh đêm trung tâm.", en: "Continue to central night views.", zh: "继续市中心夜景。", ko: "도심 야경 이어가기." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D6 — Đến Bảo tàng Chăm =====
  {
    slug: "cho-con-den-bao-tang-dieu-khac-cham",
    cat: "D",
    title: { vi: "Chợ Cồn đến Bảo tàng Điêu khắc Chăm", en: "Chợ Cồn to Museum of Cham Sculpture", zh: "昆市场前往占族雕塑博物馆", ko: "꼰 시장에서 참 조각 박물관까지" },
    desc: { vi: "Gợi ý kết hợp chợ và bảo tàng trong ngày, nhất là khi mưa, trung lập.", en: "Suggestions to combine market and museum in a day, especially in rain, neutral.", zh: "将市场与博物馆在一天内结合的建议，尤其适合雨天，中立。", ko: "시장과 박물관을 하루에 묶는 제안, 비 오는 날 특히 좋음, 중립적." },
    hero: {
      eye: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" },
      h1: { vi: "Chợ Cồn → Bảo tàng Chăm", en: "Chợ Cồn → Cham Museum", zh: "昆市场 → 占族博物馆", ko: "꼰 시장 → 참 박물관" },
      intro: { vi: "Bảo tàng là không gian trong nhà, hợp khi thời tiết không thuận. Gợi ý kết hợp dưới đây không xếp hạng.", en: "The museum is indoor, good when weather is poor. Pairing ideas below, not ranked.", zh: "博物馆为室内空间，天气不佳时合适。结合建议，不排名。", ko: "박물관은 실내라 날씨가 안 좋을 때 좋습니다. 조합 아이디어, 비순위." }
    },
    sections: [
      { idx: "01", eye: { vi: "Kết hợp", en: "Pairing", zh: "结合", ko: "조합" }, title: { vi: "Sắp xếp buổi đi", en: "Plan the outing", zh: "安排出行", ko: "나들이 계획" },
        items: [
          { n: "01", t: { vi: "Thời lượng", en: "Duration", zh: "时长", ko: "소요" }, b: { vi: "Bảo tàng thường mất 1–1,5 giờ; cộng thời gian chợ.", en: "The museum usually takes 1–1.5 hours; plus market time.", zh: "博物馆通常 1–1.5 小时；再加市场时间。", ko: "박물관은 보통 1~1.5시간, 시장 시간 더하기." } },
          { n: "02", t: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "이동" }, b: { vi: "Đi bộ ngắn hoặc taxi qua trung tâm.", en: "A short walk or taxi through the centre.", zh: "短步行或打车穿越市中心。", ko: "도심 가로지르는 짧은 도보나 택시." } },
          { n: "03", t: { vi: "Vé & giờ", en: "Tickets & hours", zh: "票与开放", ko: "표·시간" }, b: { vi: "Kiểm tra vé và giờ mở cửa trước khi đi vì có thể thay đổi.", en: "Check tickets and opening hours before going, as they may change.", zh: "出行前查票价与开放时间，可能变动。", ko: "변동 가능하니 가기 전 표와 개장 시간을 확인하세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có phù hợp ngày mưa không?", en: "Good on a rainy day?", zh: "适合雨天吗？", ko: "우천일에 좋나요?" }, a: { vi: "Có; không gian trong nhà, dễ kết hợp với chợ.", en: "Yes; indoor space, easy to pair with the market.", zh: "适合；室内空间，易与市场结合。", ko: "네, 실내라 시장과 묶기 좋습니다." } },
      { q: { vi: "Có hướng dẫn tiếng Anh không?", en: "English guides available?", zh: "有英文导览吗？", ko: "영어 안내 있나요?" }, a: { vi: "Thường có bảng thông tin; xác nhận tại quầy vé khi đến.", en: "Info panels are common; confirm at the ticket desk.", zh: "通常有说明牌；到票务处确认。", ko: "안내판이 보통 있으며 매표소에서 확인하세요." } },
      { q: { vi: "Cách đi từ chợ?", en: "How from the market?", zh: "从市场怎么去？", ko: "시장에서 어떻게?" }, a: { vi: "Đi bộ ngắn hoặc taxi; hỏi nhân viên nếu cần chỉ đường.", en: "Short walk or taxi; ask staff for directions if needed.", zh: "短步行或打车；需要可问工作人员。", ko: "짧은 도보나 택시, 길은 직원에게 물어보세요." } },
      { q: { vi: "Có phí chụp ảnh không?", en: "Photo fee?", zh: "拍照收费吗？", ko: "촬영 요금?" }, a: { vi: "Tuỳ quy định; xem biển hướng dẫn tại chỗ.", en: "Depends on rules; read on-site signage.", zh: "视规定；看现场指示牌。", ko: "규정에 따라 다르며 현장 안내를 보세요." } }
    ],
    rel: [
      { slug: "lich-trinh-ngay-mua-cho-con", tag: { vi: "Mưa", en: "Rainy", zh: "雨天", ko: "우천" }, title: { vi: "Lịch trình ngày mưa", en: "Rainy-day plan", zh: "雨天行程", ko: "우천 일정" }, desc: { vi: "Kết hợp chợ, cà phê và bảo tàng.", en: "Combine market, coffee and museums.", zh: "组合市场、咖啡与博物馆。", ko: "시장·커피·박물관 조합." } },
      { slug: "cho-con-den-nha-tho-da-nang", tag: { vi: "Di sản", en: "Heritage", zh: "遗产", ko: "유산" }, title: { vi: "Đến Nhà thờ Chính tòa", en: "To the Cathedral", zh: "前往大教堂", ko: "대성당으로" }, desc: { vi: "Thêm điểm kiến trúc gần đó.", en: "Add an architectural stop nearby.", zh: "再加一处附近建筑点。", ko: "근처 건축 명소 추가." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D7 — Đến Cầu Rồng =====
  {
    slug: "cho-con-den-cau-rong",
    cat: "D",
    title: { vi: "Chợ Cồn đến Cầu Rồng — Buổi tối", en: "Chợ Cồn to Dragon Bridge — evening", zh: "昆市场前往龙桥 — 夜晚", ko: "꼰 시장에서 용 다리까지 — 저녁" },
    desc: { vi: "Gợi ý nối buổi chiều chợ với cảnh đêm Cầu Rồng, trung lập.", en: "Suggestions to link a market afternoon with Dragon Bridge night views, neutral.", zh: "将市场下午与龙桥夜景衔接的建议，中立。", ko: "시장 오후와 용 다리 야경을 잇는 제안, 중립적." },
    hero: {
      eye: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" },
      h1: { vi: "Chợ Cồn → Cầu Rồng", en: "Chợ Cồn → Dragon Bridge", zh: "昆市场 → 龙桥", ko: "꼰 시장 → 용 다리" },
      intro: { vi: "Cầu Rồng là biểu tượng ven sông, đẹp về đêm. Gợi ý kết hợp dưới đây không xếp hạng.", en: "The Dragon Bridge is a riverside icon, pretty at night. Pairing ideas, not ranked.", zh: "龙桥是滨河标志，夜景动人。结合建议，不排名。", ko: "용 다리는 강변 랜드마크로 밤에 아름답습니다. 조합 아이디어, 비순위." }
    },
    sections: [
      { idx: "01", eye: { vi: "Kết hợp", en: "Pairing", zh: "结合", ko: "조합" }, title: { vi: "Sắp xếp buổi tối", en: "Plan the evening", zh: "安排夜晚", ko: "저녁 계획" },
        items: [
          { n: "01", t: { vi: "Thời điểm", en: "Timing", zh: "时点", ko: "시점" }, b: { vi: "Đi chợ ban ngày, sang cầu khi trời tối để xem đèn.", en: "Visit the market by day, cross to the bridge after dark for lights.", zh: "白天逛市场，天黑后过桥看灯。", ko: "시장은 낮에, 다리는 어두워진 후 불빛 보러." } },
          { n: "02", t: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "이동" }, b: { vi: "Taxi hoặc đi bộ dọc sông tuỳ sức.", en: "Taxi or a riverside walk by stamina.", zh: "打车或沿河步行，按体力。", ko: "택시나 강변 도보, 체력 따라." } },
          { n: "03", t: { vi: "Lưu ý", en: "Notes", zh: "提示", ko: "참고" }, b: { vi: "Kiểm tra giờ trình diễn phun lửa/nước nếu có.", en: "Check fire/water show times if held.", zh: "若有喷火/喷水表演，查时间。", ko: "불꽃·물 쇼 시간이 있으면 확인하세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Cầu Rồng có trình diễn không?", en: "Does the bridge perform?", zh: "龙桥有表演吗？", ko: "용 다리 공연 있나요?" }, a: { vi: "Đôi khi có trình diễn vào cuối tuần; xác nhận lịch trình địa phương.", en: "Sometimes on weekends; confirm the local schedule.", zh: "偶尔周末有；请确认当地安排。", ko: "가끔 주말에 있으며 현지 일정을 확인하세요." } },
      { q: { vi: "Đi bộ từ chợ được không?", en: "Walkable from the market?", zh: "从市场能步行到吗？", ko: "시장에서 걸어갈 수 있나요?" }, a: { vi: "Có thể, nhưng taxi thuận tiện hơn khi tối và mang đồ.", en: "Possible, but taxi is handier at night with bags.", zh: "可以，但晚间提物时打车更方便。", ko: "가능하나 밤에 짐 들고는 택시가 편합니다." } },
      { q: { vi: "Có an toàn ban đêm không?", en: "Safe at night?", zh: "夜晚安全吗？", ko: "밤에 안전한가요?" }, a: { vi: "Khu vực ven sông đông đúc; giữ tư trang và đi theo đám đông.", en: "The riverside is busy; keep belongings and follow the crowd.", zh: "滨河区热闹；收好财物、随人流。", ko: "강변은 붐비니 소지품 챙기고 인파를 따르세요." } },
      { q: { vi: "Có chỗ ăn tối gần cầu không?", en: "Dinner near the bridge?", zh: "桥附近有晚餐吗？", ko: "다리 근처 저녁 식사?" }, a: { vi: "Có nhiều quán ven sông; hỏi giá trước khi chọn.", en: "Many riverside eateries; ask prices before choosing.", zh: "许多滨河食肆；选前问价。", ko: "강변 식당 많으며 고르기 전 가격을 물어보세요." } }
    ],
    rel: [
      { slug: "sau-khi-cho-con-dong-cua", tag: { vi: "Sau chợ", en: "After market", zh: "闭市后", ko: "시장 후" }, title: { vi: "Sau khi chợ đóng cửa", en: "After the market closes", zh: "市场关门后", ko: "시장 문 닫은 후" }, desc: { vi: "Gợi ý buổi tối tiếp nối.", en: "Evening follow-up ideas.", zh: "夜晚衔接建议。", ko: "저녁 이어가기." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ trước khi ra cầu.", en: "A rest before heading out.", zh: "出发前的休息处。", ko: "나가기 전 쉬는 곳." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D8 — Đến Bảo tàng Đà Nẵng =====
  {
    slug: "cho-con-den-bao-tang-da-nang",
    cat: "D",
    title: { vi: "Chợ Cồn đến Bảo tàng Đà Nẵng", en: "Chợ Cồn to Đà Nẵng Museum", zh: "昆市场前往岘港博物馆", ko: "꼰 시장에서 다낭 박물관까지" },
    desc: { vi: "Gợi ý kết hợp chợ và Bảo tàng Đà Nẵng trong lộ trình thành phố, trung lập.", en: "Suggestions to pair the market with Đà Nẵng Museum in a city route, neutral.", zh: "将市场与岘港博物馆纳入城市路线的建议，中立。", ko: "시장과 다낭 박물관을 도시 경로에 묶는 제안, 중립적." },
    hero: {
      eye: { vi: "Thành phố", en: "City", zh: "城市", ko: "도시" },
      h1: { vi: "Chợ Cồn → Bảo tàng Đà Nẵng", en: "Chợ Cồn → Đà Nẵng Museum", zh: "昆市场 → 岘港博物馆", ko: "꼰 시장 → 다낭 박물관" },
      intro: { vi: "Bảo tàng giúp hiểu lịch sử địa phương. Gợi ý kết hợp dưới đây không xếp hạng.", en: "The museum helps understand local history. Pairing ideas, not ranked.", zh: "博物馆有助于了解地方史。结合建议，不排名。", ko: "박물관은 지역사를 이해에 도움. 조합 아이디어, 비순위." }
    },
    sections: [
      { idx: "01", eye: { vi: "Kết hợp", en: "Pairing", zh: "结合", ko: "조합" }, title: { vi: "Sắp xếp buổi đi", en: "Plan the outing", zh: "安排出行", ko: "나들이 계획" },
        items: [
          { n: "01", t: { vi: "Thời lượng", en: "Duration", zh: "时长", ko: "소요" }, b: { vi: "Bảo tàng thường mất 1–1,5 giờ; cộng thời gian chợ.", en: "The museum usually takes 1–1.5 hours; plus market time.", zh: "博物馆通常 1–1.5 小时；再加市场时间。", ko: "박물관은 보통 1~1.5시간, 시장 시간 더하기." } },
          { n: "02", t: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "이동" }, b: { vi: "Đi bộ ngắn hoặc taxi qua trung tâm.", en: "A short walk or taxi through the centre.", zh: "短步行或打车穿越市中心。", ko: "도심 가로지르는 짧은 도보나 택시." } },
          { n: "03", t: { vi: "Vé & giờ", en: "Tickets & hours", zh: "票与开放", ko: "표·시간" }, b: { vi: "Kiểm tra vé và giờ mở cửa trước khi đi.", en: "Check tickets and opening hours before going.", zh: "出行前查票价与开放时间。", ko: "가기 전 표와 개장 시간 확인하세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có phù hợp trẻ em không?", en: "Good for children?", zh: "适合儿童吗？", ko: "아이에게 좋나요?" }, a: { vi: "Có thể; tuy nhiên nội dung nghiêng lịch sử, tuỳ quan tâm.", en: "Possible; content leans historical, by interest.", zh: "可以；但内容偏历史，视兴趣。", ko: "가능하나 역사 위주라 관심에 따라 다릅니다." } },
      { q: { vi: "Cách đi từ chợ?", en: "How from the market?", zh: "从市场怎么去？", ko: "시장에서 어떻게?" }, a: { vi: "Đi bộ ngắn hoặc taxi; hỏi nhân viên nếu cần.", en: "Short walk or taxi; ask staff if needed.", zh: "短步行或打车；需要问工作人员。", ko: "짧은 도보나 택시, 필요하면 직원에게." } },
      { q: { vi: "Có hướng dẫn tiếng Anh không?", en: "English guides?", zh: "有英文导览吗？", ko: "영어 안내?" }, a: { vi: "Thường có bảng thông tin; xác nhận tại quầy vé.", en: "Info panels common; confirm at the desk.", zh: "通常有说明牌；票务处确认。", ko: "안내판 보통 있으며 매표소 확인." } },
      { q: { vi: "Có kết hợp được với Chăm không?", en: "Combine with the Cham Museum?", zh: "能连占族博物馆吗？", ko: "참 박물관과 같이?" }, a: { vi: "Có thể nếu thu xếp thời gian; hai bảo tàng cách nhau một đoạn.", en: "Possible with time; the two museums are some distance apart.", zh: "时间允许可以；两馆有一定距离。", ko: "시간되면 가능, 두 박물관은 거리가 있습니다." } }
    ],
    rel: [
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm điểm văn hóa gần đó.", en: "Add a cultural stop nearby.", zh: "再加一处附近文化点。", ko: "근처 문화 명소 추가." } },
      { slug: "lich-trinh-1-ngay-hai-chau", tag: { vi: "Lộ trình", en: "Itinerary", zh: "行程", ko: "일정" }, title: { vi: "Lịch trình 1 ngày Hải Châu", en: "A day in Hải Châu", zh: "海洲一日游", ko: "하이쩌우 당일" }, desc: { vi: "Ghép nhiều điểm thành phố.", en: "String several city stops.", zh: "串联多个城市点。", ko: "도시 명소 여러 곳 묶기." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== D9 — Khách sạn gần =====
  {
    slug: "khach-san-gan-cho-con",
    cat: "D",
    title: { vi: "Khách sạn gần Chợ Cồn — Chọn nơi ở", en: "Hotels near Chợ Cồn — where to stay", zh: "昆市场附近酒店 — 选住宿", ko: "꼰 시장 인근 호텔 — 숙소 고르기" },
    desc: { vi: "Góc nhìn trung lập về chọn khách sạn quanh Chợ Cồn: vị trí, đi lại và lưu ý.", en: "A neutral view on picking hotels near Chợ Cồn: location, travel and notes.", zh: "昆市场周边选酒店的中立视角：位置、交通与提示。", ko: "꼰 시장 인근 호텔 고르기 중립 시각: 위치·이동·참고." },
    hero: {
      eye: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" },
      h1: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" },
      intro: { vi: "Ở gần chợ thuận tiện đi bộ và ăn uống. Dưới đây là góc nhìn trung lập, không đề xuất cơ sở cụ thể.", en: "Staying near the market is handy for walking and food. A neutral view, no specific properties.", zh: "住近市场便于步行与用餐。中立视角，不推荐具体酒店。", ko: "시장 인근 숙박은 도보와 식사에 좋습니다. 중립 시각이며 특정 업체 추천 없음." }
    },
    sections: [
      { idx: "01", eye: { vi: "Chọn ở", en: "Choosing", zh: "选择", ko: "고르기" }, title: { vi: "Tiêu chí nên xem", en: "Criteria to consider", zh: "应考虑的标准", ko: "고려할 기준" },
        items: [
          { n: "01", t: { vi: "Vị trí", en: "Location", zh: "位置", ko: "위치" }, b: { vi: "Gần Hùng Vương hoặc Ông Ích Khiêm giúp đi bộ tới chợ.", en: "Near Hùng Vương or Ông Ích Khiêm eases walking to the market.", zh: "近雄王街或英节卿街便于步行到市场。", ko: "훙브엉이나 온 이히 껌 인근이 시장 도보에 좋습니다." } },
          { n: "02", t: { vi: "Di chuyển", en: "Transit", zh: "交通", ko: "이동" }, b: { vi: "Hỏi kỹ khoảng cách đến sân bay, ga và bến xe.", en: "Ask about distance to airport, station and bus terminals.", zh: "问清到机场、车站与汽车站的远近。", ko: "공항·역·터미널 거리를 꼭 물어보세요." } },
          { n: "03", t: { vi: "Tiện nghi", en: "Amenities", zh: "设施", ko: "편의" }, b: { vi: "So sánh giá, điểm đánh giá và quy định huỷ trước khi đặt.", en: "Compare price, review scores and cancellation before booking.", zh: "预订前比较价格、评分与取消政策。", ko: "가격·후기·취소 규정을 비교 후 예약하세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Ở gần chợ có ồn không?", en: "Is it noisy near the market?", zh: "住市场附近吵吗？", ko: "시장 인근 시끄러운가요?" }, a: { vi: "Khu vực quanh chợ ban ngày nhộn nhịp; hỏi phòng cách xa đường nếu nhạy cảm.", en: "Around the market is busy by day; ask for rooms off the road if sensitive.", zh: "市场周边白天热闹；若敏感可要远离马路的房。", ko: "시장 주변은 낮에 붐빕니다. 예민하면 도로에서 멀리 떨어진 방을 요청하세요." } },
      { q: { vi: "Giá thường thế nào?", en: "What is the usual price?", zh: "通常多少钱？", ko: "보통 가격은?" }, a: { vi: "Tuỳ hạng và mùa; so sánh vài nền tảng trước khi đặt.", en: "By class and season; compare platforms before booking.", zh: "视档次与季节；预订前比较平台。", ko: "등급과 계절에 따라 다르며 예약 전 플랫폼 비교하세요." } },
      { q: { vi: "Có nên ở trung tâm không?", en: "Stay central?", zh: "要住市中心吗？", ko: "도심에 머물러야 하나요?" }, a: { vi: "Thuận tiện đi lại; tuỳ ưu tiên yên tĩnh hay sầm uất.", en: "Handy for travel; by preference for quiet or buzz.", zh: "交通便利；按偏好安静或热闹。", ko: "이동 편리, 조용함과 활기를 선호에 따라." } },
      { q: { vi: "Có khách sạn giá rẻ gần chợ không?", en: "Budget hotels near the market?", zh: "市场附近有廉价酒店吗？", ko: "시장 인근 저렴한 호텔?" }, a: { vi: "Có nhiều hạng; so sánh đánh giá và tiện nghi trước khi chọn.", en: "Many classes exist; compare reviews and amenities first.", zh: "有多种档次；选前比较评价与设施。", ko: "등급이 다양하며 후기와 편의를 먼저 비교하세요." } }
    ],
    rel: [
      { slug: "cach-den-cho-con", tag: { vi: "Di chuyển", en: "Getting there", zh: "交通", ko: "교통" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Từ sân bay, xe buýt, taxi và đi bộ.", en: "From the airport, bus, taxi and on foot.", zh: "从机场、公交、出租车与步行。", ko: "공항·버스·택시·도보 안내." } },
      { slug: "san-bay-da-nang-den-cho-con", tag: { vi: "Từ sân bay", en: "From airport", zh: "从机场", ko: "공항에서" }, title: { vi: "Sân bay đến Chợ Cồn", en: "Airport to Chợ Cồn", zh: "机场到昆市场", ko: "공항에서 꼰 시장" }, desc: { vi: "So sánh gọi xe, hành lý và chi phí.", en: "Compare ride-hailing, luggage and cost.", zh: "比较叫车、行李与费用。", ko: "호출택시·짐·비용 비교." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== E1 — Từ sân bay =====
  {
    slug: "san-bay-da-nang-den-cho-con",
    cat: "E",
    title: { vi: "Sân bay Đà Nẵng đến Chợ Cồn — Di chuyển", en: "Đà Nẵng Airport to Chợ Cồn — transport", zh: "岘港机场到昆市场 — 交通", ko: "다낭 공항에서 꼰 시장까지 — 이동" },
    desc: { vi: "So sánh gọi xe, taxi, xe buýt và lưu ý hành lý từ sân bay đến Chợ Cồn.", en: "Compare ride-hailing, taxi, bus and luggage notes from the airport to Chợ Cồn.", zh: "比较从机场到昆市场的叫车、出租车、公交与行李提示。", ko: "공항에서 꼰 시장까지 호출택시·택시·버스 비교와 짐 참고." },
    hero: {
      eye: { vi: "Từ sân bay", en: "From airport", zh: "从机场", ko: "공항에서" },
      h1: { vi: "Sân bay → Chợ Cồn", en: "Airport → Chợ Cồn", zh: "机场 → 昆市场", ko: "공항 → 꼰 시장" },
      intro: { vi: "Sân bay cách chợ khoảng 30–40 phút tuỳ giao thông. Dưới đây là khung tham khảo, giá và thời gian tuỳ dịch vụ.", en: "The airport is about 30–40 minutes from the market by traffic. A reference frame; fares and time vary by service.", zh: "机场距市场约 30–40 分钟，视交通。以下为参考框架，费用与时间因服务而异。", ko: "공항은 교통에 따라 시장에서 약 30~40분. 참고 틀이며 요금과 시간은 서비스에 따라 다릅니다." }
    },
    sections: [
      { idx: "01", eye: { vi: "Lựa chọn", en: "Options", zh: "选择", ko: "선택" }, title: { vi: "Các cách di chuyển", en: "Ways to travel", zh: "出行方式", ko: "이동 방법" },
        items: [
          { n: "01", t: { vi: "Gọi xe", en: "Ride-hailing", zh: "叫车", ko: "호출택시" }, b: { vi: "Grab hoặc tương tự thuận tiện, giá niêm yết trên app.", en: "Grab or similar is handy with app-based pricing.", zh: "Grab 等方便，价格于应用内标明。", ko: "그랩 등이 편리하며 앱 요금 표시." } },
          { n: "02", t: { vi: "Taxi", en: "Taxi", zh: "出租车", ko: "택시" }, b: { vi: "Có tại sân bay; xác nhận giá hoặc đồng hồ trước khi đi.", en: "Available at the airport; confirm fare or meter before leaving.", zh: "机场有；出发前确认价格或打表。", ko: "공항에 있으며 출발 전 요금이나 미터 확인." } },
          { n: "03", t: { vi: "Xe buýt", en: "Bus", zh: "公交", ko: "버스" }, b: { vi: "Tiết kiệm nhưng cần chuyển tuyến; hỏi tuyến hiện hành.", en: "Cheaper but needs transfers; ask current routes.", zh: "便宜但需换乘；问现行线路。", ko: "저렴하나 환승 필요, 현재 노선을 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mất bao lâu từ sân bay?", en: "How long from the airport?", zh: "从机场要多久？", ko: "공항에서 얼마나?" }, a: { vi: "Khoảng 30–40 phút tuỳ giao thông; thời gian có thể dài hơn giờ cao điểm.", en: "About 30–40 minutes by traffic; longer at peak.", zh: "约 30–40 分钟，视交通；高峰更长。", ko: "교통에 따라 약 30~40분, 피크타임엔 더 깁니다." } },
      { q: { vi: "Giá xe từ sân bay thế nào?", en: "What is the airport fare?", zh: "机场车费多少？", ko: "공항 요금은?" }, a: { vi: "Tuỳ dịch vụ và thời điểm; nên xác nhận trước khi lên xe.", en: "By service and time; confirm before boarding.", zh: "视服务与时段；上车前确认。", ko: "서비스와 시간에 따라 다르며 탑승 전 확인." } },
      { q: { vi: "Có tiện cho hành lý lớn không?", en: "Handy for big luggage?", zh: "大件行李方便吗？", ko: "큰 짐 편한가요?" }, a: { vi: "Gọi xe và taxi thuận tiện hơn xe buýt với vali lớn.", en: "Ride-hailing and taxi suit large suitcases better than buses.", zh: "叫车与出租车比公交更适合大行李。", ko: "호출택시·택시가 버스보다 큰 캐리어에 좋습니다." } },
      { q: { vi: "Nên xuống cửa nào?", en: "Which gate to alight?", zh: "在哪侧下车？", ko: "어느 출입구에서 내리나요?" }, a: { vi: "Xác nhận cửa gần nhất với lộ trình của bạn; chợ có hai mặt tiền.", en: "Confirm the gate nearest your plan; the market has two frontages.", zh: "确认最贴近你行程的入口；市场有两面临街面。", ko: "동선에 가까운 문을 확인하세요. 시장은 두 정면이 있습니다." } }
    ],
    rel: [
      { slug: "cach-den-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Địa chỉ, bản đồ và lưu ý đến.", en: "Address, map and arrival notes.", zh: "地址、地图与抵达提示。", ko: "주소·지도·도착 참고." } },
      { slug: "ga-da-nang-den-cho-con", tag: { vi: "Từ ga", en: "From station", zh: "从车站", ko: "역에서" }, title: { vi: "Ga đến Chợ Cồn", en: "Station to Chợ Cồn", zh: "车站到昆市场", ko: "역에서 꼰 시장" }, desc: { vi: "Tùy ga và phương tiện.", en: "By station and mode.", zh: "视车站与方式。", ko: "역과 수단에 따라." } },
      { slug: "khach-san-gan-cho-con", tag: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" }, title: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" }, desc: { vi: "Chọn nơi ở theo vị trí.", en: "Choose where to stay by location.", zh: "按位置选住宿。", ko: "위치로 숙소 고르기." } }
    ]
  },
  // ===== E2 — Từ ga =====
  {
    slug: "ga-da-nang-den-cho-con",
    cat: "E",
    title: { vi: "Ga Đà Nẵng đến Chợ Cồn — Di chuyển", en: "Đà Nẵng Station to Chợ Cồn — transport", zh: "岘港火车站到昆市场 — 交通", ko: "다낭 역에서 꼰 시장까지 — 이동" },
    desc: { vi: "So sánh taxi, gọi xe và đi bộ từ ga đến Chợ Cồn, cùng lưu ý.", en: "Compare taxi, ride-hailing and walking from the station to Chợ Cồn, with notes.", zh: "比较从火车站到昆市场的出租车、叫车与步行，含提示。", ko: "역에서 꼰 시장까지 택시·호출택시·도보 비교와 참고." },
    hero: {
      eye: { vi: "Từ ga", en: "From station", zh: "从车站", ko: "역에서" },
      h1: { vi: "Ga → Chợ Cồn", en: "Station → Chợ Cồn", zh: "车站 → 昆市场", ko: "역 → 꼰 시장" },
      intro: { vi: "Ga nằm gần trung tâm, đến chợ khá thuận. Dưới đây là khung tham khảo, tuỳ giao thông.", en: "The station is near the centre, fairly handy to the market. A reference frame, by traffic.", zh: "火车站近市中心，去市场较方便。以下为参考框架，视交通。", ko: "역은 도심과 가까워 시장까지 무난합니다. 참고 틀이며 교통에 따라 다릅니다." }
    },
    sections: [
      { idx: "01", eye: { vi: "Lựa chọn", en: "Options", zh: "选择", ko: "선택" }, title: { vi: "Các cách di chuyển", en: "Ways to travel", zh: "出行方式", ko: "이동 방법" },
        items: [
          { n: "01", t: { vi: "Taxi/Gọi xe", en: "Taxi/Ride", zh: "出租/叫车", ko: "택시/호출" }, b: { vi: "Nhanh và tiện với hành lý; xác nhận giá trước.", en: "Fast and handy with luggage; confirm fare first.", zh: "快且适合行李；先确认价格。", ko: "짐 있을 때 빠르고 편리, 요금 먼저 확인." } },
          { n: "02", t: { vi: "Đi bộ", en: "Walking", zh: "步行", ko: "도보" }, b: { vi: "Có thể đi bộ nếu nhẹ hành lý và thời tiết tốt.", en: "Possible on foot with light luggage and good weather.", zh: "行李轻、天气好可步行。", ko: "짐 가볍고 날씨 좋으면 도보 가능." } },
          { n: "03", t: { vi: "Xe buýt", en: "Bus", zh: "公交", ko: "버스" }, b: { vi: "Tiết kiệm; hỏi tuyến hiện hành tại ga.", en: "Cheaper; ask current routes at the station.", zh: "便宜；在车站问现行线路。", ko: "저렴하며 역에서 현재 노선을 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Đi bộ từ ga mất bao lâu?", en: "Walking time from the station?", zh: "从车站步行多久？", ko: "역에서 도보 시간?" }, a: { vi: "Tuỳ lộ trình; thường khoảng 20–35 phút nếu đi bộ.", en: "By route; usually about 20–35 minutes on foot.", zh: "视路线；通常步行约 20–35 分钟。", ko: "길에 따라 보통 도보 20~35분." } },
      { q: { vi: "Có taxi tại ga không?", en: "Taxis at the station?", zh: "车站有出租车吗？", ko: "역에 택시 있나요?" }, a: { vi: "Có; xếp hàng tại điểm đón và xác nhận giá.", en: "Yes; queue at the rank and confirm the fare.", zh: "有；在排队点候车并确认价格。", ko: "네, 대기열에서 요금 확인하세요." } },
      { q: { vi: "Giá từ ga thế nào?", en: "What is the fare from the station?", zh: "从车站车费多少？", ko: "역 요금은?" }, a: { vi: "Quãng đường ngắn nên giá thường vừa phải; hỏi trước.", en: "The distance is short so fares are modest; ask first.", zh: "路程短，费用通常适中；先问。", ko: "거리가 짧아 요금은 적당, 먼저 물어보세요." } },
      { q: { vi: "Nên xuống cửa nào?", en: "Which gate to alight?", zh: "在哪侧下车？", ko: "어느 출입구에서 내리나요?" }, a: { vi: "Xác nhận cửa gần nhất với lộ trình; chợ có hai mặt tiền.", en: "Confirm the gate nearest your plan; the market has two frontages.", zh: "确认最贴近行程的入口；市场有两面临街面。", ko: "동선에 가까운 문을 확인, 시장은 두 정면이 있습니다." } }
    ],
    rel: [
      { slug: "cach-den-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Địa chỉ, bản đồ và lưu ý đến.", en: "Address, map and arrival notes.", zh: "地址、地图与抵达提示。", ko: "주소·지도·도착 참고." } },
      { slug: "san-bay-da-nang-den-cho-con", tag: { vi: "Từ sân bay", en: "From airport", zh: "从机场", ko: "공항에서" }, title: { vi: "Sân bay đến Chợ Cồn", en: "Airport to Chợ Cồn", zh: "机场到昆市场", ko: "공항에서 꼰 시장" }, desc: { vi: "So sánh gọi xe, hành lý và chi phí.", en: "Compare ride-hailing, luggage and cost.", zh: "比较叫车、行李与费用。", ko: "호출택시·짐·비용 비교." } },
      { slug: "khach-san-gan-cho-con", tag: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" }, title: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" }, desc: { vi: "Chọn nơi ở theo vị trí.", en: "Choose where to stay by location.", zh: "按位置选住宿。", ko: "위치로 숙소 고르기." } }
    ]
  },
  // ===== E3 — Từ Mỹ Khê =====
  {
    slug: "bien-my-khe-den-cho-con",
    cat: "E",
    title: { vi: "Biển Mỹ Khê đến Chợ Cồn — Di chuyển", en: "Mỹ Khê Beach to Chợ Cồn — transport", zh: "美溪海滩到昆市场 — 交通", ko: "미 케 해변에서 꼰 시장까지 — 이동" },
    desc: { vi: "So sánh taxi, gọi xe và xe buýt từ khu Mỹ Khê đến Chợ Cồn.", en: "Compare taxi, ride-hailing and bus from the Mỹ Khê area to Chợ Cồn.", zh: "比较从美溪海滩区到昆市场的出租车、叫车与公交。", ko: "미 케 일대에서 꼰 시장까지 택시·호출택시·버스 비교." },
    hero: {
      eye: { vi: "Từ biển", en: "From beach", zh: "从海滩", ko: "해변에서" },
      h1: { vi: "Mỹ Khê → Chợ Cồn", en: "Mỹ Khê → Chợ Cồn", zh: "美溪 → 昆市场", ko: "미 케 → 꼰 시장" },
      intro: { vi: "Khu Mỹ Khê nằm ven biển, đến chợ mất một đoạn qua trung tâm. Khung tham khảo dưới đây.", en: "Mỹ Khê is coastal; reaching the market crosses some of the centre. A reference frame below.", zh: "美溪位于海滨，到市场需穿过部分市中心。以下为参考框架。", ko: "미 케는 해변가로 시장까지 도심 일부를 지납니다. 아래 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Lựa chọn", en: "Options", zh: "选择", ko: "선택" }, title: { vi: "Các cách di chuyển", en: "Ways to travel", zh: "出行方式", ko: "이동 방법" },
        items: [
          { n: "01", t: { vi: "Gọi xe/Taxi", en: "Ride/Taxi", zh: "叫车/出租", ko: "호출/택시" }, b: { vi: "Tiện nhất từ khu resort; xác nhận giá trước.", en: "Handiest from resort areas; confirm fare first.", zh: "从度假区最方便；先确认价格。", ko: "리조트 지역에서 가장 편리, 요금 먼저 확인." } },
          { n: "02", t: { vi: "Xe buýt", en: "Bus", zh: "公交", ko: "버스" }, b: { vi: "Tiết kiệm; hỏi tuyến hiện hành dọc trục chính.", en: "Cheaper; ask current routes along the main axis.", zh: "便宜；问主干道现行线路。", ko: "저렴하며 주요 축 현재 노선을 물어보세요." } },
          { n: "03", t: { vi: "Thuê xe máy", en: "Motorbike", zh: "摩托车", ko: "오토바이" }, b: { vi: "Linh hoạt nếu quen đường; hỏi chỗ gửi xe khi đến.", en: "Flexible if you know roads; ask parking on arrival.", zh: "熟悉路况则灵活；到场问停车。", ko: "길에 익숙하면 유연, 도착해 주차 문의." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Từ Mỹ Khê mất bao lâu?", en: "How long from Mỹ Khê?", zh: "从美溪要多久？", ko: "미 케에서 얼마나?" }, a: { vi: "Khoảng 15–25 phút tuỳ giao thông.", en: "About 15–25 minutes by traffic.", zh: "约 15–25 分钟，视交通。", ko: "교통에 따라 약 15~25분." } },
      { q: { vi: "Có xe buýt thẳng không?", en: "Is there a direct bus?", zh: "有直达公交吗？", ko: "직행 버스 있나요?" }, a: { vi: "Tuỳ tuyến; có thể cần chuyển tuyến, hãy hỏi trước.", en: "By route; a transfer may be needed, so ask first.", zh: "视线路；可能需换乘，先问。", ko: "노선에 따라 환승 필요할 수 있으니 먼저 물어보세요." } },
      { q: { vi: "Giá gọi xe thế nào?", en: "What is the ride fare?", zh: "叫车多少？", ko: "호출 요금은?" }, a: { vi: "Tuỳ ứng dụng và giờ; xem trước trên app.", en: "By app and hour; check on the app first.", zh: "视应用与时段；先在应用查看。", ko: "앱과 시간에 따라 다르며 먼저 앱 확인." } },
      { q: { vi: "Nên đi lúc nào?", en: "When to go?", zh: "何时去？", ko: "언제 가나요?" }, a: { vi: "Sáng hoặc chiều mát; tránh giờ cao điểm trên trục chính.", en: "Morning or cool afternoon; avoid peak on the main axis.", zh: "清晨或凉爽下午；避开主干道高峰。", ko: "오전이나 선선한 오후, 주요 축 피크타임 피하세요." } }
    ],
    rel: [
      { slug: "cach-den-cho-con", tag: { vi: "Tổng quan", en: "Overview", zh: "总览", ko: "개요" }, title: { vi: "Đường đi Chợ Cồn", en: "How to reach Chợ Cồn", zh: "如何前往昆市场", ko: "꼰 시장 오는 법" }, desc: { vi: "Địa chỉ, bản đồ và lưu ý đến.", en: "Address, map and arrival notes.", zh: "地址、地图与抵达提示。", ko: "주소·지도·도착 참고." } },
      { slug: "san-bay-da-nang-den-cho-con", tag: { vi: "Từ sân bay", en: "From airport", zh: "从机场", ko: "공항에서" }, title: { vi: "Sân bay đến Chợ Cồn", en: "Airport to Chợ Cồn", zh: "机场到昆市场", ko: "공항에서 꼰 시장" }, desc: { vi: "So sánh gọi xe, hành lý và chi phí.", en: "Compare ride-hailing, luggage and cost.", zh: "比较叫车、行李与费用。", ko: "호출택시·짐·비용 비교." } },
      { slug: "khach-san-gan-cho-con", tag: { vi: "Lưu trú", en: "Stays", zh: "住宿", ko: "숙소" }, title: { vi: "Khách sạn gần Chợ Cồn", en: "Hotels near Chợ Cồn", zh: "昆市场附近酒店", ko: "꼰 시장 인근 호텔" }, desc: { vi: "Chọn nơi ở theo vị trí.", en: "Choose where to stay by location.", zh: "按位置选住宿。", ko: "위치로 숙소 고르기." } }
    ]
  },
  // ===== F1 — Tour ăn vặt 2 giờ =====
  {
    slug: "tour-an-vat-2-gio-cho-con",
    cat: "F",
    title: { vi: "Tour ăn vặt 2 giờ Chợ Cồn — Lộ trình", en: "2-hour snack tour at Chợ Cồn — route", zh: "昆市场2小时小吃路线 — 行程", ko: "꼰 시장 2시간 간식 투어 — 경로" },
    desc: { vi: "Lộ trình ăn vặt khoảng 2 giờ tại Chợ Cồn cho người mới và ít thời gian.", en: "A roughly 2-hour snack route at Chợ Cồn for first-timers short on time.", zh: "为初次到访、时间有限者设计的昆市场约2小时小吃路线。", ko: "시간이 부족한 초보를 위한 꼰 시장 약 2시간 간식 경로." },
    hero: {
      eye: { vi: "Lộ trình", en: "Itinerary", zh: "行程", ko: "일정" },
      h1: { vi: "Tour ăn vặt 2 giờ", en: "2-hour snack tour", zh: "2小时小吃路线", ko: "2시간 간식 투어" },
      intro: { vi: "Nếu chỉ có 2 giờ, hãy tập trung vào khu ăn uống và vài món đặc trưng. Khung dưới đây mang tính tham khảo.", en: "With only 2 hours, focus on the eating area and a few signature bites. The frame below is a reference.", zh: "若只有2小时，聚焦餐饮区与几样代表小吃。以下为参考框架。", ko: "2시간뿐이라면 식사 구역과 몇 가지 대표 간식에 집중하세요. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhịp đi", en: "Pacing", zh: "节奏", ko: "호흡" }, title: { vi: "Chia 2 giờ", en: "Split the 2 hours", zh: "分配2小时", ko: "2시간 나누기" },
        items: [
          { n: "01", t: { vi: "0–30 phút", en: "0–30 min", zh: "0–30分", ko: "0~30분" }, b: { vi: "Vào chợ, quan sát khu thực phẩm và chọn quầy đông khách.", en: "Enter, watch the food section and pick a busy stall.", zh: "进场，看生鲜区并选人气摊位。", ko: "입장해 식료품 구역을 보고 손님 많은 가게 고르기." } },
          { n: "02", t: { vi: "30–75 phút", en: "30–75 min", zh: "30–75分", ko: "30~75분" }, b: { vi: "Thử 2–3 món nhỏ, hỏi giá trước từng món.", en: "Try 2–3 small dishes; ask prices first.", zh: "试2–3样小食，每样先问价。", ko: "소품 2~3개 시식, 가격 먼저 물어보기." } },
          { n: "03", t: { vi: "75–120 phút", en: "75–120 min", zh: "75–120分", ko: "75~120분" }, b: { vi: "Nghỉ cà phê gần đó hoặc mua đồ khô làm quà.", en: "Rest at a nearby café or buy dried goods as gifts.", zh: "附近咖啡歇脚或买干货作伴手。", ko: "근처 카페에서 쉬거나 건어물 선물 구입." } }
        ] }
    ],
    faqs: [
      { q: { vi: "2 giờ có đủ không?", en: "Is 2 hours enough?", zh: "2小时够吗？", ko: "2시간 충분한가요?" }, a: { vi: "Đủ cho trải nghiệm ăn vặt nhẹ; không thể xem hết chợ.", en: "Enough for a light snack experience; not to see it all.", zh: "足够轻松小吃体验；看不完整个市场。", ko: "가벼운 간식 체험엔 충분, 시장 전체 보기는 어렵습니다." } },
      { q: { vi: "Nên bắt đầu từ đâu?", en: "Where to start?", zh: "从哪开始？", ko: "어디서 시작?" }, a: { vi: "Từ khu ăn uống trong nhà để tránh nắng nếu trưa.", en: "From the indoor eating area to avoid midday sun.", zh: "从室内餐饮区开始，避正午日晒。", ko: "한낮 볕을 피해 실내 식사 구역부터." } },
      { q: { vi: "Có nên mua mang đi không?", en: "Buy to take away?", zh: "要买带走吗？", ko: "가져갈 거 사나요?" }, a: { vi: "Có, đồ khô đóng kín tiện mang; kiểm tra hạn dùng.", en: "Yes, sealed dried goods travel well; check dates.", zh: "可，密封干货好带；查保质期。", ko: "네, 밀봉 건어물은 휴대 좋음, 유통기한 확인." } },
      { q: { vi: "Có hợp trẻ em không?", en: "Good for kids?", zh: "适合儿童吗？", ko: "아이에게 좋나요?" }, a: { vi: "Có; chọn món nhẹ và tránh giờ cao điểm.", en: "Yes; pick light dishes and avoid peak hours.", zh: "适合；选清淡小食并避高峰。", ko: "네, 담백한 간식을 골라 피크타임을 피하세요." } }
    ],
    rel: [
      { slug: "an-gi-o-cho-con", tag: { vi: "Món ăn", en: "Food", zh: "美食", ko: "음식" }, title: { vi: "Ăn gì ở Chợ Cồn", en: "What to eat at Chợ Cồn", zh: "昆市场吃什么", ko: "꼰 시장 무엇을 먹을까" }, desc: { vi: "Các loại hình ẩm thực theo gian hàng.", en: "Food types by stall.", zh: "按摊位类型介绍美食。", ko: "가게 유형별 음식." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== F2 — Nửa ngày Chợ Cồn – Chợ Hàn =====
  {
    slug: "lich-trinh-nua-ngay-cho-con-cho-han",
    cat: "F",
    title: { vi: "Lịch trình nửa ngày Chợ Cồn – Chợ Hàn", en: "Half-day Chợ Cồn – Hàn Market plan", zh: "昆市场–韩市场半日行程", ko: "꼰 시장–한 시장 반나절 일정" },
    desc: { vi: "Lộ trình nửa ngày kết hợp Chợ Cồn (ăn uống) và Chợ Hàn (mua sắm).", en: "A half-day plan combining Chợ Cồn (food) and Hàn Market (shopping).", zh: "结合昆市场（吃）与韩市场（买）的半日行程。", ko: "꼰 시장(식사)과 한 시장(쇼핑)을 묶은 반나절 일정." },
    hero: {
      eye: { vi: "Lộ trình", en: "Itinerary", zh: "行程", ko: "일정" },
      h1: { vi: "Nửa ngày Chợ Cồn – Chợ Hàn", en: "Half-day Con – Hàn", zh: "半日昆市场–韩市场", ko: "반나절 꼰–한 시장" },
      intro: { vi: "Buổi sáng ăn uống tại Chợ Cồn, trưa mua sắm tại Chợ Hàn. Khung dưới đây mang tính tham khảo.", en: "Morning food at Con, midday shopping at Hàn. The frame below is a reference.", zh: "上午在昆市场吃，中午在韩市场买。以下为参考框架。", ko: "오전엔 꼰에서 식사, 정오엔 한에서 쇼핑. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhịp đi", en: "Pacing", zh: "节奏", ko: "호흡" }, title: { vi: "Chia nửa ngày", en: "Split the half-day", zh: "分配半日", ko: "반나절 나누기" },
        items: [
          { n: "01", t: { vi: "Sáng", en: "Morning", zh: "上午", ko: "오전" }, b: { vi: "Chợ Cồn: ăn sáng nhẹ, xem khu thực phẩm (khoảng 1,5–2 giờ).", en: "Con Market: light breakfast, food section (about 1.5–2 hours).", zh: "昆市场：轻早餐、看生鲜区（约1.5–2小时）。", ko: "꼰 시장: 가벼운 아침, 식료품 구역(약 1.5~2시간)." } },
          { n: "02", t: { vi: "Trưa", en: "Midday", zh: "中午", ko: "정오" }, b: { vi: "Di chuyển sang Chợ Hàn; nghỉ trưa và bắt đầu mua sắm.", en: "Move to Hàn Market; lunch break then start shopping.", zh: "转往韩市场；午休后开始购物。", ko: "한 시장으로 이동, 점심 후 쇼핑 시작." } },
          { n: "03", t: { vi: "Chiều", en: "Afternoon", zh: "下午", ko: "오후" }, b: { vi: "Chợ Hàn: quà, vải, đồ khô; về trước khi đông.", en: "Hàn: gifts, fabric, dried goods; leave before it gets busy.", zh: "韩市场：伴手、布料、干货；趁拥挤前离开。", ko: "한 시장: 선물·직물·건어물, 붐비기 전 귀가." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Có đi bộ được cả hai không?", en: "Can I walk both?", zh: "能步行逛两个吗？", ko: "둘 다 도보 가능?" }, a: { vi: "Có; xem lộ trình đi bộ nối hai chợ nếu thích.", en: "Yes; see the walking route linking both if you like.", zh: "可以；想走可参考连接两市的步行路线。", ko: "네, 원하면 두 시장 잇는 도보 경로를 보세요." } },
      { q: { vi: "Nửa ngày có kịp không?", en: "Is half a day enough?", zh: "半日够吗？", ko: "반나절 충분?" }, a: { vi: "Đủ cho trải nghiệm tổng quan; không sâu từng quầy.", en: "Enough for an overview; not deep per stall.", zh: "够总体体验；不能深入每个摊位。", ko: "전반적 체험엔 충분, 가게별 깊이는 어렵습니다." } },
      { q: { vi: "Nên bắt đầu chợ nào?", en: "Which market first?", zh: "先去哪个市场？", ko: "먼저 어디?" }, a: { vi: "Chợ Cồn buổi sáng (ăn), Chợ Hàn trưa (mua).", en: "Con in the morning (eat), Hàn at midday (shop).", zh: "上午昆市场（吃），中午韩市场（买）。", ko: "오전 꼰(식사), 정오 한(쇼핑)." } },
      { q: { vi: "Có phù hợp gia đình không?", en: "Family-friendly?", zh: "适合家庭吗？", ko: "가족에게 좋나요?" }, a: { vi: "Có; chia nhỏ, nghỉ cà phê giữa chặng.", en: "Yes; break it up with a coffee between stops.", zh: "适合；站点间用咖啡歇脚。", ko: "네, 구간 사이 카페로 쉬세요." } }
    ],
    rel: [
      { slug: "cho-con-hay-cho-han", tag: { vi: "So sánh", en: "Compare", zh: "比较", ko: "비교" }, title: { vi: "Chợ Cồn hay Chợ Hàn?", en: "Con Market or Hàn Market?", zh: "昆市场还是韩市场？", ko: "꼰 시장 아니면 한 시장?" }, desc: { vi: "Chọn chợ theo nhu cầu.", en: "Pick a market by need.", zh: "按需求选市场。", ko: "필요에 따라 시장 고르기." } },
      { slug: "di-bo-cho-con-den-cho-han", tag: { vi: "Đi bộ", en: "Walking", zh: "步行", ko: "도보" }, title: { vi: "Đi bộ hai chợ", en: "Walking both markets", zh: "两市场步行", ko: "두 시장 도보" }, desc: { vi: "Lộ trình nối Chợ Cồn và Chợ Hàn.", en: "Route linking Con and Hàn markets.", zh: "连接昆市场与韩市场的路线。", ko: "꼰과 한 시장 잇는 경로." } },
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản và lưu ý.", en: "Speciality suggestions and notes.", zh: "特产建议与提示。", ko: "특산품 제안과 참고." } }
    ]
  },
  // ===== F3 — 1 ngày Hải Châu =====
  {
    slug: "lich-trinh-1-ngay-hai-chau",
    cat: "F",
    title: { vi: "Lịch trình 1 ngày Hải Châu — Từ Chợ Cồn", en: "A day in Hải Châu — from Chợ Cồn", zh: "海洲一日游 — 从昆市场出发", ko: "하이쩌우 당일 — 꼰 시장에서" },
    desc: { vi: "Lộ trình một ngày quanh trung tâm Hải Châu, bắt đầu từ Chợ Cồn và các điểm di sản.", en: "A day around central Hải Châu, starting at Chợ Cồn and heritage stops.", zh: "环绕海洲市中心的一日游，从昆市场出发并串联遗产点。", ko: "꼰 시장에서 시작해 유산 명소를 잇는 하이쩌우 도심 당일." },
    hero: {
      eye: { vi: "Lộ trình", en: "Itinerary", zh: "行程", ko: "일정" },
      h1: { vi: "1 ngày Hải Châu", en: "A day in Hải Châu", zh: "海洲一日游", ko: "하이쩌우 당일" },
      intro: { vi: "Kết hợp chợ, nhà thờ, bảo tàng và cầu trong một ngày. Khung dưới đây mang tính tham khảo.", en: "Combine market, cathedral, museums and bridge in a day. The frame below is a reference.", zh: "一日串联市场、教堂、博物馆与桥。以下为参考框架。", ko: "시장·성당·박물관·다리를 하루에 묶기. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhịp đi", en: "Pacing", zh: "节奏", ko: "호흡" }, title: { vi: "Chia một ngày", en: "Split the day", zh: "分配一日", ko: "하루 나누기" },
        items: [
          { n: "01", t: { vi: "Sáng", en: "Morning", zh: "上午", ko: "오전" }, b: { vi: "Chợ Cồn ăn sáng và tham quan nhẹ (2 giờ).", en: "Con Market breakfast and light browse (2 hours).", zh: "昆市场早餐与轻逛（2小时）。", ko: "꼰 시장 아침 식사와 가볍게(2시간)." } },
          { n: "02", t: { vi: "Trưa", en: "Midday", zh: "中午", ko: "정오" }, b: { vi: "Nhà thờ Chính tòa và quán ăn gần đó (1,5 giờ).", en: "Cathedral and a nearby eatery (1.5 hours).", zh: "大教堂与附近食肆（1.5小时）。", ko: "대성당과 근처 식당(1.5시간)." } },
          { n: "03", t: { vi: "Chiều & tối", en: "Afternoon & evening", zh: "下午晚上", ko: "오후·저녁" }, b: { vi: "Bảo tàng và Cầu Rồng lúc đêm (2–3 giờ).", en: "Museum and Dragon Bridge at night (2–3 hours).", zh: "博物馆与夜游龙桥（2–3小时）。", ko: "박물관과 밤의 용 다리(2~3시간)." } }
        ] }
    ],
    faqs: [
      { q: { vi: "1 ngày có kịp không?", en: "Is one day enough?", zh: "一天够吗？", ko: "하루 충분?" }, a: { vi: "Đủ cho các điểm chính; nên thu gọn nếu mang theo trẻ.", en: "Enough for main stops; trim if with kids.", zh: "够主要点；带儿童宜精简。", ko: "주요 명소엔 충분, 아이 동반 시 축소하세요." } },
      { q: { vi: "Di chuyển thế nào?", en: "How to get around?", zh: "怎么转场？", ko: "이동은?" }, a: { vi: "Đi bộ ngắn và taxi tuỳ quãng; giữa các điểm khá gần.", en: "Short walks and taxi by distance; points are fairly close.", zh: "短步行与按距离打车；各点较近。", ko: "짧은 도보와 거리 따라 택시, 명소 간 거리 가까움." } },
      { q: { vi: "Nên mang gì?", en: "What to bring?", zh: "带什么？", ko: "뭘 챙기나요?" }, a: { vi: "Nước, nón, tiền mặt nhỏ và áo mưa tuỳ mùa.", en: "Water, hat, small cash and a raincoat by season.", zh: "水、帽、小额现金与按季雨具。", ko: "물·모자·소액 현금·계절별 비옷." } },
      { q: { vi: "Có phù hợp người lớn tuổi không?", en: "Good for seniors?", zh: "适合长者吗？", ko: "어르신에게 좋나요?" }, a: { vi: "Có; chọn lộ trình chậm, nghỉ nhiều và tránh nắng.", en: "Yes; a slow route with frequent rests and shade.", zh: "适合；慢节奏、多歇、避日晒。", ko: "네, 느린 동선에 자주 쉬고 그늘 이용." } }
    ],
    rel: [
      { slug: "cho-con-den-nha-tho-da-nang", tag: { vi: "Di sản", en: "Heritage", zh: "遗产", ko: "유산" }, title: { vi: "Đến Nhà thờ Chính tòa", en: "To the Cathedral", zh: "前往大教堂", ko: "대성당으로" }, desc: { vi: "Thêm điểm kiến trúc gần đó.", en: "Add an architectural stop nearby.", zh: "再加一处附近建筑点。", ko: "근처 건축 명소 추가." } },
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm điểm văn hóa gần đó.", en: "Add a cultural stop nearby.", zh: "再加一处附近文化点。", ko: "근처 문화 명소 추가." } },
      { slug: "cho-con-den-cau-rong", tag: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" }, title: { vi: "Đến Cầu Rồng", en: "To Dragon Bridge", zh: "前往龙桥", ko: "용 다리로" }, desc: { vi: "Nối tiếp cảnh đêm trung tâm.", en: "Continue to central night views.", zh: "继续市中心夜景。", ko: "도심 야경 이어가기." } }
    ]
  },
  // ===== F4 — Ngày mưa =====
  {
    slug: "lich-trinh-ngay-mua-cho-con",
    cat: "F",
    title: { vi: "Lịch trình ngày mưa Chợ Cồn — Trong nhà", en: "Rainy-day Chợ Cồn plan — indoor", zh: "昆市场雨天行程 — 室内", ko: "꼰 시장 우천 일정 — 실내" },
    desc: { vi: "Lộ trình ngày mưa: chợ trong nhà, cà phê và bảo tàng gần đó.", en: "A rainy-day plan: indoor market, coffee and nearby museums.", zh: "雨天行程：室内市场、咖啡与附近博物馆。", ko: "우천 일정: 실내 시장·커피·근처 박물관." },
    hero: {
      eye: { vi: "Lộ trình", en: "Itinerary", zh: "行程", ko: "일정" },
      h1: { vi: "Ngày mưa ở Chợ Cồn", en: "Rainy day at Chợ Cồn", zh: "昆市场雨天", ko: "꼰 시장 우천일" },
      intro: { vi: "Mưa không ngăn được chuyến đi nếu ưu tiên không gian trong nhà. Khung dưới đây mang tính tham khảo.", en: "Rain need not stop you if you favour indoor spaces. The frame below is a reference.", zh: "若优先室内空间，雨天也不碍行程。以下为参考框架。", ko: "실내 위주면 비도 걱정 없습니다. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhịp đi", en: "Pacing", zh: "节奏", ko: "호흡" }, title: { vi: "Chia ngày mưa", en: "Split the rainy day", zh: "安排雨天", ko: "우천일 나누기" },
        items: [
          { n: "01", t: { vi: "Sáng", en: "Morning", zh: "上午", ko: "오전" }, b: { vi: "Chợ Cồn khu trong nhà ăn sáng ấm.", en: "Con Market indoor area for a warm breakfast.", zh: "昆市场室内区用暖早餐。", ko: "꼰 시장 실내에서 따뜻한 아침." } },
          { n: "02", t: { vi: "Trưa", en: "Midday", zh: "中午", ko: "정오" }, b: { vi: "Cà phê gần đó chờ mưa nhỏ bớt.", en: "Nearby café while the rain eases.", zh: "附近咖啡等雨势减弱。", ko: "근처 카페에서 비가 잦아들길 기다리기." } },
          { n: "03", t: { vi: "Chiều", en: "Afternoon", zh: "下午", ko: "오후" }, b: { vi: "Bảo tàng Chăm hoặc Bảo tàng Đà Nẵng trong nhà.", en: "Indoor Cham or Đà Nẵng Museum.", zh: "室内占族或岘港博物馆。", ko: "실내 참 또는 다낭 박물관." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mưa có đóng chợ không?", en: "Does rain close the market?", zh: "下雨会闭市吗？", ko: "비 오면 시장 문닫나요?" }, a: { vi: "Khu trong nhà vẫn hoạt động; khu ngoài trời có thể ít quầy hơn.", en: "Indoor sections still run; outdoor may have fewer stalls.", zh: "室内区仍营业；室外摊位可能较少。", ko: "실내는 영업, 야외는 가게가 적을 수 있습니다." } },
      { q: { vi: "Có bảo tàng nào gần không?", en: "Any museums nearby?", zh: "附近有博物馆吗？", ko: "근처 박물관 있나요?" }, a: { vi: "Bảo tàng Chăm và Bảo tàng Đà Nẵng đều trong nhà, cách chợ một đoạn.", en: "Cham and Đà Nẵng museums are indoor, a stretch from the market.", zh: "占族与岘港博物馆皆室内，距市场一段路。", ko: "참·다낭 박물관은 실내며 시장에서 약간 거리." } },
      { q: { vi: "Di chuyển ngày mưa thế nào?", en: "Getting around in rain?", zh: "雨天怎么转场？", ko: "비 오는 날 이동?" }, a: { vi: "Ưu tiên taxi/Grab để không ướt; mang áo mưa.", en: "Prefer taxi/Grab to stay dry; carry a raincoat.", zh: "优先打车/Grab 免淋湿；带雨具。", ko: "택시·그랩으로 젖지 않게, 비옷 지니세요." } },
      { q: { vi: "Có phù hợp gia đình không?", en: "Family-friendly?", zh: "适合家庭吗？", ko: "가족에게 좋나요?" }, a: { vi: "Có; bảo tàng và quán cà phê là điểm nghỉ tốt.", en: "Yes; museums and cafés make good rest stops.", zh: "适合；博物馆与咖啡是好的歇脚点。", ko: "네, 박물관과 카페는 좋은 휴식처." } }
    ],
    rel: [
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm điểm văn hóa trong nhà.", en: "Add an indoor cultural stop.", zh: "再加一处室内文化点。", ko: "실내 문화 명소 추가." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } },
      { slug: "gio-mo-cua-cho-con", tag: { vi: "Giờ", en: "Hours", zh: "时间", ko: "시간" }, title: { vi: "Giờ mở cửa Chợ Cồn", en: "Chợ Cồn opening hours", zh: "昆市场营业时间", ko: "꼰 시장 영업 시간" }, desc: { vi: "Khung giờ thường thấy và thời điểm nên đi.", en: "Commonly listed hours and best time to visit.", zh: "通常时段与最佳到访时间。", ko: "일반 시간과 방문 적기." } }
    ]
  },
  // ===== F5 — Cùng trẻ em =====
  {
    slug: "cho-con-cung-tre-em",
    cat: "F",
    title: { vi: "Chợ Cồn cùng trẻ em — Gợi ý", en: "Chợ Cồn with children — tips", zh: "带儿童逛昆市场 — 建议", ko: "아이와 꼰 시장 — 팁" },
    desc: { vi: "Gợi ý đi chợ cùng gia đình: an toàn, nghỉ, ăn và lưu ý trẻ nhỏ.", en: "Tips for the market with family: safety, rests, food and child notes.", zh: "带家庭逛市场的建议：安全、休息、饮食与儿童提示。", ko: "가족과 시장 팁: 안전·휴식·식사·아이 참고." },
    hero: {
      eye: { vi: "Gia đình", en: "Family", zh: "家庭", ko: "가족" },
      h1: { vi: "Chợ Cồn cùng trẻ em", en: "Chợ Cồn with children", zh: "带儿童逛昆市场", ko: "아이와 꼰 시장" },
      intro: { vi: "Chợ đông và nhiều mùi, âm thanh. Vài lưu ý giúp chuyến đi dễ chịu hơn với trẻ.", en: "The market is busy with many smells and sounds. A few notes make it easier with kids.", zh: "市场拥挤、气味与声响多。几点提示让带娃更轻松。", ko: "시장은 붐비고 냄새·소리가 많습니다. 몇 가지로 아이와 편히 다니세요." }
    },
    sections: [
      { idx: "01", eye: { vi: "Lưu ý", en: "Notes", zh: "提示", ko: "참고" }, title: { vi: "Đi sao cho nhẹ", en: "Keeping it easy", zh: "如何轻松逛", ko: "편하게 가기" },
        items: [
          { n: "01", t: { vi: "Giữ gần", en: "Stay close", zh: "看紧", ko: "가까이" }, b: { vi: "Giữ trẻ nhỏ sát mình; chợ đông dễ lạc.", en: "Keep little ones close; crowds mean easy separation.", zh: "看紧幼儿；人多易走散。", ko: "아이를 가까이, 붐비면 헤어지기 쉽습니다." } },
          { n: "02", t: { vi: "Nghỉ đều", en: "Rest often", zh: "常休息", ko: "자주 쉬기" }, b: { vi: "Chia nhỏ, ghé cà phê hoặc ghế nghỉ giữa chặng.", en: "Break it up; use cafés or seats between stops.", zh: "分段逛，站点间进咖啡或坐歇。", ko: "나눠서 가고 카페나 좌석에서 쉬세요." } },
          { n: "03", t: { vi: "Ăn an toàn", en: "Safe eating", zh: "安全饮食", ko: "안전 식사" }, b: { vi: "Chọn quầy đông, hỏi kỹ thành phần nếu dị ứng.", en: "Pick busy stalls; ask ingredients if allergic.", zh: "选人气摊，过敏细问成分。", ko: "손님 많은 가게 고르고 알레르기면 성분 물어보세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Chợ có thích hợp cho trẻ không?", en: "Is the market good for kids?", zh: "市场适合孩子吗？", ko: "시장이 아이에게 좋나요?" }, a: { vi: "Có nếu đi chậm, nghỉ và giữ trẻ gần; tránh giờ cao điểm.", en: "Yes if slow, rested and close; avoid peaks.", zh: "若慢逛、多休息、看紧则适合；避高峰。", ko: "느리게·자주 쉬고 가까이 둔다면 좋음, 피크타임 피하세요." } },
      { q: { vi: "Có chỗ thay đồ trẻ không?", en: "Baby-changing spots?", zh: "有换尿布处吗？", ko: "기저귀 갈 곳?" }, a: { vi: "Không có thông tin khu riêng; hãy hỏi quầy hoặc quán gần.", en: "No dedicated area listed; ask a stall or nearby café.", zh: "未列专用区；问摊位或附近店。", ko: "전용 공간 정보 없으며 가게나 근처 카페에 문의." } },
      { q: { vi: "Món nào trẻ dễ ăn?", en: "What suits children?", zh: "孩子吃什么好？", ko: "아이 입맛엔?" }, a: { vi: "Bún, chè hoặc bánh nhẹ thường dễ thử; hỏi ít đường, ít ớt.", en: "Bún, chè or light cakes are easy; ask less sugar, less chilli.", zh: "米线、甜品或清淡糕点较易试；要少糖少辣。", ko: "쌀국수·단팥·담백한 떡이 좋으며 당분·고추 줄이세요." } },
      { q: { vi: "Nên đi lúc nào?", en: "When to go?", zh: "何时去？", ko: "언제 가나요?" }, a: { vi: "Sáng sớm mát và đỡ đông hơn.", en: "Early morning is cooler and less busy.", zh: "清晨较凉也较不挤。", ko: "이른 아침이 서늘하고 덜 붐빕니다." } }
    ],
    rel: [
      { slug: "an-chay-va-di-ung-cho-con", tag: { vi: "Ăn kiêng", en: "Diet", zh: "饮食", ko: "식이" }, title: { vi: "Ăn chay & dị ứng", en: "Vegetarian & allergy", zh: "素食与过敏", ko: "채식과 알레르기" }, desc: { vi: "Cách hỏi món và nhận biết thành phần.", en: "How to ask and identify ingredients.", zh: "如何询问菜品与识别成分。", ko: "요리 묻기와 성분 파악법." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } },
      { slug: "gio-nao-nen-di-cho-con", tag: { vi: "Thời điểm", en: "Timing", zh: "时机", ko: "시기" }, title: { vi: "Giờ nào nên đi", en: "Best time to visit", zh: "最佳到访时间", ko: "방문 적기" }, desc: { vi: "So sánh nhịp chợ theo buổi.", en: "Compare the market rhythm by time.", zh: "按时段比较市场节奏。", ko: "시간대별 시장 리듬 비교." } }
    ]
  },
  // ===== F6 — Sau khi chợ đóng cửa =====
  {
    slug: "sau-khi-cho-con-dong-cua",
    cat: "F",
    title: { vi: "Sau khi Chợ Cồn đóng cửa — Buổi tối", en: "After Chợ Cồn closes — evening", zh: "昆市场关门后 — 夜晚", ko: "꼰 시장 문 닫은 후 — 저녁" },
    desc: { vi: "Gợi ý buổi tối tiếp nối sau khi chợ đóng: ăn tối, cà phê và cảnh đêm.", en: "Evening ideas after the market closes: dinner, coffee and night views.", zh: "市场关门后的夜晚建议：晚餐、咖啡与夜景。", ko: "시장 문 닫은 후 저녁 아이디어: 저녁 식사·커피·야경." },
    hero: {
      eye: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" },
      h1: { vi: "Sau khi chợ đóng cửa", en: "After the market closes", zh: "市场关门后", ko: "시장 문 닫은 후" },
      intro: { vi: "Khi các quầy thu gọn, trung tâm vẫn có nhiều lựa chọn buổi tối. Khung dưới đây mang tính tham khảo.", en: "As stalls pack up, the centre still offers evening options. The frame below is a reference.", zh: "摊位收摊后，市中心仍有许多夜晚选择。以下为参考框架。", ko: "가게가 정리되어도 도심은 저녁 선택이 많습니다. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Gợi ý", en: "Ideas", zh: "建议", ko: "제안" }, title: { vi: "Buổi tối tiếp nối", en: "Evening follow-up", zh: "夜晚衔接", ko: "저녁 이어가기" },
        items: [
          { n: "01", t: { vi: "Ăn tối", en: "Dinner", zh: "晚餐", ko: "저녁 식사" }, b: { vi: "Quán xung quanh Hải Châu mở đến tối; hỏi giờ trước.", en: "Eateries around Hải Châu run into the evening; ask hours first.", zh: "海洲郡周边食肆营业至晚间；先问时间。", ko: "하이쩌우 주변 식당은 저녁까지, 시간 먼저 물어보세요." } },
          { n: "02", t: { vi: "Cà phê đêm", en: "Night café", zh: "夜咖啡", ko: "밤 카페" }, b: { vi: "Nhiều quán cà phê còn mở; chọn chỗ có máy lạnh.", en: "Many cafés stay open; pick air-conditioned spots.", zh: "许多咖啡馆仍开；选有空调者。", ko: "많은 카페 영업 중, 에어컨 있는 곳 고르세요." } },
          { n: "03", t: { vi: "Cảnh đêm", en: "Night views", zh: "夜景", ko: "야경" }, b: { vi: "Cầu Rồng và bờ sông sáng đèn về tối.", en: "Dragon Bridge and riverside light up at night.", zh: "龙桥与滨河夜灯亮起。", ko: "용 다리와 강변은 밤에 불빛이 켜집니다." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mấy giờ chợ thu gọn?", en: "When do stalls pack up?", zh: "几点收摊？", ko: "몇 시에 정리하나요?" }, a: { vi: "Tuỳ quầy; nhiều quầy nhẹ nhàng giảm sau 18:00.", en: "By stall; many wind down after 18:00.", zh: "视摊位；许多18:00后渐收。", ko: "가게마다, 많은 곳이 18:00 이후 정리합니다." } },
      { q: { vi: "Có ăn tối gần chợ không?", en: "Dinner near the market?", zh: "市场附近有晚餐吗？", ko: "시장 근처 저녁 식사?" }, a: { vi: "Có nhiều quán quanh Hải Châu; hỏi giờ và giá trước.", en: "Many eateries around Hải Châu; ask hours and price first.", zh: "海洲郡周边许多食肆；先问时间与价。", ko: "하이쩌우 주변 많으며 시간과 가격 먼저." } },
      { q: { vi: "Có an toàn buổi tối không?", en: "Safe in the evening?", zh: "夜晚安全吗？", ko: "저녁 안전한가요?" }, a: { vi: "Khu trung tâm đông đúc; giữ tư trang và đi theo đám đông.", en: "The centre is busy; keep belongings and follow the crowd.", zh: "市中心热闹；收好财物、随人流。", ko: "도심은 붐비니 소지품 챙기고 인파 따르세요." } },
      { q: { vi: "Có nên đi Cầu Rồng không?", en: "Visit Dragon Bridge?", zh: "要去龙桥吗？", ko: "용 다리 가나요?" }, a: { vi: "Có; đặc biệt cuối tuần nếu có trình diễn, hãy xác nhận lịch.", en: "Yes; especially weekends if shows are held—confirm the schedule.", zh: "可；周末若有表演更值，请确认时间。", ko: "네, 주말 공연 있으면 더 좋음, 일정 확인하세요." } }
    ],
    rel: [
      { slug: "cho-con-den-cau-rong", tag: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" }, title: { vi: "Đến Cầu Rồng", en: "To Dragon Bridge", zh: "前往龙桥", ko: "용 다리로" }, desc: { vi: "Nối tiếp cảnh đêm trung tâm.", en: "Continue to central night views.", zh: "继续市中心夜景。", ko: "도심 야경 이어가기." } },
      { slug: "quan-an-gan-cho-con", tag: { vi: "Ăn uống", en: "Food", zh: "餐饮", ko: "식사" }, title: { vi: "Quán ăn gần Chợ Cồn", en: "Restaurants near Chợ Cồn", zh: "昆市场附近餐厅", ko: "꼰 시장 인근 식당" }, desc: { vi: "Góc ẩm thực quanh chợ.", en: "Dining around the market.", zh: "市场周边餐饮。", ko: "시장 주변 식당." } },
      { slug: "ca-phe-gan-cho-con", tag: { vi: "Nghỉ", en: "Break", zh: "休息", ko: "휴식" }, title: { vi: "Cà phê gần Chợ Cồn", en: "Coffee near Chợ Cồn", zh: "昆市场附近咖啡", ko: "꼰 시장 인근 커피" }, desc: { vi: "Nơi nghỉ giữa buổi.", en: "A break during your visit.", zh: "游览中途的休息处。", ko: "관람 중 쉬는 곳." } }
    ]
  },
  // ===== F7 — Trước giờ bay =====
  {
    slug: "cho-con-truoc-gio-bay",
    cat: "F",
    title: { vi: "Chợ Cồn trước giờ bay — Nửa ngày cuối", en: "Chợ Cồn before your flight — last half-day", zh: "离港前半日逛昆市场 — 最后半天", ko: "비행 전 꼰 시장 — 마지막 반나절" },
    desc: { vi: "Gợi ý dùng nửa ngày cuối trước giờ bay: ăn nhẹ, mua quà và canh giờ ra sân bay.", en: "Ideas for the last half-day before flying: light food, gifts and airport timing.", zh: "离港前最后半天的建议：轻食、买礼与把握去机场时间。", ko: "비행 전 마지막 반나절: 가벼운 식사·선물·공항 시간." },
    hero: {
      eye: { vi: "Trước bay", en: "Before flight", zh: "离港前", ko: "비행 전" },
      h1: { vi: "Chợ Cồn trước giờ bay", en: "Chợ Cồn before your flight", zh: "离港前半日昆市场", ko: "비행 전 꼰 시장" },
      intro: { vi: "Nếu còn nửa ngày trước giờ bay, hãy mua quà đóng kín và canh giờ ra sân bay. Khung dưới đây mang tính tham khảo.", en: "With a half-day left, buy sealed gifts and watch airport timing. The frame below is a reference.", zh: "若离港前剩半天，买密封伴手并把握去机场时间。以下为参考框架。", ko: "반나절 남았다면 밀봉 선물 사고 공항 시간 챙기기. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Gợi ý", en: "Ideas", zh: "建议", ko: "제안" }, title: { vi: "Nửa ngày cuối", en: "Last half-day", zh: "最后半天", ko: "마지막 반나절" },
        items: [
          { n: "01", t: { vi: "Mua quà", en: "Buy gifts", zh: "买礼", ko: "선물" }, b: { vi: "Đồ khô, cà phê, hạt điều đóng kín dễ mang máy bay.", en: "Sealed dried goods, coffee, cashews travel well.", zh: "密封干货、咖啡、腰果好带上机。", ko: "밀봉 건어물·커피·캐슈너트는 기내 휴대 좋음." } },
          { n: "02", t: { vi: "Ăn nhẹ", en: "Light bite", zh: "轻食", ko: "가벼운 식사" }, b: { vi: "Ăn sáng hoặc trưa nhẹ trước khi thu gọn hành lý.", en: "A light breakfast or lunch before packing up.", zh: "收拾行李前用轻早/午餐。", ko: "짐 정리 전 가벼운 아침·점심." } },
          { n: "03", t: { vi: "Canh giờ", en: "Watch time", zh: "看时间", ko: "시간" }, b: { vi: "Rời chợ sớm đủ trước giờ làm thủ tục sân bay.", en: "Leave early enough for airport check-in.", zh: "提早离开以充裕办理登机。", ko: "공항 수속에 여유 있게 일찍 떠나세요." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Mấy giờ nên rời chợ?", en: "When to leave the market?", zh: "几点离开市场？", ko: "몇 시에 떠나나요?" }, a: { vi: "Tuỳ giờ bay; thường rời trước 3–4 giờ cho nội địa, sớm hơn cho quốc tế.", en: "By flight; usually 3–4 hours early for domestic, earlier for international.", zh: "视航班；国内通常提前3–4小时，国际更早。", ko: "항공편에 따라 국내선 3~4시간, 국제선은 더 일찍." } },
      { q: { vi: "Mua gì mang máy bay?", en: "What to fly with?", zh: "带什么上机？", ko: "기내에 뭘 가져가나요?" }, a: { vi: "Đồ khô đóng kín, không chất lỏng quá quy định.", en: "Sealed dry goods; no liquids beyond rules.", zh: "密封干货；液体不超规定。", ko: "밀봉 건어물, 액체는 규정 이내." } },
      { q: { vi: "Có kịp mua quà không?", en: "Time to buy gifts?", zh: "来得及买礼吗？", ko: "선물 살 시간 있나요?" }, a: { vi: "Nếu còn nửa ngày, đủ mua đồ khô đóng gói.", en: "With a half-day left, enough for packaged dried goods.", zh: "若剩半天，买包装干货足够。", ko: "반나절 남으면 포장 건어물은 충분." } },
      { q: { vi: "Có gửi hành lý ở chợ không?", en: "Luggage storage at the market?", zh: "市场有行李寄存吗？", ko: "시장에 짐 보관?" }, a: { vi: "Không có thông tin gửi đồ; hãy hỏi khách sạn hoặc sân bay.", en: "No storage listed; ask your hotel or the airport.", zh: "未列寄存；问酒店或机场。", ko: "보관 정보 없으며 호텔이나 공항에 문의." } }
    ],
    rel: [
      { slug: "dac-san-da-nang-lam-qua", tag: { vi: "Quà", en: "Gifts", zh: "伴手礼", ko: "선물" }, title: { vi: "Đặc sản Đà Nẵng làm quà", en: "Đà Nẵng souvenirs", zh: "岘港伴手礼", ko: "다낭 특산 선물" }, desc: { vi: "Gợi ý quà và lưu ý mang đi.", en: "Souvenir ideas and travel notes.", zh: "伴手礼建议与携带提示。", ko: "선물 제안과 이동 참고." } },
      { slug: "san-bay-da-nang-den-cho-con", tag: { vi: "Sân bay", en: "Airport", zh: "机场", ko: "공항" }, title: { vi: "Sân bay đến Chợ Cồn", en: "Airport to Chợ Cồn", zh: "机场到昆市场", ko: "공항에서 꼰 시장" }, desc: { vi: "So sánh gọi xe, hành lý và chi phí.", en: "Compare ride-hailing, luggage and cost.", zh: "比较叫车、行李与费用。", ko: "호출택시·짐·비용 비교." } },
      { slug: "mua-gi-o-cho-con", tag: { vi: "Mua sắm", en: "Shopping", zh: "购物", ko: "쇼핑" }, title: { vi: "Mua gì ở Chợ Cồn", en: "What to buy at Chợ Cồn", zh: "昆市场买什么", ko: "꼰 시장 무엇을 살까" }, desc: { vi: "Gợi ý đặc sản và lưu ý.", en: "Speciality suggestions and notes.", zh: "特产建议与提示。", ko: "특산품 제안과 참고." } }
    ]
  },
  // ===== F8 — Văn hóa & bảo tàng =====
  {
    slug: "lich-trinh-van-hoa-bao-tang-tu-cho-con",
    cat: "F",
    title: { vi: "Lộ trình văn hóa từ Chợ Cồn — Bảo tàng", en: "Culture route from Chợ Cồn — museums", zh: "昆市场出发的文化路线 — 博物馆", ko: "꼰 시장에서 시작하는 문화 경로 — 박물관" },
    desc: { vi: "Lộ trình thiên văn hóa: chợ, Bảo tàng Chăm và Bảo tàng Đà Nẵng.", en: "A culture-leaning route: market, Cham Museum and Đà Nẵng Museum.", zh: "偏文化的路线：市场、占族博物馆与岘港博物馆。", ko: "문화 위주 경로: 시장·참 박물관·다낭 박물관." },
    hero: {
      eye: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" },
      h1: { vi: "Lộ trình văn hóa", en: "Culture route", zh: "文化路线", ko: "문화 경로" },
      intro: { vi: "Phù hợp người thích lịch sử và không gian trong nhà. Khung dưới đây mang tính tham khảo.", en: "For those who like history and indoor spaces. The frame below is a reference.", zh: "适合喜欢历史与室内空间者。以下为参考框架。", ko: "역사와 실내를 좋아하는 분께. 아래는 참고 틀." }
    },
    sections: [
      { idx: "01", eye: { vi: "Nhịp đi", en: "Pacing", zh: "节奏", ko: "호흡" }, title: { vi: "Chia lộ trình", en: "Split the route", zh: "分配路线", ko: "경로 나누기" },
        items: [
          { n: "01", t: { vi: "Sáng", en: "Morning", zh: "上午", ko: "오전" }, b: { vi: "Chợ Cồn ăn sáng và xem nhịp địa phương (1,5 giờ).", en: "Con Market breakfast and local rhythm (1.5 hours).", zh: "昆市场早餐与看本地节奏（1.5小时）。", ko: "꼰 시장 아침과 현지 리듬(1.5시간)." } },
          { n: "02", t: { vi: "Trưa", en: "Midday", zh: "中午", ko: "정오" }, b: { vi: "Bảo tàng Chăm; nghỉ trưa gần đó.", en: "Cham Museum; lunch nearby.", zh: "占族博物馆；附近午餐。", ko: "참 박물관, 근처 점심." } },
          { n: "03", t: { vi: "Chiều", en: "Afternoon", zh: "下午", ko: "오후" }, b: { vi: "Bảo tàng Đà Nẵng hoặc quay lại phố cổ văn hóa.", en: "Đà Nẵng Museum or back to cultural streets.", zh: "岘港博物馆或回到文化老街。", ko: "다낭 박물관이나 문화 거리로." } }
        ] }
    ],
    faqs: [
      { q: { vi: "Lộ trình này mất bao lâu?", en: "How long is this route?", zh: "这路线多久？", ko: "이 경로 얼마나?" }, a: { vi: "Khoảng nửa ngày đến một ngày tuỳ mức chi tiết.", en: "About half a day to a day by depth.", zh: "约半天到一天，视深入程度。", ko: "깊이에 따라 반나절~하루." } },
      { q: { vi: "Có vé riêng từng bảo tàng không?", en: "Separate museum tickets?", zh: "各馆分开售票吗？", ko: "박물관별 표인가요?" }, a: { vi: "Thường mỗi nơi có vé riêng; xem giờ và giá trước.", en: "Usually separate admission; check hours and price first.", zh: "通常各馆单独售票；先查时间与价。", ko: "보통 각각 입장료, 시간과 가격 먼저." } },
      { q: { vi: "Có thích hợp người lớn tuổi không?", en: "Good for seniors?", zh: "适合长者吗？", ko: "어르신에게 좋나요?" }, a: { vi: "Có; không gian trong nhà, nghỉ dễ giữa chặng.", en: "Yes; indoor spaces with easy rests.", zh: "适合；室内空间、易于歇脚。", ko: "네, 실내라 중간 쉬기 좋습니다." } },
      { q: { vi: "Kết hợp được với Cầu Rồng không?", en: "Combine with Dragon Bridge?", zh: "能连龙桥吗？", ko: "용 다리와 같이?" }, a: { vi: "Có; nối buổi tối Cầu Rồng sau bảo tàng.", en: "Yes; add Dragon Bridge evening after museums.", zh: "可；博物馆后接龙桥夜景。", ko: "네, 박물관 후 용 다리 저녁 추가." } }
    ],
    rel: [
      { slug: "cho-con-den-bao-tang-dieu-khac-cham", tag: { vi: "Văn hóa", en: "Culture", zh: "文化", ko: "문화" }, title: { vi: "Đến Bảo tàng Chăm", en: "To Cham Museum", zh: "前往占族博物馆", ko: "참 박물관으로" }, desc: { vi: "Thêm điểm văn hóa trong nhà.", en: "Add an indoor cultural stop.", zh: "再加一处室内文化点。", ko: "실내 문화 명소 추가." } },
      { slug: "cho-con-den-bao-tang-da-nang", tag: { vi: "Thành phố", en: "City", zh: "城市", ko: "도시" }, title: { vi: "Đến Bảo tàng Đà Nẵng", en: "To Đà Nẵng Museum", zh: "前往岘港博物馆", ko: "다낭 박물관으로" }, desc: { vi: "Thêm góc nhìn lịch sử địa phương.", en: "Add a local history view.", zh: "再加一处地方史视角。", ko: "지역사 시각 추가." } },
      { slug: "cho-con-den-cau-rong", tag: { vi: "Buổi tối", en: "Evening", zh: "夜晚", ko: "저녁" }, title: { vi: "Đến Cầu Rồng", en: "To Dragon Bridge", zh: "前往龙桥", ko: "용 다리로" }, desc: { vi: "Nối tiếp cảnh đêm trung tâm.", en: "Continue to central night views.", zh: "继续市中心夜景。", ko: "도심 야경 이어가기." } }
    ]
  }
];


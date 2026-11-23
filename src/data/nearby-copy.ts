export const languages = ['vi', 'en', 'zh', 'ko'] as const;
export type Language = typeof languages[number];
const line = (vi: string, en: string, zh: string, ko: string) => ({vi, en, zh, ko});
export const labels = {
  nearby: line('Khám phá từ Chợ Cồn','Explore from Con Market','从昆市场出发','꼰 시장에서 출발하는 여행'),
  map: line('Chỉ đường','Directions','路线导航','길 찾기'),
  about: line('Di sản và đơn vị phụ trách','Heritage and stewardship','历史与管理','역사와 관리'),
  walk: line('Đi lại và tham quan','Getting there and walking route','交通与步行路线','교통과 도보 동선'),
  look: line('Góc quan sát','What to look for','观察与拍摄','관찰과 촬영'),
  faq: line('Hỏi trước khi đi','Before you go','出发前问答','방문 전 질문'),
  q: line('Cần kiểm tra gì trước chuyến đi?','What should I check before going?','出发前需要核对什么？','출발 전 무엇을 확인할까요?'),
  link: line('Thông tin của điểm đến','Visitor information','景点资料','방문 안내'),
  more: line('Kết hợp trong cùng tuyến','Pair with this visit','同一线路可顺游','함께 둘러볼 곳'),
  home: line('Chợ Cồn','Con Market','昆市场','꼰 시장'),
  source: line('Quản lý và bảo tồn','Management and conservation','管理与保护','관리와 보존'),
  image: line('Địa điểm trên bản đồ','Locate this place on the map','在地图上查看此地','지도에서 장소 보기'),
};
export const groups = {
 cham: {
 title:line('Điêu khắc Chăm bên sông Hàn','Cham sculpture by the Han River','韩江畔的占婆雕刻','한강 강변의 참 조각'),
 about:line('Bảo tàng Điêu khắc Chăm Đà Nẵng bảo quản và trưng bày bộ sưu tập. Các phòng mang tên địa điểm tìm thấy hiện vật, ghi lại những trung tâm tôn giáo và nghệ thuật khác nhau của Champa.','The Da Nang Museum of Cham Sculpture cares for the collection. Its galleries use the places where objects were found to trace the religious and artistic centres of Champa.','岘港占婆雕刻博物馆负责收藏与展陈。各展厅以文物发现地梳理占婆不同地区的宗教与艺术传统。','다낭 참 조각 박물관이 소장품을 보존하고 전시합니다. 전시실은 유물 출토지를 따라 참파의 종교와 예술 중심지를 소개합니다.'),
 route:line('Từ Chợ Cồn đi về bờ tây cầu Rồng và vào bảo tàng ở đường 2 Tháng 9. Các bộ sưu tập đều ở trong cùng tòa nhà; hãy dùng sơ đồ phòng ở quầy vé.','Travel from Con Market to the west end of Dragon Bridge and enter the museum on 2 Tháng 9 Street. The galleries share one museum entrance. Use the floor plan at the ticket desk.','从昆市场前往龙桥西端，在九月二日街进入博物馆。各展厅共用一个入口，入馆后按售票处的楼层图找展厅。','꼰 시장에서 용다리 서쪽으로 이동해 9월 2일 거리의 박물관으로 들어가세요. 각 전시실은 입구를 공유하므로 매표소의 층별 지도를 활용하세요.'),
 advice:line('Kiểm tra giờ vào cửa cuối và phòng có mở hôm đó không. Khi chụp ảnh, tuân theo hướng dẫn từng phòng và giữ khoảng cách với hiện vật.','Check last admission and whether the gallery is open that day. Follow the room’s photography notice and leave space around the objects.','核对最晚入场时间与当天开放的展厅。按展厅标志拍摄，和展品保持距离。','마지막 입장 시각과 당일 개방 전시실을 확인하세요. 촬영 안내를 따르고 유물과 거리를 두세요.'),
 url:'https://danangfantasticity.com/en/places-to-go/museum-of-cham-sculpture',authority:'https://danangfantasticity.com/en/overview-da-nang-museum-of-cham-sculpture'
 },
 marble: {
 title:line('Hang động và chùa Ngũ Hành Sơn','Caves and pagodas of the Marble Mountains','五行山洞窟与寺院','오행산의 동굴과 사찰'),
 about:line('Ban Quản lý Di tích Danh thắng Ngũ Hành Sơn phụ trách tuyến tham quan của di tích quốc gia đặc biệt. Các hang tự nhiên, bia khắc và chùa tạo thành một cảnh quan hành hương; quy định hành lễ do từng chùa hướng dẫn.','The Ngũ Hành Sơn Relic and Landscape Management Board oversees visits to this nationally protected landscape. Natural caves, inscriptions and temples grew into a pilgrimage circuit. Each temple sets rules for worship.','五行山遗迹名胜管理委员会负责这一国家级保护地的游览管理。天然洞窟、题刻和寺庙构成朝圣路线，各寺院另有礼拜规定。','오행산 유적·명승 관리위원회가 국가 보호 경관의 관람을 관리합니다. 천연 동굴과 비문, 사찰이 순례길을 이루며 예배 지침은 각 사찰에서 안내합니다.'),
 route:line('Từ chợ đi xe về phía nam tới khu Ngũ Hành Sơn. Xuống xe ở chân núi, xem sơ đồ cổng và chỉ dẫn riêng cho điểm muốn đến trước khi leo.','Take a vehicle south from the market to Ngũ Hành Sơn. Get out at the foot of the mountains and match the signed gate and path to your destination before climbing.','从昆市场乘车向南至五行山。在山脚下车，先对照园区图确认目标所在入口及步道，再开始上行。','꼰 시장에서 남쪽 오행산까지 차량으로 가세요. 산기슭에서 하차한 뒤 안내도에서 목적지에 맞는 입구와 길을 확인하세요.'),
 advice:line('Hỏi quầy vé về cổng, bậc đá và đoạn đang đóng. Vé lên Thủy Sơn và lối vào Âm Phủ có thể được kiểm soát riêng.','Ask the ticket desk about gates, stairs and closures. Water Mountain and Âm Phủ Cave have separate admission arrangements.','在售票处询问开放入口、阶梯与临时封闭路段。水山登山入口与阴府洞入口分别检票。','매표소에서 개방된 문과 계단, 통제 구간을 확인하세요. 수산과 암푸 동굴은 입장 절차가 다릅니다.'),
 url:'https://danangfantasticity.com/en/places-to-go/marble-mountains',authority:'https://nguhanhson.org/'
 },
 beach:{
 title:line('Những bãi biển phía đông','East-coast beaches','岘港东部海岸','다낭 동쪽 해안'),
 about:line('Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng phụ trách dịch vụ bãi biển du lịch. Hoạt động đánh cá và vui chơi vẫn cùng hiện diện trên dải bờ biển đô thị này.','The Sơn Trà Peninsula and Da Nang Tourist Beaches Management Board coordinates services on the city’s tourist beaches. Fishing and recreation share this urban coastline.','山茶半岛与岘港旅游海滩管理委员会负责旅游海滩服务。这段城市海岸仍同时承担渔业生产与休闲游憩功能。','선짜 반도 및 다낭 관광해변 관리위원회가 관광 해변의 서비스를 담당합니다. 이 도시 해안에서는 어업과 여가 활동이 함께 이루어집니다.'),
 route:line('Từ Chợ Cồn qua sông Hàn, đi xe đến đúng lối xuống bãi công cộng ghi trên bản đồ. Đoạn đi bộ bắt đầu ở lối xuống biển chứ không phải từ đường trong khu nghỉ dưỡng.','Cross the Han River from Con Market and ride to the named public beach access. Begin the walk at the public entrance rather than a resort driveway.','从昆市场过韩江，乘车到地图标识的公共海滩通道。以公共入口为步行起点，避开度假酒店的内部车道。','꼰 시장에서 한강을 건너 해당 공공 해변 입구까지 이동하세요. 리조트 진입로 대신 공공 통로에서 산책을 시작하세요.'),
 advice:line('Đọc cờ và biển thông báo ngay tại bãi, hỏi cứu hộ trước khi xuống nước. Chọn đi trên cát khi khu bơi đóng.','Read the flags and signs at the access point and check with the lifeguards before entering the water. If swimming is closed, keep your visit on the sand.','看入口处的旗帜和告示，下水前询问救生员。泳区关闭时沿岸步行即可。','입구의 깃발과 안내문을 보고 입수 전 안전요원에게 확인하세요. 수영이 금지된 날에는 모래사장에서 산책하세요.'),
 url:'https://danangfantasticity.com/en/danang-beaches',authority:'https://cttdt.danangportal.gov.vn/en/web/eng-dng/w/maintaining-the-appeal-of-da-nangs-beach-tourism'
 },
 hoian:{
 title:line('Một ngày ở phố cổ Hội An','A day in Hội An Ancient Town','会安古城一日游','호이안 옛 도시 당일 여행'),
 about:line('Trung tâm Bảo tồn Di sản Văn hóa Thế giới Hội An phụ trách công tác bảo tồn chung của phố cảng lịch sử. Trong khu di sản có cả nhà dân và cơ sở tín ngưỡng; người trông coi tại điểm hướng dẫn phạm vi được vào.','The Hội An World Cultural Heritage Conservation Center oversees conservation across the historic trading port. The heritage area includes family property and places of worship. Local custodians indicate which spaces visitors may enter.','会安世界文化遗产保护中心统筹历史商港的保护。遗产区内有家族私宅和宗教场所，可参观范围由各处看护人指引。','호이안 세계문화유산 보존센터가 옛 무역항의 유산 보존을 총괄합니다. 유산 구역에는 개인 주택과 예배 장소도 있어 각 현장 관리인이 관람 가능 구역을 안내합니다.'),
 route:line('Đây là chuyến đi Hội An riêng sau buổi chợ, không phải đoạn đi bộ trong trung tâm Đà Nẵng. Đi xe đến rìa khu phố cổ, xem sơ đồ vé rồi đi bộ theo tên đường.','Plan a separate trip to Hội An after the market. Take road transport to the edge of the old town, pick up the ticket map and continue on foot along the street shown below.','这是逛完昆市场后另行安排的会安行程。乘车到古城外围，领取古城参观图，再按下方街名步行。','꼰 시장 관람 후 별도로 호이안 일정을 잡으세요. 차량으로 옛 도시 가장자리까지 가서 관람 지도를 받고 아래 거리를 따라 걸으세요.'),
 advice:line('Hỏi quầy vé phố cổ xem điểm này có nằm trong lựa chọn trong ngày không. Giữ cuống vé và hỏi tại cửa trước khi chụp ảnh trong nhà hoặc gian thờ.','Ask the old-town ticket office whether this site is included in the day’s choices. Keep the ticket stub and ask before photographing an interior or altar.','在古城售票处核对当天可选参观点。保留票根，在宅内或祭坛拍摄前请先询问。','고도 매표소에서 이 장소가 당일 관람권에 포함되는지 확인하세요. 표를 보관하고 실내나 제단을 찍기 전 허락을 구하세요.'),
 url:'https://www.hoianworldheritage.org.vn/en/news/Useful-Information/hoi-an-tourism-information-735.hwh',authority:'https://hoianheritage.net/en/about/Functions-And-Duties-6.html'
 }
};

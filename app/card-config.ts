// ============================================================================
// FILE CẤU HÌNH TRUNG TÂM CỦA THIỆP SINH NHẬT HOÀNG KIM — MỆNH KIM (card-config.ts)
// Bạn chỉ cần chỉnh sửa tên người nhận, tên người gửi, ngày tháng sinh nhật,
// nhạc nền, danh sách ảnh kỷ niệm và nội dung lời chúc tại đây.
// Toàn bộ bảng màu đã được tinh chỉnh sang Vàng Hoàng Kim 24K, Vàng Sâm Panh
// và Trắng Ngà Bạch Kim tương sinh rực rỡ cho người Mệnh Kim.
// Mẹo nhỏ: Cũng có thể cá nhân hóa nhanh qua đường dẫn URL mà không cần sửa code,
// ví dụ: ?to=Lan&from=Minh&day=17&month=7
// ============================================================================

export const cardConfig = {
  // Tên người nhận thiệp (điền tên sau, mặc định để "Cậu" cho thân mật, tự nhiên).
  recipient: "Quỳnh Già",

  // Tên người gửi hiển thị ở phần ký tên cuối thiệp.
  sender: "Bà Zà Yamaha",

  // Ngày sinh nhật (1–31) và tháng sinh nhật (1–12) để vòng số chạy dọc dừng lại đúng ngày.
  birthdayDay: 15,
  birthdayMonth: 11,

  // Đường dẫn đến file nhạc nền trong thư mục public (ví dụ: "/nhac-sinh-nhat.mp3").
  // Nếu để trống "", thiệp sẽ tự động ngân vang giai điệu Piano & Hộp nhạc ấm áp ngay khi mở ấn sáp.
  musicSrc: "/media/Cohenvoithanhxuan.mp3",

  // Các lớp ảnh chụp thật bằng máy ảnh DSLR cho Trang Mở Đầu phong cách Harry Potter / Ấn Sáp Vàng:
  // - hogwartsDeskImage     : Bàn gỗ thư pháp cổ với ngòi bút đồng, lò nung sáp vàng dưới ánh nến.
  // - waxEnvelopeImage      : Phong bì giấy da dê cổ chụp thật kèm con dấu sáp vàng hoàng kim 24K.
  // - candleFlameMacroImage : Ngọn nến sáp thật cháy lung linh trong bóng tối.
  hogwartsDeskImage: "/media/hogwarts-desk-gold.jpg",
  waxEnvelopeImage: "/media/gold-wax-envelope.jpg",
  candleFlameMacroImage: "/media/flame-macro.jpg",

  // Các lớp ảnh chụp thật bằng máy ảnh DSLR phục vụ cảnh Bánh Kem & Thắp Nến 3 giây
  // (toàn bộ 6 cây nến đã được phối đồng bộ sắc Vàng Hoàng Kim & Bạch Kim Ngà hợp Mệnh Kim):
  cakeUnlitImage: "/media/cake-unlit.jpg",
  cakeBodyLitImage: "/media/cake-body-lit.jpg",
  cakeFlamesImage: "/media/cake-flames.jpg",

  // Các ảnh chụp thật từ máy ảnh cho phông nền bokeh ống kính 50mm f/1.4,
  // bàn gỗ cổ, giấy viết tay sợi bông và bầu trời đêm dải Ngân Hà.
  cinemaBokehImage: "/media/cinema-bokeh.jpg",
  goldenOrbBokehImage: "/media/golden-orb-bokeh.jpg",
  deskEnvelopesImage: "/media/hogwarts-desk-gold.jpg",
  cottonPaperImage: "/media/cotton-paper.webp",
  kraftPaperImage: "/media/kraft-paper.webp",
  nightSkyImage: "/media/night-sky.webp",
  deepGalaxyImage: "/media/galaxy-deep.webp",

  // Ảnh kỷ niệm nhỏ dạng Polaroid kẹp ghim đồng vàng ở góc trên bên phải tờ giấy tâm sự.
  letterPolaroidPhoto: "/media/fa7a66eedb085b560219.jpg",

  // Danh sách ảnh kỷ niệm tông Vàng Hoàng Kim - Sâm Panh - Kem Ngà hợp Mệnh Kim
  // dùng để ghép thành hình trái tim 46 mảnh và xem phóng to trong album Polaroid 35mm.
  // Khi muốn thay bằng ảnh thật của người nhận, bạn chép ảnh vào public/media rồi sửa đường dẫn bên dưới.
  photos: [
    "/media/0317971074f5f4abade4.jpg",
    "/media/9652665184b404ea5da5.jpg",
    "/media/19ebcb4129a4a9faf0b5.jpg",
    "/media/8f80e0560cb38cedd5a2.jpg",
    "/media/f63ad3d23f37bf69e626.jpg",
    "/media/4e2278c9942c14724d3d.jpg",
    "/media/9fbac96e258ba5d5fc9a.jpg",
    "/media/0d3ae9d00535856bdc24.jpg",
    "/media/2a502d55c0b040ee19a1.jpg",
    "/media/546c280ac5ef45b11cfe.jpg",
    "/media/f0cd02f6ef136f4d3602.jpg",
    "/media/c24dcada233fa361fa2e.jpg",
    "/media/ef93cd19e5ff65a13cee.jpg",
    "/media/173a4b40a3a523fb7ab4.jpg",
    "/media/44fcb59e6278e226bb69.jpg",
    "/media/48004765908310dd4992.jpg",
    "/media/874f7d2faac92a9773d8.jpg",
    "/media/9d1e8a7b5d9dddc3848c.jpg",
    "/media/077259108ef60ea857e7.jpg",
    "/media/fb22de5f09b989e7d0a8.jpg",
  ] as string[],

  // Dòng chú thích kỷ niệm hiển thị dưới mỗi bức ảnh khi mở chế độ xem ảnh Polaroid chi tiết.
  photoCaptions: [
    "Tục tưng tục tưng mỉm của mẹ Thúy ba Công.",
    "Cậu Bốp dịu dàng chúc tuổi mới rực rỡ và hạnh phúc",
    "Cậu Bốp và gia đình đáng yêu của cậu",
    "Mây chúc ba nuôi sinh nhựt hạnh phúc nè!",
    "BaBa đơn thân chinh chựt vui vẻ nhó - Limo",
    "Cậu Bốp đừng bắt nạt em Út nữa nhé!",
    "Cỡ này không á",
    "Và đây là sinh nhật sinh nhật của Nguyễn Công Quỳnh",
    "Bức ảnh em thích nhứt nè, cậu Bốp ơi",
    "Vẫn hé những nụ cười xuynh",
    "Nụ cười như ánh nắng ban mai, làm ems ngây ngất",
    "Xịt mũi",
    "Cậu Hai Quỳnh cứ mãi nhí nhảnh vậy nhé!!!",
    "Sinh nhật hạnh phúc nhé chàng mèo cụa iem:)",
    "Ý chúc Anh Quỳnh sinh nhật vui vẻ nha",
    "Anh Quỳnh sinh nhật vui vẻ ạ",
    "Chàng Tấm rạng rỡ nhéee",
    "Ú òa anh khùng",
    "Moon&Star",
    "Tưởng tượng mặt này mà buồn trông mắc cười lắm nè"
    
  ], 

  // Các câu tâm sự hiện lên từng câu một sau khi thắp nến xong:
  // Câu trước hiện rõ -> dừng lại để đọc -> mờ dần tan đi -> câu tiếp theo xuất hiện (tổng ~16 giây).
  thoughts: [
    "Hôm nay là ngày thế giới dịu dàng đón Nguyễn Công Quỳnh đến với thế giới này…",
    "Cảm ơn Anh vì đã luôn kiên cường, tỏa sáng theo cách riêng ngay cả trong những ngày lặng lẽ nhất.",
    "Em chỉ mong tuổi 27 anh vẫn là chính anh, luôn mỉm cười và hạnh phúc. Cảm ơn Anh vì đã đến. Thương anh nhất trên đời, thiệt đó!.",
    "Trước khi bước vào nội dung chính, Anh hãy chọn một phong thư dành riêng cho Anh nhennn.",
  ],

  // Nội dung trên tờ giấy thủ công: chữ sẽ hiện ra mượt mà như nét bút mực viết tay trong đúng 10 giây.
  letter: `15.11.2026, đây là năm đầu tiên mà em được đón sinh nhật với anh, em hi vọng sẽ được thổi nến cùng anh từ năm này đến những năm còn lại lun. 
  
  Em không muốn nói những lời hoa mỹ, mà em muốn cảm ơn anh. Cảm ơn tai nạn đó để em gặp được anh, cảm ơn anh vì đã đến với em, cảm ơn anh đã sống tử tế, cố gắng hết mình vì những mục tiêu đề ra.

  Em biết anh đang rất cố gắng để chứng minh bản thân với gia đình, có thể đôi lúc anh vẫn thấy mình làm chưa đủ tốt, nhưng với em việc anh không ngừng bước tiếp là điều đáng tự hào gồi.

  Có những suy nghĩ, áp lực anh chọn giữ riêng cho anh và điều đó là khiến em càng thương anh nhiều hơn. Mà anh oi, anh đừng quên hiện tại bên cạnh anh đã có em rồi nài, khuyết điểm là không giỏi an ủi hôi, còn ưu điểm là em lắng nghe giỏi lắm, nên anh đừng ngại mà chia sẻ với em nha. GACK.

  Tuổi 27, em chúc anh hạnh phúc, vui vẻ, khỏe mạnh và bình an nè.

  Sinh nhật lần này là vui chắc gồi :))))
  
  `,

  // Lời nhắn trang trọng trong khung viền nhũ vàng 24K trước khi điều ước hóa thành ngôi sao.
  finalBlessing:
    "Mong điều ước Anh chọn - và cả lá thư nhỏ ánh vàng này - thật sự tìm được đường đến với Anh trong năm mới.",
};

// Bốn lá thư nguyện ước tương ứng 4 lĩnh vực: Công việc, Tình yêu, Sức khỏe, Tinh thần.
// Tất cả đều sử dụng Ấn Sáp Vàng Hoàng Kim / Đồng Cổ / Bạch Kim hợp phong thủy Mệnh Kim.
export const wishes = [
  {
    id: "work",
    title: "Công việc",
    subtitle: "Hanh thông & tỏa sáng rực rỡ",
    sealLabel: "KIM BẢNG • SỰ NGHIỆP",
    postmarkCode: "NO. 01 • AURUM",
    sealHueRotate: "0deg",
    warmSpotlight: "rgba(248, 204, 112, 0.28)",
    tiltDeg: -1.35,
    icon: "✦",
    message:
      "Trên con đường sự nghiệp của Anh chẳng may có vấp ngã, thật mong Anh biết, chẳng phải mình Anh đau. Người yêu em giỏi giang, tất nhiên em tự hào. Nhưng em không tin vào sức khỏe của Anh. Nên là đừng để vất vả quá đấy, mệt thì nghỉ ngơi, ăn uống đàng hoàng để còn lo Shopee, Tiktok,... cho em nữaaaa.",
  },
  {
    id: "love",
    title: "Tình yêu",
    subtitle: "Luôn được trân trọng & vỗ về",
    sealLabel: "HOÀNG KIM • YÊU THƯƠNG",
    postmarkCode: "NO. 02 • LUMEN",
    sealHueRotate: "-6deg",
    warmSpotlight: "rgba(255, 218, 138, 0.28)",
    tiltDeg: 1.05,
    icon: "✧",
    message:
      "QUÁ TUYỆT!!!! Không có gì để bàn.",
  },
  {
    id: "health",
    title: "Sức khỏe",
    subtitle: "Thân khỏe mạnh, giấc ngủ an lành",
    sealLabel: "BẠCH KIM • BÌNH AN",
    postmarkCode: "NO. 03 • VITA",
    sealHueRotate: "8deg",
    warmSpotlight: "rgba(238, 208, 132, 0.25)",
    tiltDeg: -0.85,
    icon: "☼",
    message:
      "Em mong Anh luôn thật nhiều sức khỏe, ăn uống đầy đủ, ngủ nghỉ đúng giờ và đừng làm việc quá sức GA. Dù có bận rộn đến đâu cũng nhớ dành thời gian chăm sóc bản thân, đừng để bản thân mệt mỏi hay kiệt sức. Em không mong gì nhiều, chỉ mong Anh luôn khỏe mạnh, vui vẻ, bình an và mọi chuyện trong cuộc sống đều thuận lợi. Nhớ giữ gìn sức khỏe thật tốt nhé, vì Anh khỏe mạnh và hạnh phúc cũng là em vui ời.❤️",
  },
  {
    id: "spirit",
    title: "Tinh thần",
    subtitle: "Nhẹ nhõm & bình yên từ bên trong",
    sealLabel: "TỊNH KIM • AN NHIÊN",
    postmarkCode: "NO. 04 • PAX",
    sealHueRotate: "-12deg",
    warmSpotlight: "rgba(245, 224, 168, 0.25)",
    tiltDeg: 1.25,
    icon: "☾",
    message:
      "Mong anh lúc nào cũng giữ được tinh thần thật tốt, luôn vui vẻ, lạc quan. Cuộc sống chắc chắn sẽ có khó khăn, áp lực, có những chuyện không được như ý, thì anh cũng đừng quá khắt khe với anh thân nha. Hãy cho bản thân được nghỉ ngơi, đừng giữ mọi muộn phiền trong lòng và cũng đừng quên rằng anh không cần phải lúc nào cũng mạnh mẽ. Em mong mỗi ngày của anh đều nhẹ nhàng hơn, cười nhiều hơn, vì cười nhiều là chấp mụn lên lun đó kkkkk.   ",
  },
] as const;

// Kiểu dữ liệu cho từng lá thư điều ước.
export type WishItem = (typeof wishes)[number];

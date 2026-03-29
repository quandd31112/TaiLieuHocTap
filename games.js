// ==================== GAMES MODULE ====================
// Dữ liệu game đã được bổ sung thông tin thị trường chi tiết

const gamesData = [
    {
        id: "zelda_botw",
        name: "The Legend of Zelda: Breath of the Wild",
        shortDesc: "Mở rộng ranh giới của thế giới mở, trao quyền tự do sáng tạo cho người chơi.",
        tags: ["Thế giới mở", "Vật lý tương tác", "Khám phá"],
        icon: "fa-tree",
        imageUrl: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_fill,f_auto,q_auto,w_1920/ncom/software/switch/70010000000025/7137262b5a64d921e193657f0aa0f0540d448cad1b169f4c1d6c5c2cf3f8c2b4",
        analysis: {
            successReason: "Phá vỡ công thức Zelda truyền thống, thay vào đó là thế giới mở với hệ thống vật lý và hóa học cho phép người chơi tự do giải quyết vấn đề. Thiết kế 'dẫn dắt bằng cảnh quan' (landmark-driven) tạo cảm giác khám phá vô tận.",
            designHighlights: [
                "Hệ thống vật lý đồng nhất cho phép kết hợp sáng tạo (đốt cỏ tạo luồng khí bay, chặt cây làm cầu)",
                "Không có đường đi cố định, người chơi tự quyết định lộ trình",
                "Độ khó được điều chỉnh thông minh qua hệ thống thế giới mở"
            ],
            relatedTerms: ["Emergent Gameplay", "Environmental Storytelling", "Sandbox", "Signposting", "Traversal"]
        },
        revenue: "> 30 triệu bản (tính đến 2024)",
        milestones: [
            "03/2017: Phát hành cùng Switch, được khen ngợi toàn cầu",
            "04/2018: Đạt 10 triệu bản",
            "2021: Vượt mốc 25 triệu bản",
            "2023: Đạt 30 triệu bản, trở thành game bán chạy nhất trong lịch sử dòng Zelda"
        ],
        marketAnalysis: "Thành công nhờ vào sự đổi mới táo bạo, phá vỡ công thức 30 năm của series. Được ví như 'kỳ tích' của Nintendo, kéo theo thành công của Switch. Sức hút kéo dài nhờ DLC và cộng đồng speedrun.",
        criticalAcclaim: "Metacritic: 97/100 (Switch), được coi là một trong những game hay nhất mọi thời đại.",
        playerBase: "Ước tính 35 triệu người chơi (tính cả bản mô phỏng)",
        culturalImpact: "Tạo ra làn sóng game thế giới mở dạng 'khám phá tự do', ảnh hưởng đến nhiều tựa game sau này như Genshin Impact, Immortals Fenyx Rising."
    },
        {
        id: "last_of_us_part2",
        name: "The Last of Us Part II",
        shortDesc: "Kết thúc đầy cảm xúc cho câu chuyện của Ellie và Joel, gây tranh cãi nhưng được đánh giá cao về kỹ thuật.",
        tags: ["Narrative", "Action", "Survival"],
        icon: "fa-virus",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0221/3089bae6f7ed028be8c34f78cbf7cfa3e79598c7e47ecb0c.png",
        analysis: {
            successReason: "Đẩy giới hạn của kể chuyện trong game với cấu trúc song song, gameplay nâng cấp từ phần 1, và đồ họa xuất sắc.",
            designHighlights: [
                "Cấu trúc narrative phi tuyến, kể hai góc nhìn",
                "Combat và stealth cải tiến với AI thông minh",
                "Chi tiết môi trường và animation tạo cảm xúc mạnh"
            ],
            relatedTerms: ["Narrative Design", "Emotional Impact", "Stealth Mechanics", "AI Behavior"]
        },
        revenue: "> 10 triệu bản (tính đến 2024)",
        milestones: [
            "06/2020: Phát hành, đạt 4 triệu bản trong 3 ngày",
            "2022: Đạt 10 triệu bản"
        ],
        marketAnalysis: "Bất chấp tranh cãi về cốt truyện, game vẫn thành công lớn nhờ chất lượng sản xuất và lượng fan trung thành.",
        criticalAcclaim: "Metacritic: 93/100, thắng nhiều giải GOTY năm 2020.",
        playerBase: "> 12 triệu người chơi",
        culturalImpact: "Mở ra cuộc tranh luận về storytelling trong game, ảnh hưởng đến thiết kế narrative sau này."
    },
    {
        id: "astro_bot",
        name: "Astro Bot",
        shortDesc: "Platformer 3D xuất sắc, tận dụng tối đa tính năng của PlayStation 5.",
        tags: ["Platformer", "Family", "Action"],
        icon: "fa-robot",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202407/2516/03360f08a74d32f6f9a1b791c15f0f3bf081f5452b977e6c.png",
        analysis: {
            successReason: "Kết hợp gameplay platformer cổ điển với công nghệ DualSense, tạo cảm giác chơi mới lạ và thú vị.",
            designHighlights: [
                "Tận dụng haptic feedback và adaptive trigger",
                "Level design sáng tạo, nhiều bất ngờ",
                "Nostalgia với các nhân vật PlayStation"
            ],
            relatedTerms: ["Platformer Design", "Immersion", "Haptic Feedback", "Level Design"]
        },
        revenue: "> 1.5 triệu bản (tính đến 2024)",
        milestones: [
            "09/2024: Phát hành, đạt 1 triệu bản trong 2 tuần"
        ],
        marketAnalysis: "Thành công nhờ chất lượng cao và được giới phê bình ủng hộ, là một trong những game platformer hay nhất của Sony.",
        criticalAcclaim: "Metacritic: 94/100, Game of the Year 2024 (The Game Awards).",
        playerBase: "> 2 triệu người chơi",
        culturalImpact: "Khẳng định vị thế của platformer 3D trong thời đại mới."
    },
    {
        id: "roblox",
        name: "Roblox",
        shortDesc: "Nền tảng game xã hội với hàng triệu trò chơi do người dùng tạo.",
        tags: ["Sandbox", "Social", "Multiplayer"],
        icon: "fa-cube",
        imageUrl: "https://tr.rbxcdn.com/af3d7a28d2b9b2cf509c37a8d4123e5e/512/512/Image/Png",
        analysis: {
            successReason: "Trao quyền cho người chơi tự tạo game, xây dựng cộng đồng lớn mạnh và mô hình kinh tế nội bộ thành công.",
            designHighlights: [
                "User-generated content với Roblox Studio",
                "Hệ thống kinh tế Robux",
                "Cross-platform và social features mạnh mẽ"
            ],
            relatedTerms: ["User-Generated Content", "Social Platform", "Virtual Economy", "Sandbox"]
        },
        revenue: "> 2.5 tỷ USD doanh thu năm 2023",
        milestones: [
            "2006: Phát hành chính thức",
            "2019: Đạt 100 triệu người chơi hàng tháng",
            "2021: IPO thành công, vốn hóa 38 tỷ USD",
            "2024: 70 triệu người chơi hàng ngày"
        ],
        marketAnalysis: "Không chỉ là game mà là nền tảng xã hội, thành công nhờ mô hình UGC và sự trung thành của trẻ em.",
        criticalAcclaim: "Điểm số không cao về mặt phê bình nhưng có sức ảnh hưởng lớn.",
        playerBase: "> 200 triệu người chơi hàng tháng",
        culturalImpact: "Tạo ra hệ sinh thái game do người chơi tạo, ảnh hưởng đến nhiều nền tảng UGC sau này."
    },
    {
        id: "genshin_impact",
        name: "Genshin Impact",
        shortDesc: "Open-world gacha thành công toàn cầu với phong cách anime.",
        tags: ["RPG", "Gacha", "Open World"],
        icon: "fa-star",
        imageUrl: "https://upload-os-bbs.mihoyo.com/upload/2020/08/19/69241558/7b4c2a9b3e6c3f4b0e7c9d3a1f5e2b8c.png",
        analysis: {
            successReason: "Kết hợp open world chất lượng cao với mô hình gacha hấp dẫn, cập nhật nội dung liên tục.",
            designHighlights: [
                "Thế giới mở rộng lớn với hệ thống nguyên tố",
                "Nhân vật đa dạng, mỗi người có gameplay riêng",
                "Live service với event và update thường xuyên"
            ],
            relatedTerms: ["Gacha", "Open World", "Elemental Combat", "Live Service"]
        },
        revenue: "> 5 tỷ USD (tính đến 2024)",
        milestones: [
            "09/2020: Phát hành, đạt 1 tỷ USD trong 6 tháng",
            "2021: Doanh thu vượt 2 tỷ USD",
            "2023: Đạt 5 tỷ USD"
        ],
        marketAnalysis: "Hiện tượng toàn cầu nhờ chất lượng đồ họa và gameplay, tận dụng thành công mô hình gacha và cộng đồng.",
        criticalAcclaim: "Metacritic: 81-84/100, được khen về thế giới mở và thiết kế nhân vật.",
        playerBase: "> 60 triệu người chơi hàng tháng",
        culturalImpact: "Mở đường cho các game gacha chất lượng cao, ảnh hưởng đến nhiều game mobile và PC."
    },
    {
        id: "cyberpunk_2077",
        name: "Cyberpunk 2077",
        shortDesc: "RPG thế giới mở tương lai, khởi đầu sóng gió nhưng đã phục hồi ngoạn mục.",
        tags: ["RPG", "Open World", "Sci-fi"],
        icon: "fa-microchip",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        analysis: {
            successReason: "Dù ra mắt với nhiều lỗi, CD Projekt Red đã kiên trì sửa chữa và phát hành bản mở rộng Phantom Liberty, lấy lại niềm tin.",
            designHighlights: [
                "Thế giới Night City chi tiết và sống động",
                "Cốt truyện sâu sắc với nhiều nhánh",
                "Hệ thống nhân vật và trang bị đa dạng"
            ],
            relatedTerms: ["Redemption Arc", "Open World", "Narrative Design", "Post-launch Support"]
        },
        revenue: "> 25 triệu bản (tính đến 2024)",
        milestones: [
            "12/2020: Phát hành, đạt 13 triệu bản dù lỗi",
            "2022: Bản cập nhật 1.5 cải thiện lớn",
            "2023: Phantom Liberty ra mắt, đạt 25 triệu bản"
        ],
        marketAnalysis: "Bài học về quản lý kỳ vọng và sức mạnh của việc sửa lỗi sau phát hành.",
        criticalAcclaim: "Metacritic: 86/100 (PC), 75/100 (console lúc đầu), nay cao hơn.",
        playerBase: "> 30 triệu người chơi",
        culturalImpact: "Tạo ra làn sóng tranh luận về phát hành game chưa hoàn thiện và tầm quan trọng của post-launch support."
    },
    {
        id: "dota_2",
        name: "Dota 2",
        shortDesc: "MOBA đỉnh cao với độ sâu chiến thuật và giải đấu The International.",
        tags: ["MOBA", "Esports", "Strategy"],
        icon: "fa-chess",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
        analysis: {
            successReason: "Kế thừa tinh hoa từ mod Warcraft III, hệ thống cân bằng phức tạp và cộng đồng trung thành.",
            designHighlights: [
                "Hero design độc đáo, mỗi hero có cơ chế riêng",
                "Deny, creep pulling, stacking tăng chiều sâu",
                "The International với prize pool kỷ lục"
            ],
            relatedTerms: ["MOBA", "Esports", "Balance", "Hero Design"]
        },
        revenue: "Free-to-play, doanh thu từ battle pass và cosmetic",
        milestones: [
            "07/2013: Phát hành chính thức",
            "2014: The International 4 prize pool 10 triệu USD",
            "2021: TI10 prize pool 40 triệu USD"
        ],
        marketAnalysis: "Dù không phổ biến nhất MOBA, Dota 2 có cộng đồng trung thành và giải đấu lớn nhất.",
        criticalAcclaim: "Metacritic: 90/100, được khen về độ sâu và cân bằng.",
        playerBase: "> 7 triệu người chơi hàng tháng",
        culturalImpact: "Định hình esports hiện đại với mô hình crowdfunding prize pool."
    },
    {
        id: "valorant",
        name: "Valorant",
        shortDesc: "FPS chiến thuật kết hợp giữa CS:GO và hero abilities.",
        tags: ["FPS", "Tactical", "Esports"],
        icon: "fa-crosshairs",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        analysis: {
            successReason: "Kết hợp bắn súng chính xác với kỹ năng đặc biệt của từng nhân vật, tạo ra meta độc đáo.",
            designHighlights: [
                "Spray pattern và recoil như CS",
                "Agent abilities tạo lớp chiến thuật mới",
                "Anti-cheat Vanguard mạnh mẽ"
            ],
            relatedTerms: ["Tactical Shooter", "Hero Shooter", "Anti-cheat", "Esports"]
        },
        revenue: "Free-to-play, doanh thu từ battle pass và skin",
        milestones: [
            "06/2020: Phát hành, đạt 3 triệu người chơi ngày đầu",
            "2021: Masters Berlin, giải đấu lớn",
            "2023: Đạt 28 triệu người chơi hàng tháng"
        ],
        marketAnalysis: "Thành công nhờ Riot Games' ecosystem và chất lượng gameplay, cạnh tranh trực tiếp với CS:GO.",
        criticalAcclaim: "Metacritic: 80/100, đánh giá cao gameplay nhưng thiếu nội dung ban đầu.",
        playerBase: "> 28 triệu người chơi hàng tháng",
        culturalImpact: "Mang hero shooter vào thể loại tactical FPS, tạo ra phân khúc mới."
    },
    {
        id: "apex_legends",
        name: "Apex Legends",
        shortDesc: "Battle royale với movement mượt và hero abilities.",
        tags: ["Battle Royale", "FPS", "Hero Shooter"],
        icon: "fa-bolt",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
        analysis: {
            successReason: "Đột phá battle royale với ping system, movement và các nhân vật có kỹ năng riêng.",
            designHighlights: [
                "Ping system giúp giao tiếp không cần mic",
                "Movement linh hoạt (slide, zip line)",
                "Legends với abilities độc đáo"
            ],
            relatedTerms: ["Battle Royale", "Hero Shooter", "Ping System", "Movement"]
        },
        revenue: "> 2 tỷ USD doanh thu (tính đến 2024)",
        milestones: [
            "02/2019: Phát hành bất ngờ, đạt 25 triệu người chơi trong 1 tuần",
            "2021: Đạt 100 triệu người chơi",
            "2024: 130 triệu người chơi"
        ],
        marketAnalysis: "Thành công nhờ chất lượng gameplay và chiến lược phát hành surprise, giữ vững vị thế nhờ update thường xuyên.",
        criticalAcclaim: "Metacritic: 89/100, được khen về innovation và gameplay.",
        playerBase: "> 130 triệu người chơi",
        culturalImpact: "Định nghĩa lại battle royale với ping system và movement, ảnh hưởng đến nhiều game sau."
    },
    {
        id: "call_of_duty_warzone",
        name: "Call of Duty: Warzone",
        shortDesc: "Battle royale miễn phí với cơ chế gulag và loadout.",
        tags: ["Battle Royale", "FPS", "Arcade"],
        icon: "fa-bomb",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1962660/header.jpg",
        analysis: {
            successReason: "Kết hợp arcade shooter quen thuộc của CoD với battle royale, thêm gulag và loadout tạo sự khác biệt.",
            designHighlights: [
                "Gulag: cơ hội hồi sinh qua đấu tay đôi",
                "Loadout: mang vũ khí tùy chỉnh vào trận",
                "Map lớn, nhiều phương tiện"
            ],
            relatedTerms: ["Battle Royale", "Gulag", "Loadout System", "Arcade Shooter"]
        },
        revenue: "Free-to-play, doanh thu từ battle pass và skin",
        milestones: [
            "03/2020: Phát hành, đạt 30 triệu người chơi trong 10 ngày",
            "2021: Đạt 100 triệu người chơi",
            "2023: Vẫn duy trì 50 triệu người chơi hàng tháng"
        ],
        marketAnalysis: "Thành công nhờ thương hiệu Call of Duty và cơ chế độc đáo, cạnh tranh mạnh với Fortnite và Apex.",
        criticalAcclaim: "Điểm số trung bình 75-80, được khen về gulag và loadout.",
        playerBase: "> 50 triệu người chơi hàng tháng",
        culturalImpact: "Tạo ra xu hướng gulag trong battle royale, ảnh hưởng đến các game sau."
    },
    {
        id: "fall_guys",
        name: "Fall Guys",
        shortDesc: "Party battle royale vui nhộn với các thử thách điền kinh.",
        tags: ["Battle Royale", "Party", "Casual"],
        icon: "fa-smile",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg",
        analysis: {
            successReason: "Đem thể loại battle royale vào không gian vui nhộn, dễ chơi, phù hợp mọi lứa tuổi.",
            designHighlights: [
                "Mini-game đa dạng, mỗi round khác nhau",
                "Vật lý hài hước, dễ gây cười",
                "Cross-platform và collaboration skin"
            ],
            relatedTerms: ["Party Game", "Battle Royale", "Physics-based", "Casual"]
        },
        revenue: "> 20 triệu bản trước khi chuyển free-to-play",
        milestones: [
            "08/2020: Phát hành, đạt 2 triệu bản trong 1 tuần",
            "2021: Đạt 50 triệu người chơi (cộng dồn)",
            "2022: Chuyển free-to-play, đạt 20 triệu người chơi trong 2 ngày"
        ],
        marketAnalysis: "Hiện tượng nhờ viral trên mạng xã hội và streamer, dễ tiếp cận với mọi lứa tuổi.",
        criticalAcclaim: "Metacritic: 80/100, được khen về tính giải trí.",
        playerBase: "> 20 triệu người chơi hàng tháng",
        culturalImpact: "Đưa thể loại party game battle royale lên tầm mới."
    },
    {
        id: "dark_souls",
        name: "Dark Souls",
        shortDesc: "Triết lý thiết kế khắc nghiệt nhưng công bằng, tạo cảm giác thành tựu đỉnh cao.",
        tags: ["Hành động nhập vai", "Độ khó", "Thiết kế môi trường"],
        icon: "fa-skull",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/570940/header.jpg",
        analysis: {
            successReason: "Xây dựng thương hiệu dựa trên độ khó công bằng và cảm giác chinh phục. Thiết kế level dạng 3D Metroidvania kết nối mọi khu vực, tạo sự ngạc nhiên và khám phá.",
            designHighlights: [
                "Hệ thống bonfire (checkpoint) cân bằng giữa tension và relief",
                "Boss pattern rõ ràng, người chơi phải học và thích nghi",
                "Cốt truyện kể qua môi trường, item description thay vì cutscene dài"
            ],
            relatedTerms: ["Boss Pattern", "I-Frames (Invincibility Frames)", "Checkpoint", "Encounter Design", "Risk vs Reward"]
        },
        revenue: "> 10 triệu bản (tính cả series)",
        milestones: [
            "09/2011: Phát hành tại Nhật, gây chú ý với độ khó",
            "2013: Đạt 2 triệu bản, tạo thành cult classic",
            "2018: Bản Remastered giúp doanh số tăng vọt",
            "2023: Series Dark Souls đạt 37 triệu bản"
        ],
        marketAnalysis: "Khởi nguồn thể loại Soulslike, tạo ra cộng đồng hardcore trung thành. Thành công nhờ truyền miệng và streaming (người chơi nổi tiếng như PewDiePie).",
        criticalAcclaim: "Metacritic: 89/100 (bản gốc), 84/100 (Remastered)",
        playerBase: "Ước tính 20 triệu người chơi (toàn series)",
        culturalImpact: "Tạo ra 'Soulslike' như một thể loại con, ảnh hưởng đến nhiều game như Nioh, Code Vein, Jedi: Fallen Order."
    },
    {
        id: "hades",
        name: "Hades",
        shortDesc: "Kết hợp roguelike với kể chuyện nhân vật xuất sắc, vòng lặp gây nghiện.",
        tags: ["Roguelike", "Hành động", "Kể chuyện"],
        icon: "fa-fire",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
        analysis: {
            successReason: "Lấy thể loại roguelike vốn khô khan và tích hợp cốt truyện đậm chất nhân văn, mỗi lần chết lại mở ra đối thoại mới, biến thất bại thành động lực.",
            designHighlights: [
                "Meta-progression giúp người chơi luôn cảm thấy tiến bộ dù thất bại",
                "Build diversity với các phần thưởng từ thần Olympus",
                "Game feel đỉnh cao với phản hồi lực, âm thanh, hitstop"
            ],
            relatedTerms: ["Permadeath", "Meta Progression", "Build Diversity", "Combat Loop", "Juice"]
        },
        revenue: "> 1 triệu bản trong 3 ngày đầu EA, > 5 triệu bản sau 1 năm",
        milestones: [
            "12/2018: Early Access trên Epic",
            "09/2020: Phát hành đầy đủ, nhận giải thưởng lớn",
            "2021: Đạt 3 triệu bản, thắng giải BAFTA",
            "2023: Vượt 5 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ kết hợp hoàn hảo giữa roguelike và kể chuyện, tận dụng Early Access để cân bằng game, và được streamer ủng hộ mạnh mẽ.",
        criticalAcclaim: "Metacritic: 93/100, IGN 9/10, Game of the Year 2020 (Nhiều tạp chí)",
        playerBase: "> 7 triệu người chơi (tính đến 2024)",
        culturalImpact: "Chứng minh roguelike có thể có narrative sâu sắc, trở thành hình mẫu cho các game indie sau này."
    },
    {
        id: "minecraft",
        name: "Minecraft",
        shortDesc: "Sandbox thuần túy, tự do sáng tạo không giới hạn.",
        tags: ["Sandbox", "Sinh tồn", "Sáng tạo"],
        icon: "fa-cube",
        imageUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft_Store_Header.jpg",
        analysis: {
            successReason: "Trao cho người chơi bộ công cụ đơn giản (voxel) nhưng khả năng sáng tạo vô hạn. Tính hệ thống sinh procedural tạo ra thế giới độc nhất cho mỗi người.",
            designHighlights: [
                "Crafting system mở, khuyến khích thử nghiệm",
                "Redstone cho phép xây dựng logic phức tạp trong game",
                "Chế độ sinh tồn và sáng tạo phục vụ hai đối tượng khác nhau"
            ],
            relatedTerms: ["Sandbox", "Procedural Generation", "Crafting System", "Emergent Gameplay", "Resource Management"]
        },
        revenue: "> 300 triệu bản (game bán chạy nhất mọi thời đại)",
        milestones: [
            "05/2009: Phiên bản đầu tiên",
            "2011: Phát hành đầy đủ, đạt 4 triệu bản",
            "2014: Microsoft mua lại Mojang với giá 2.5 tỷ USD",
            "2023: Vượt 300 triệu bản"
        ],
        marketAnalysis: "Hiện tượng văn hóa nhờ sự tự do sáng tạo và cộng đồng modder hùng mạnh. Thành công nhờ viral từ YouTube (PewDiePie, DanTDM).",
        criticalAcclaim: "Metacritic: 93/100, đa số đánh giá 9-10/10",
        playerBase: "> 140 triệu người chơi hoạt động hàng tháng",
        culturalImpact: "Được đưa vào giảng dạy trong trường học, ảnh hưởng sâu rộng đến văn hóa game và giáo dục."
    },
    {
        id: "stardew_valley",
        name: "Stardew Valley",
        shortDesc: "Mô phỏng nông trại kết hợp yếu tố xã hội, thư giãn và chiều sâu.",
        tags: ["Mô phỏng", "Quản lý tài nguyên", "Cộng đồng"],
        icon: "fa-seedling",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        analysis: {
            successReason: "Tập trung vào cảm giác thư giãn và tiến triển cá nhân. Hệ thống quan hệ với NPC, lễ hội, và bí mật tạo cảm giác thế giới sống động.",
            designHighlights: [
                "Vòng lặp ngày-đêm và mùa vụ tạo nhịp chơi tự nhiên",
                "Nhiều con đường phát triển: nông nghiệp, khai khoáng, đánh cá, chiến đấu",
                "Lượng nội dung khổng lồ từ một nhà phát triển duy nhất"
            ],
            relatedTerms: ["Resource Management", "Crafting System", "NPC (Non-Player Character)", "Side Quest", "Game Economy"]
        },
        revenue: "> 20 triệu bản (tính đến 2024)",
        milestones: [
            "02/2016: Phát hành, đạt 400.000 bản trong 2 tháng",
            "2017: Đạt 3.5 triệu bản",
            "2020: Vượt 10 triệu bản",
            "2024: Đạt 20 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ sự kiên trì của một lập trình viên duy nhất (Eric Barone), kết hợp yếu tố thư giãn và quản lý tài nguyên, tận dụng sức hút từ cộng đồng.",
        criticalAcclaim: "Metacritic: 89/100, được yêu thích bởi cả giới phê bình và game thủ",
        playerBase: "> 25 triệu người chơi",
        culturalImpact: "Phục hưng thể loại nông trại mô phỏng, ảnh hưởng đến nhiều game indie sau đó."
    },
    {
        id: "elden_ring",
        name: "Elden Ring",
        shortDesc: "Soulslike kết hợp open world, nâng tầm tự do khám phá nhưng vẫn giữ độ khó đặc trưng.",
        tags: ["Soulslike", "Thế giới mở", "Khám phá"],
        icon: "fa-ring",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        analysis: {
            successReason: "Kết hợp cấu trúc open world với triết lý Souls: không chỉ đường, không ép buộc. Người chơi tự tìm hướng đi và tự điều chỉnh độ khó.",
            designHighlights: [
                "Freedom of approach: gặp boss khó có thể bỏ qua và quay lại sau",
                "Level design theo dạng 'layered world' với nhiều tầng cao thấp",
                "Minimal guidance, dùng ánh sáng và landmark để dẫn dắt"
            ],
            relatedTerms: ["Non-linear Progression", "Exploration Loop", "Diegetic Guidance", "Open-ended Design"]
        },
        revenue: "> 23 triệu bản (tính đến 2024)",
        milestones: [
            "02/2022: Phát hành, đạt 12 triệu bản trong 2 tuần",
            "2022: Thắng Game of the Year tại The Game Awards",
            "2023: Đạt 20 triệu bản",
            "2024: Vượt 23 triệu bản"
        ],
        marketAnalysis: "Kỷ lục bán hàng của FromSoftware, nhờ sự hợp tác với George R.R. Martin và mở rộng lượng fan vượt xa dòng Souls. Thành công nhờ viral và streamer.",
        criticalAcclaim: "Metacritic: 96/100, được coi là một trong những game hay nhất thập kỷ",
        playerBase: "> 25 triệu người chơi",
        culturalImpact: "Đưa thể loại Soulslike lên tầm cao mới, ảnh hưởng đến thiết kế open world của nhiều game sau này."
    },
    {
        id: "portal_2",
        name: "Portal 2",
        shortDesc: "Puzzle design gần như hoàn hảo với việc dạy mechanic qua trải nghiệm.",
        tags: ["Puzzle", "First-person", "Physics"],
        icon: "fa-circle-notch",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
        analysis: {
            successReason: "Thiết kế puzzle theo nguyên tắc 'teach without telling'. Người chơi học mechanic thông qua thử nghiệm tự nhiên.",
            designHighlights: [
                "Progressive complexity: mỗi mechanic được mở rộng dần",
                "Không cần tutorial dài, môi trường tự dạy",
                "Puzzle luôn có lời giải logic, không gây frustration vô lý"
            ],
            relatedTerms: ["Onboarding", "Cognitive Load", "Puzzle Gating", "Player Learning Curve"]
        },
        revenue: "> 12 triệu bản (tính đến 2024)",
        milestones: [
            "04/2011: Phát hành, đạt 3 triệu bản trong 3 tháng",
            "2015: Đạt 5 triệu bản",
            "2021: Đạt 10 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ chất lượng tuyệt đối, được Valve đầu tư kỹ lưỡng, và sự hỗ trợ từ cộng đồng modding (Portal 2 Workshop).",
        criticalAcclaim: "Metacritic: 95/100, được đánh giá là một trong những game puzzle hay nhất mọi thời đại.",
        playerBase: "> 15 triệu người chơi",
        culturalImpact: "Định hình thể loại puzzle-platformer, trở thành hình mẫu cho các game dạy cơ chế không lời thoại."
    },    {
        id: "portal_2",
        name: "Portal 2",
        shortDesc: "Puzzle design gần như hoàn hảo với việc dạy mechanic qua trải nghiệm.",
        tags: ["Puzzle", "First-person", "Physics"],
        icon: "fa-circle-notch",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
        analysis: {
            successReason: "Thiết kế puzzle theo nguyên tắc 'teach without telling'. Người chơi học mechanic thông qua thử nghiệm tự nhiên.",
            designHighlights: [
                "Progressive complexity: mỗi mechanic được mở rộng dần",
                "Không cần tutorial dài, môi trường tự dạy",
                "Puzzle luôn có lời giải logic, không gây frustration vô lý"
            ],
            relatedTerms: ["Onboarding", "Cognitive Load", "Puzzle Gating", "Player Learning Curve"]
        },
        revenue: "> 12 triệu bản (tính đến 2024)",
        milestones: [
            "04/2011: Phát hành, đạt 3 triệu bản trong 3 tháng",
            "2015: Đạt 5 triệu bản",
            "2021: Đạt 10 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ chất lượng tuyệt đối, được Valve đầu tư kỹ lưỡng, và sự hỗ trợ từ cộng đồng modding (Portal 2 Workshop).",
        criticalAcclaim: "Metacritic: 95/100, được đánh giá là một trong những game puzzle hay nhất mọi thời đại.",
        playerBase: "> 15 triệu người chơi",
        culturalImpact: "Định hình thể loại puzzle-platformer, trở thành hình mẫu cho các game dạy cơ chế không lời thoại."
    },
    {
        id: "half_life_2",
        name: "Half-Life 2",
        shortDesc: "Định nghĩa lại FPS với vật lý thời gian thực và kể chuyện trong gameplay.",
        tags: ["FPS", "Narrative", "Physics"],
        icon: "fa-gun",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg",
        analysis: {
            successReason: "Tích hợp engine vật lý Havok vào gameplay tạo ra trải nghiệm chưa từng có, kể chuyện thông qua môi trường thay vì cutscene.",
            designHighlights: [
                "Gravity Gun – vũ khí biểu tượng mở ra lối chơi sáng tạo",
                "NPC đồng hành có AI tiên tiến, tạo cảm xúc",
                "Level design tuyến tính nhưng có chiều sâu"
            ],
            relatedTerms: ["Physics-based Gameplay", "Environmental Storytelling", "AI Companion", "Linear Design"]
        },
        revenue: "> 12 triệu bản (PC, kèm Orange Box)",
        milestones: [
            "11/2004: Phát hành, đạt 6 triệu bản sau 2 năm",
            "2007: Orange Box đạt 3 triệu bản",
            "2011: Phiên bản Portal 2 giúp series vượt 10 triệu"
        ],
        marketAnalysis: "Valve đặt tiêu chuẩn mới cho FPS, thành công nhờ sự đổi mới về công nghệ và thiết kế.",
        criticalAcclaim: "Metacritic: 96/100, được coi là một trong những game hay nhất mọi thời đại.",
        playerBase: "> 20 triệu người chơi",
        culturalImpact: "Ảnh hưởng đến mọi FPS sau này, đặc biệt là về vật lý và kể chuyện môi trường."
    },
    {
        id: "disco_elysium",
        name: "Disco Elysium",
        shortDesc: "RPG không chiến đấu, tập trung vào đối thoại và tâm lý nhân vật.",
        tags: ["RPG", "Narrative", "Indie"],
        icon: "fa-brain",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg",
        analysis: {
            successReason: "Đưa yếu tố tâm lý học và triết học vào cốt lõi gameplay, mọi kỹ năng đều là một 'giọng nói' trong đầu nhân vật.",
            designHighlights: [
                "Skill system đại diện cho các khía cạnh nhân cách",
                "Không có combat truyền thống, giải quyết xung đột qua đối thoại",
                "Narrative branching cực kỳ sâu"
            ],
            relatedTerms: ["Narrative Design", "Skill System", "Branching Narrative", "Player Agency"]
        },
        revenue: "> 2 triệu bản (tính đến 2024)",
        milestones: [
            "10/2019: Phát hành, đạt 1 triệu bản sau 1 năm",
            "2021: Bản Final Cut tăng doanh số mạnh",
            "2024: Đạt 2 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ chất lượng viết kịch bản xuất sắc, cộng đồng indie và các nhà phê bình ủng hộ.",
        criticalAcclaim: "Metacritic: 97/100, được vinh danh là một trong những game có kịch bản hay nhất lịch sử.",
        playerBase: "> 2.5 triệu người chơi",
        culturalImpact: "Mở đường cho các game tập trung vào narrative mà không cần combat, ảnh hưởng đến nhiều indie RPG sau này."
    },
    {
        id: "baldurs_gate_3",
        name: "Baldur's Gate 3",
        shortDesc: "CRPG hiện đại với tự do hành động và phản ứng hệ thống chưa từng có.",
        tags: ["RPG", "Turn-based", "Co-op"],
        icon: "fa-dice-d20",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        analysis: {
            successReason: "Mô phỏng Dungeons & Dragons 5e với độ chi tiết cao, cho phép người chơi giải quyết vấn đề bằng vô số cách sáng tạo.",
            designHighlights: [
                "Systemic design: mọi hành động đều có phản ứng hợp lý",
                "Co-op 4 người với narrative riêng",
                "Motion capture và diễn xuất chất lượng điện ảnh"
            ],
            relatedTerms: ["Systemic Design", "CRPG", "Co-op Narrative", "Choice Consequence"]
        },
        revenue: "> 15 triệu bản (tính đến 2024)",
        milestones: [
            "10/2020: Early Access",
            "08/2023: Phát hành đầy đủ, đạt 5 triệu bản trong 1 tháng",
            "2024: Vượt 15 triệu bản"
        ],
        marketAnalysis: "Thành công vang dội nhờ chất lượng vượt trội, tận dụng hiệu ứng truyền miệng và streamer.",
        criticalAcclaim: "Metacritic: 96/100, Game of the Year 2023.",
        playerBase: "> 20 triệu người chơi",
        culturalImpact: "Khôi phục niềm tin vào thể loại CRPG, chứng minh game turn-based vẫn có thể đại chúng."
    },
    {
        id: "outer_wilds",
        name: "Outer Wilds",
        shortDesc: "Khám phá vũ trụ dựa trên kiến thức thay vì progression truyền thống.",
        tags: ["Exploration", "Narrative", "Puzzle"],
        icon: "fa-globe",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg",
        analysis: {
            successReason: "Progression = kiến thức người chơi, không phải stats hay item. Mỗi lần chơi lại là cơ hội hiểu thêm về bí ẩn.",
            designHighlights: [
                "Time loop 22 phút, world thay đổi theo thời gian",
                "Puzzle dựa trên hiểu biết, không có vật phẩm mở khóa",
                "Tích hợp nhạc và bầu không khí đầy cảm xúc"
            ],
            relatedTerms: ["Knowledge-based Progression", "Time Loop", "Exploration Design", "Discovery"]
        },
        revenue: "> 1.5 triệu bản (tính đến 2024)",
        milestones: [
            "05/2019: Phát hành, đạt 500.000 bản sau 1 năm",
            "2021: Bản mở rộng Echoes of the Eye",
            "2024: Vượt 1.5 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ truyền miệng mạnh mẽ từ cộng đồng, được ca ngợi là một trong những game độc đáo nhất thập kỷ.",
        criticalAcclaim: "Metacritic: 85-90/100, thắng nhiều giải thưởng về thiết kế và narrative.",
        playerBase: "> 2 triệu người chơi",
        culturalImpact: "Tạo ra một cách tiếp cận mới cho thể loại exploration, ảnh hưởng đến nhiều game indie."
    },
    {
        id: "what_remains_of_edith_finch",
        name: "What Remains of Edith Finch",
        shortDesc: "Walking simulator với cách kể chuyện đa dạng và cảm xúc sâu sắc.",
        tags: ["Walking Simulator", "Narrative", "Indie"],
        icon: "fa-house",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/501300/header.jpg",
        analysis: {
            successReason: "Mỗi câu chuyện của thành viên gia đình được kể bằng một cơ chế gameplay riêng, tạo sự đa dạng và chiều sâu.",
            designHighlights: [
                "Gameplay mechanics khác biệt cho từng đoạn",
                "Kết hợp kể chuyện và tương tác môi trường",
                "Thời lượng ngắn nhưng cảm xúc đọng lại lâu"
            ],
            relatedTerms: ["Narrative Mechanics", "Environmental Storytelling", "Short-form Game", "Emotional Design"]
        },
        revenue: "> 2 triệu bản (tính đến 2024)",
        milestones: [
            "04/2017: Phát hành, đạt 500.000 bản sau 1 năm",
            "2019: Đạt 1 triệu bản",
            "2023: Vượt 2 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ chất lượng kể chuyện xuất sắc, được coi là đỉnh cao của thể loại walking simulator.",
        criticalAcclaim: "Metacritic: 89/100, thắng giải BAFTA cho Best Narrative.",
        playerBase: "> 2.5 triệu người chơi",
        culturalImpact: "Nâng tầm thể loại walking simulator, chứng minh game có thể là nghệ thuật kể chuyện."
    },
    {
        id: "rocket_league",
        name: "Rocket League",
        shortDesc: "Kết hợp bóng đá và xe hơi, tạo ra thể loại esports mới.",
        tags: ["Sports", "Multiplayer", "Esports"],
        icon: "fa-car",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg",
        analysis: {
            successReason: "Cơ chế đơn giản nhưng skill ceiling cực cao, tạo ra cảm giác thăng tiến rõ ràng.",
            designHighlights: [
                "Physics-based gameplay với độ chính xác cao",
                "Cross-platform play từ sớm",
                "Hệ thống cosmetic và battle pass hiệu quả"
            ],
            relatedTerms: ["Skill Ceiling", "Physics Gameplay", "Cross-play", "Esports Design"]
        },
        revenue: "> 15 triệu bản (tính đến 2024), cộng thêm doanh thu từ free-to-play",
        milestones: [
            "07/2015: Phát hành, đạt 1 triệu bản trong 1 tháng",
            "2016: Đạt 10 triệu bản",
            "2020: Chuyển sang free-to-play, đạt 75 triệu người chơi"
        ],
        marketAnalysis: "Thành công nhờ gameplay addictive, chiến lược free-to-play hợp lý, và phát triển esports bài bản.",
        criticalAcclaim: "Metacritic: 86/100, được yêu thích bởi cả casual và hardcore.",
        playerBase: "> 90 triệu người chơi (đăng ký)",
        culturalImpact: "Trở thành một trong những tựa game esports lớn nhất, định hình thể loại sports-hybrid."
    },
    {
        id: "valheim",
        name: "Valheim",
        shortDesc: "Sinh tồn viking với hệ thống xây dựng và khám phá gây nghiện.",
        tags: ["Survival", "Sandbox", "Co-op"],
        icon: "fa-tree",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
        analysis: {
            successReason: "Kết hợp yếu tố sinh tồn, xây dựng và khám phá với đồ họa low-poly đầy chất thơ, tạo cảm giác chân thực.",
            designHighlights: [
                "Hệ thống xây dựng công trình vật lý",
                "Procedural world với sinh thái đa dạng",
                "Co-op mượt mà, dễ chơi"
            ],
            relatedTerms: ["Survival Loop", "Base Building", "Procedural Generation", "Co-op Design"]
        },
        revenue: "> 10 triệu bản (tính đến 2024)",
        milestones: [
            "02/2021: Early Access, đạt 3 triệu bản trong 2 tuần",
            "2021: Đạt 5 triệu bản",
            "2023: Vượt 10 triệu bản"
        ],
        marketAnalysis: "Hiện tượng indie nhờ gameplay cuốn hút và truyền miệng mạnh mẽ, đặc biệt từ cộng đồng streamer.",
        criticalAcclaim: "Metacritic: 88/100, được khen ngợi về sự hấp dẫn và chiều sâu.",
        playerBase: "> 12 triệu người chơi",
        culturalImpact: "Góp phần phục hưng thể loại survival, ảnh hưởng đến nhiều game indie sau này."
    },
    {
        id: "it_takes_two",
        name: "It Takes Two",
        shortDesc: "Game co-op bắt buộc với cơ chế đa dạng và kể chuyện cảm động.",
        tags: ["Co-op", "Platformer", "Narrative"],
        icon: "fa-heart",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
        analysis: {
            successReason: "Mỗi level có cơ chế gameplay mới, yêu cầu hợp tác chặt chẽ, biến game thành trải nghiệm gắn kết.",
            designHighlights: [
                "Co-op bắt buộc, mỗi người chơi có vai trò riêng",
                "Gameplay thay đổi liên tục, không nhàm chán",
                "Narrative cảm động về gia đình"
            ],
            relatedTerms: ["Co-op Design", "Mechanical Diversity", "Narrative Integration", "Accessibility"]
        },
        revenue: "> 10 triệu bản (tính đến 2024)",
        milestones: [
            "03/2021: Phát hành, đạt 1 triệu bản trong 1 tháng",
            "2022: Đạt 5 triệu bản",
            "2023: Vượt 10 triệu bản"
        ],
        marketAnalysis: "Thành công nhờ sự độc đáo của co-op bắt buộc và chất lượng gameplay, được streamer ủng hộ mạnh.",
        criticalAcclaim: "Metacritic: 88/100, Game of the Year 2021 (The Game Awards).",
        playerBase: "> 12 triệu người chơi",
        culturalImpact: "Định nghĩa lại thể loại co-op, trở thành hình mẫu cho các game hợp tác sau này."
    },
    {
        id: "stray",
        name: "Stray",
        shortDesc: "Phiêu lưu nhập vai làm mèo trong thế giới cyberpunk.",
        tags: ["Adventure", "Indie", "Exploration"],
        icon: "fa-cat",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg",
        analysis: {
            successReason: "Góc nhìn độc đáo từ loài mèo, kết hợp với thế giới cyberpunk đẹp mắt và gameplay nhẹ nhàng.",
            designHighlights: [
                "Movement system mô phỏng hành vi mèo",
                "Level design dựa trên môi trường đô thị",
                "Narrative kể qua môi trường và nhân vật robot"
            ],
            relatedTerms: ["Unique Perspective", "Environmental Narrative", "Accessibility", "Exploration Loop"]
        },
        revenue: "> 5 triệu bản (tính đến 2024)",
        milestones: [
            "07/2022: Phát hành, đạt 1 triệu bản trong 1 tuần",
            "2023: Đạt 3 triệu bản",
            "2024: Vượt 5 triệu bản"
        ],
        marketAnalysis: "Hiện tượng indie nhờ concept độc đáo và viral trên mạng xã hội, đặc biệt là cộng đồng yêu mèo.",
        criticalAcclaim: "Metacritic: 83/100, thắng giải Best Indie Game tại The Game Awards 2022.",
        playerBase: "> 6 triệu người chơi",
        culturalImpact: "Chứng minh game về động vật có thể thành công lớn, tạo cảm hứng cho nhiều dự án tương tự."
    },
    {
        id: "undertale",
        name: "Undertale",
        shortDesc: "Phá vỡ kỳ vọng RPG truyền thống, tập trung vào lựa chọn đạo đức.",
        tags: ["RPG", "Narrative", "Indie"],
        icon: "fa-heart",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
        analysis: {
            successReason: "Cho người chơi quyền không giết ai trong một game RPG — điều đi ngược lại core loop truyền thống.",
            designHighlights: [
                "Choice-driven narrative ảnh hưởng toàn bộ game",
                "Combat system pha bullet hell độc đáo",
                "Game nhớ hành động của người chơi xuyên suốt playthrough"
            ],
            relatedTerms: ["Player Agency", "Branching Narrative", "Moral Choice", "Meta Narrative"]
        },
        revenue: "> 5 triệu bản (tính đến 2024)",
        milestones: [
            "09/2015: Phát hành, đạt 500.000 bản trong 3 tháng",
            "2016: Đạt 1 triệu bản",
            "2018: Đạt 2.5 triệu bản",
            "2023: Vượt 5 triệu bản"
        ],
        marketAnalysis: "Hiện tượng indie nhờ truyền miệng mạnh mẽ, sự độc đáo về narrative và ảnh hưởng từ cộng đồng fan sáng tạo.",
        criticalAcclaim: "Metacritic: 93/100, thắng nhiều giải thưởng indie.",
        playerBase: "> 7 triệu người chơi",
        culturalImpact: "Tạo ra làn sóng game indie chú trọng narrative và lựa chọn đạo đức, ảnh hưởng đến Deltarune, OneShot, v.v."
    },
    {
        id: "the_witcher_3",
        name: "The Witcher 3: Wild Hunt",
        shortDesc: "Tiêu chuẩn vàng cho narrative trong open world RPG.",
        tags: ["RPG", "Open World", "Narrative"],
        icon: "fa-dragon",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        analysis: {
            successReason: "Side quest chất lượng ngang main quest, tạo chiều sâu hiếm thấy.",
            designHighlights: [
                "Quest design có consequence rõ ràng",
                "World building chi tiết và logic",
                "Character writing mạnh, có chiều sâu tâm lý"
            ],
            relatedTerms: ["Narrative Design", "Quest Design", "Branching Outcome", "World Building"]
        },
        revenue: "> 50 triệu bản (tính đến 2024)",
        milestones: [
            "05/2015: Phát hành, đạt 4 triệu bản trong 2 tuần",
            "2016: Đạt 10 triệu bản",
            "2020: Đạt 30 triệu bản",
            "2023: Vượt 50 triệu bản"
        ],
        marketAnalysis: "Thành công vượt bậc nhờ chất lượng viết kịch bản và thế giới mở sống động. CD Projekt Red tận dụng phim Netflix để tiếp thị, tạo làn sóng mới.",
        criticalAcclaim: "Metacritic: 93/100, thắng hơn 800 giải thưởng, trong đó có Game of the Year 2015.",
        playerBase: "> 60 triệu người chơi",
        culturalImpact: "Nâng cao tiêu chuẩn cho game nhập vai thế giới mở, ảnh hưởng đến nhiều tựa game như Assassin's Creed Odyssey, Ghost of Tsushima."
    },
    {
        id: "league_of_legends",
        name: "League of Legends",
        shortDesc: "MOBA thành công nhờ live ops và meta luôn thay đổi.",
        tags: ["MOBA", "Multiplayer", "Competitive"],
        icon: "fa-chess",
        imageUrl: "https://images.contentstack.io/v3/assets/blt8c2a4ad09b1ec1f2/bltef0e3f1fc0afc2c9/66b75cfcb52ab98b1c61d8f4/lol-header.jpg",
        analysis: {
            successReason: "Không phải gameplay gốc, mà là vận hành live-service cực mạnh.",
            designHighlights: [
                "Balance patch liên tục giữ meta fresh",
                "Champion design đa dạng playstyle",
                "Ranked system tạo động lực cạnh tranh"
            ],
            relatedTerms: ["Live Ops", "Meta Shift", "Player Retention", "Competitive Loop"]
        },
        revenue: "> 8 tỷ USD tổng doanh thu (tính đến 2024)",
        milestones: [
            "10/2009: Phát hành, đạt 1 triệu người chơi đầu",
            "2011: Đạt 15 triệu người chơi, khởi đầu esports",
            "2018: Đạt 100 triệu người chơi hàng tháng",
            "2023: 180 triệu người chơi hàng tháng"
        ],
        marketAnalysis: "Thành công nhờ mô hình free-to-play + battle pass, hệ thống esports bài bản và liên tục cập nhật nội dung. Riot Games biến game thành văn hóa đại chúng.",
        criticalAcclaim: "Điểm Metacritic 78-90 theo từng mùa, đánh giá cao về champion design và cộng đồng.",
        playerBase: "> 180 triệu người chơi hàng tháng",
        culturalImpact: "Định hình esports hiện đại, tạo ra văn hóa cosplay, fan art, âm nhạc (K/DA) vượt xa game."
    },
    {
    id: "fortnite",
    name: "Fortnite",
    shortDesc: "Battle royale kết hợp xây dựng, live service mạnh nhất ngành.",
    tags: ["Battle Royale", "Live Service", "Sandbox"],
    icon: "fa-hammer",
    imageUrl: "https://cdn2.unrealengine.com/fortnite-chapter4-season1-1920x1080-2e5f6d8b3b.jpg",
    analysis: {
        successReason: "Không chỉ là game mà là nền tảng live service với update liên tục, event lớn và collab IP.",
        designHighlights: [
            "Building mechanic tạo skill gap cực lớn",
            "Live events (concert, story event) giữ player quay lại",
            "Cross-platform hoàn toàn"
        ],
        relatedTerms: ["Live Ops", "Engagement Loop", "Player Retention", "Event Design"]
    },
    revenue: "> 20 tỷ USD tổng doanh thu",
    milestones: [
        "09/2017: Ra mắt Battle Royale mode",
        "2018: Đạt 125 triệu người chơi",
        "2020: Travis Scott concert đạt 12 triệu người xem",
        "2024: Vẫn top live-service game"
    ],
    marketAnalysis: "Đỉnh cao live-service, kiếm tiền không chỉ từ gameplay mà từ văn hóa và sự kiện.",
    criticalAcclaim: "Metacritic: 81/100",
    playerBase: "> 400 triệu người đăng ký",
    culturalImpact: "Biến game thành nền tảng giải trí (concert, collab Marvel, Star Wars)."
},
{
    id: "red_dead_redemption_2",
    name: "Red Dead Redemption 2",
    shortDesc: "Mô phỏng thế giới sống với độ chi tiết cực đoan.",
    tags: ["Open World", "Simulation", "Narrative"],
    icon: "fa-horse",
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    analysis: {
        successReason: "Đẩy immersion lên cực hạn, mỗi hành động nhỏ đều có phản hồi hệ thống.",
        designHighlights: [
            "NPC có lịch trình và hành vi riêng",
            "Animation chi tiết từng hành động",
            "World phản ứng theo hành vi người chơi"
        ],
        relatedTerms: ["Immersion", "Simulation System", "World Reactivity", "Detail Density"]
    },
    revenue: "> 60 triệu bản",
    milestones: [
        "10/2018: Phát hành, đạt 17 triệu bản trong 2 tuần",
        "2020: PC release",
        "2024: Vượt 60 triệu bản"
    ],
    marketAnalysis: "Rockstar bán trải nghiệm 'sống trong thế giới', không chỉ chơi game.",
    criticalAcclaim: "Metacritic: 97/100",
    playerBase: "> 70 triệu người chơi",
    culturalImpact: "Đặt chuẩn mới cho immersion và world simulation."
},
{
    id: "monster_hunter_world",
    name: "Monster Hunter: World",
    shortDesc: "Loop săn quái gây nghiện với progression rõ ràng.",
    tags: ["Action", "Co-op", "Grinding"],
    icon: "fa-dragon",
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
    analysis: {
        successReason: "Core loop cực kỳ chặt: săn → loot → craft → mạnh hơn → săn tiếp.",
        designHighlights: [
            "Boss design có pattern rõ ràng",
            "Gear progression tạo động lực grind",
            "Co-op tăng tính replay"
        ],
        relatedTerms: ["Core Loop", "Grinding Loop", "Boss Design", "Progression System"]
    },
    revenue: "> 25 triệu bản",
    milestones: [
        "01/2018: Phát hành, bán 5 triệu bản trong 3 ngày",
        "2020: Iceborne mở rộng thành công",
        "2024: Trở thành game bán chạy nhất Capcom"
    ],
    marketAnalysis: "Biến gameplay grind thành thứ gây nghiện có kiểm soát.",
    criticalAcclaim: "Metacritic: 90/100",
    playerBase: "> 30 triệu người chơi",
    culturalImpact: "Đưa Monster Hunter thành mainstream toàn cầu."
},
{
    id: "slay_the_spire",
    name: "Slay the Spire",
    shortDesc: "Deck-building roguelike với thiết kế hệ thống cực sạch.",
    tags: ["Card Game", "Roguelike", "Strategy"],
    icon: "fa-layer-group",
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    analysis: {
        successReason: "Mỗi run là một bài toán chiến thuật, không có lựa chọn thừa.",
        designHighlights: [
            "Card synergy cực rõ ràng",
            "Random nhưng luôn fair",
            "Decision density cao"
        ],
        relatedTerms: ["Deck-building", "Decision Making", "Run-based Design", "System Clarity"]
    },
    revenue: "> 5 triệu bản",
    milestones: [
        "2017: Early Access",
        "2019: Release chính thức",
        "2023: Vượt 5 triệu bản"
    ],
    marketAnalysis: "Game indie nhưng design đẳng cấp textbook.",
    criticalAcclaim: "Metacritic: 89/100",
    playerBase: "> 6 triệu người chơi",
    culturalImpact: "Định nghĩa lại thể loại deck-building roguelike."
},
{
    id: "overwatch",
    name: "Overwatch",
    shortDesc: "Hero shooter với thiết kế vai trò rõ ràng và teamwork.",
    tags: ["FPS", "Hero Shooter", "Team-based"],
    icon: "fa-users",
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2357570/header.jpg",
    analysis: {
        successReason: "Thiết kế hero theo role tạo teamwork tự nhiên.",
        designHighlights: [
            "Tank / DPS / Support rõ ràng",
            "Hero abilities tạo synergy team",
            "Visual clarity cực tốt"
        ],
        relatedTerms: ["Role Design", "Team Synergy", "Hero Design", "Game Feel"]
    },
    revenue: "> 1 tỷ USD trong năm đầu",
    milestones: [
        "05/2016: Phát hành",
        "2017: Đạt 35 triệu người chơi",
        "2022: Overwatch 2 ra mắt"
    ],
    marketAnalysis: "Blizzard biến FPS thành game teamwork đúng nghĩa.",
    criticalAcclaim: "Metacritic: 91/100, GOTY 2016",
    playerBase: "> 50 triệu người chơi",
    culturalImpact: "Định hình hero shooter hiện đại."
},
{
    id: "terraria",
    name: "Terraria",
    shortDesc: "2D sandbox nhưng depth hệ thống cực lớn.",
    tags: ["Sandbox", "Survival", "2D"],
    icon: "fa-pickaxe",
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    analysis: {
        successReason: "Kết hợp sandbox + progression + combat tạo chiều sâu vượt Minecraft ở gameplay.",
        designHighlights: [
            "Boss progression rõ ràng",
            "Item variety cực lớn",
            "Exploration + combat loop chặt"
        ],
        relatedTerms: ["Sandbox", "Progression Loop", "Exploration", "Loot System"]
    },
    revenue: "> 45 triệu bản",
    milestones: [
        "2011: Phát hành",
        "2015: Đạt 10 triệu bản",
        "2024: Vượt 45 triệu bản"
    ],
    marketAnalysis: "Indie nhưng depth hệ thống ngang AAA.",
    criticalAcclaim: "Metacritic: 83/100",
    playerBase: "> 50 triệu người chơi",
    culturalImpact: "Chứng minh 2D vẫn có thể cực kỳ sâu."
}
    // ... các game còn lại bạn có thể tiếp tục thêm với cấu trúc tương tự
];

// DOM elements liên quan games
const gamesTab = document.getElementById('gamesTab');
const gamesGrid = document.getElementById('gamesGrid');
const gameModalOverlay = document.getElementById('gameModal');
const closeGameModalBtn = document.getElementById('closeGameModalBtn');
const gameModalTitle = document.getElementById('gameModalTitle');
const gameModalContent = document.getElementById('gameModalContent');

// Hàm escape HTML (dùng chung)
function escapeHtmlGame(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Render danh sách game (có ảnh)
function renderGames() {
    if (!gamesGrid) return;
    let cardsHTML = '';
    gamesData.forEach((game, idx) => {
        cardsHTML += `
            <div class="game-card" data-game-id="${game.id}">
                <div class="game-card-image">
                    <img src="${escapeHtmlGame(game.imageUrl)}" alt="${escapeHtmlGame(game.name)}" loading="lazy" onerror="this.onerror=null; this.parentElement.style.display='none'; this.parentElement.nextElementSibling?.classList.add('fallback-icon');">
                </div>
                <div class="game-card-icon fallback-icon" style="display: none;"><i class="fas ${game.icon}"></i></div>
                <div class="game-card-title">${escapeHtmlGame(game.name)}</div>
                <div class="game-card-desc">${escapeHtmlGame(game.shortDesc)}</div>
                <div class="game-card-tags">
                    ${game.tags.map(tag => `<span class="game-tag">${escapeHtmlGame(tag)}</span>`).join('')}
                </div>
            </div>
        `;
    });
    gamesGrid.innerHTML = cardsHTML;
    
    // Gắn sự kiện click cho từng game card
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.dataset.gameId;
            const game = gamesData.find(g => g.id === gameId);
            if (game) openGameModal(game);
        });
    });
}

// Mở modal game với thông tin mở rộng
function openGameModal(game) {
    gameModalTitle.innerText = game.name;
    
    // Tạo HTML hiển thị thông tin thị trường
    let marketHtml = '';
    if (game.revenue || game.milestones || game.marketAnalysis) {
        marketHtml = `
            <div style="margin: 1.5rem 0 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <strong><i class="fas fa-chart-line"></i> PHÂN TÍCH THỊ TRƯỜNG</strong>
                ${game.revenue ? `<div style="margin-top: 0.8rem;"><i class="fas fa-dollar-sign"></i> <strong>Doanh thu ước tính:</strong> ${escapeHtmlGame(game.revenue)}</div>` : ''}
                ${game.criticalAcclaim ? `<div><i class="fas fa-star"></i> <strong>Điểm đánh giá:</strong> ${escapeHtmlGame(game.criticalAcclaim)}</div>` : ''}
                ${game.playerBase ? `<div><i class="fas fa-users"></i> <strong>Lượng người chơi:</strong> ${escapeHtmlGame(game.playerBase)}</div>` : ''}
                ${game.culturalImpact ? `<div><i class="fas fa-globe"></i> <strong>Tác động văn hóa:</strong> ${escapeHtmlGame(game.culturalImpact)}</div>` : ''}
            </div>
            ${game.milestones ? `
            <div style="margin-top: 1rem;">
                <strong><i class="fas fa-calendar-alt"></i> Mốc son & sự kiện nổi bật:</strong>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    ${game.milestones.map(m => `<li>${escapeHtmlGame(m)}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            ${game.marketAnalysis ? `
            <div style="margin-top: 1rem; background: rgba(0,0,0,0.2); padding: 0.8rem; border-radius: 12px;">
                <strong><i class="fas fa-chart-simple"></i> Phân tích thành công:</strong><br>
                ${escapeHtmlGame(game.marketAnalysis)}
            </div>
            ` : ''}
        `;
    }
    
    // Tạo nội dung phân tích
    let relatedTermsHtml = '';
    if (game.analysis.relatedTerms && game.analysis.relatedTerms.length) {
        relatedTermsHtml = `
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <strong><i class="fas fa-tags"></i> Thuật ngữ liên quan:</strong><br>
                ${game.analysis.relatedTerms.map(term => `<span class="game-tag" style="cursor:pointer;" data-term="${term}">${term}</span>`).join(' ')}
            </div>
        `;
    }
    
    gameModalContent.innerHTML = `
        <div style="margin-bottom: 1.2rem;">
            <span class="game-tag"><i class="fas ${game.icon}"></i> ${game.tags.join(' • ')}</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 16px; margin-bottom: 1rem;">
            <strong><i class="fas fa-trophy"></i> Lý do thành công:</strong><br>
            ${escapeHtmlGame(game.analysis.successReason)}
        </div>
        <div>
            <strong><i class="fas fa-lightbulb"></i> Điểm thiết kế nổi bật:</strong>
            <ul style="margin-top: 8px; margin-left: 20px;">
                ${game.analysis.designHighlights.map(point => `<li>${escapeHtmlGame(point)}</li>`).join('')}
            </ul>
        </div>
        ${marketHtml}
        ${relatedTermsHtml}
    `;
    
    gameModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Gắn sự kiện cho các tag thuật ngữ
    document.querySelectorAll('#gameModalContent .game-tag[data-term]').forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', (e) => {
            const termName = tag.dataset.term;
            const event = new CustomEvent('openTermFromGame', { detail: { term: termName } });
            window.dispatchEvent(event);
            closeGameModal();
        });
    });
}

// Đóng modal game
function closeGameModal() {
    gameModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Xử lý click nền mờ
function handleGameModalOverlayClick(e) {
    if (e.target === gameModalOverlay) closeGameModal();
}

// Gán sự kiện games
function initGamesEvents() {
    closeGameModalBtn.addEventListener('click', closeGameModal);
    gameModalOverlay.addEventListener('click', handleGameModalOverlayClick);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gameModalOverlay.classList.contains('active')) closeGameModal();
    });
}
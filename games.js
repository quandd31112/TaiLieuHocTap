// ==================== GAMES MODULE ====================
// Dữ liệu game đã được bổ sung thông tin thị trường chi tiết

const gamesData = [
    {
        id: "zelda_botw",
        name: "The Legend of Zelda: Breath of the Wild",
        shortDesc: "Mở rộng ranh giới của thế giới mở, trao quyền tự do sáng tạo cho người chơi.",
        tags: ["Thế giới mở", "Vật lý tương tác", "Khám phá"],
        icon: "fa-tree",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1724973071",
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
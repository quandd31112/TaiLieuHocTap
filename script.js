// ---------- DANH SÁCH THUẬT NGỮ GAME DESIGNER ----------
const glossaryData = [
    {
        term: "Game Mechanics",
        definition: "Cơ chế trò chơi là tập hợp các quy tắc, hệ thống và tương tác cốt lõi xác định cách người chơi hành động và thế giới phản hồi. Bao gồm nhảy, chiến đấu, thu thập tài nguyên, hệ thống nhiệm vụ — nền tảng cho mọi trải nghiệm gameplay."
    },
    {
        term: "Level Design",
        definition: "Thiết kế màn chơi tập trung vào việc xây dựng không gian, bố cục, nhịp độ thử thách và dẫn dắt người chơi. Level Design ảnh hưởng trực tiếp đến cảm xúc, sự khám phá và tính tái chơi."
    },
    {
        term: "NPC (Non-Player Character)",
        definition: "Nhân vật không do người chơi điều khiển, được lập trình bởi AI để cung cấp cốt truyện, nhiệm vụ, đối thoại hoặc tạo thử thách. NPC làm sống động thế giới game và thúc đẩy mạch truyện."
    },
    {
        term: "Loot Box",
        definition: "Cơ chế kiếm tiền dưới dạng hộp phần thưởng ngẫu nhiên, chứa vật phẩm mỹ phẩm hoặc tăng sức mạnh. Gây tranh cãi vì tính may rủi, nhưng được nhiều game AAA sử dụng để duy trì doanh thu."
    },
    {
        term: "RPG Elements",
        definition: "Yếu tố nhập vai như hệ thống chỉ số (stats), cây kỹ năng, trang bị, và lựa chọn phân nhánh cốt truyện. Giúp người chơi phát triển nhân vật và gia tăng chiều sâu chiến thuật."
    },
    {
        term: "Sandbox",
        definition: "Thiết kế thế giới mở, trao quyền tự do sáng tạo cho người chơi mà không áp đặt mục tiêu tuyến tính. Minecraft, GTA là ví dụ điển hình: người chơi tự tạo ra trải nghiệm riêng."
    },
    {
        term: "Procedural Generation",
        definition: "Sinh nội dung (bản đồ, nhiệm vụ, item) theo thuật toán ngẫu nhiên thay vì làm thủ công. Tăng tính tái chơi và giảm khối lượng sản xuất, thường thấy trong roguelike và game khám phá."
    },
    {
        term: "Player Agency",
        definition: "Mức độ ảnh hưởng thực sự mà người chơi có thể tác động lên thế giới game, cốt truyện hoặc kết cục. Agency cao tạo cảm giác ý nghĩa và cá nhân hóa hành trình."
    },
    {
        term: "Emergent Gameplay",
        definition: "Tình huống gameplay phát sinh bất ngờ từ sự tương tác giữa các cơ chế đơn giản. Ví dụ: combo kỹ năng không được lập trình sẵn hoặc chiến thuật sáng tạo từ người chơi."
    },
    {
        term: "Game Loop",
        definition: "Vòng lặp cốt lõi lặp đi lặp lại trong suốt quá trình chơi: hành động → phản hồi → tiến triển. Thiết kế game loop hấp dẫn là yếu tố then chốt giữ chân người chơi."
    },
    {
        term: "Balancing",
        definition: "Quá trình điều chỉnh chỉ số nhân vật, vũ khí, kẻ địch để đảm bảo công bằng, thử thách vừa phải, tránh chiến thuật quá mạnh (overpowered) tạo cảm giác nhàm chán hoặc bất công."
    },
    {
        term: "Diegetic UI",
        definition: "Giao diện người dùng được tích hợp trực tiếp vào không gian game (ví dụ: màn hình hiển thị trên tay nhân vật, bản đồ trong game). Tăng tính nhập vai và giảm phá vỡ bầu không khí."
    },
    {
        term: "PvE / PvP",
        definition: "PvE (Player vs Environment): người chơi chống lại hệ thống game, quái vật. PvP (Player vs Player): đấu giữa người với người. Hai phương thức định hình lối chơi và cộng đồng."
    },
    {
        term: "Ragdoll Physics",
        definition: "Mô phỏng vật lý cho cơ thể nhân vật khi chết hoặc bị ngã, tạo hiệu ứng chân thực, hài hước hoặc kịch tính. Góp phần tăng tính thị giác và cảm xúc trong game hành động."
    },
    {
        term: "Metagame",
        definition: "'Trò chơi bên ngoài trò chơi' – chiến thuật, meta xoay quanh lựa chọn tối ưu dựa trên cộng đồng, bảng xếp hạng hoặc cân bằng phiên bản. Ảnh hưởng lớn đến game competitive."
    }
];

// DOM elements
const gridContainer = document.getElementById('termsGrid');
const searchInput = document.getElementById('searchInput');
const resultCountSpan = document.getElementById('resultCount');
const modalOverlay = document.getElementById('termModal');
const modalTitle = document.getElementById('modalTermTitle');
const modalDefinitionPara = document.getElementById('modalDefinition');
const closeModalBtn = document.getElementById('closeModalBtn');

// Render cards theo từ khóa tìm kiếm
function renderTerms(filterKeyword = '') {
    const keywordLower = filterKeyword.trim().toLowerCase();
    let filteredTerms = [...glossaryData];

    if (keywordLower !== '') {
        filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(keywordLower) ||
            item.definition.toLowerCase().includes(keywordLower)
        );
    }

    const total = filteredTerms.length;
    resultCountSpan.innerHTML = `<i class="fas fa-layer-group"></i> ${total} thuật ngữ`;

    if (filteredTerms.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-skull" style="font-size: 2rem; opacity: 0.6;"></i>
                <p style="margin-top: 1rem;">Không tìm thấy thuật ngữ "${escapeHtml(filterKeyword)}"</p>
                <p style="font-size: 0.8rem;">Hãy thử từ khóa khác như Mechanics, Level Design, NPC...</p>
            </div>
        `;
        return;
    }

    let cardsHTML = '';
    for (let i = 0; i < filteredTerms.length; i++) {
        const termObj = filteredTerms[i];
        const iconClass = getRandomEpicIcon(i);

        cardsHTML += `
            <div class="term-card" data-term-name="${escapeHtml(termObj.term)}">
                <div class="card-icon"><i class="${iconClass}"></i></div>
                <div class="term-name">${escapeHtml(termObj.term)}</div>
                <div class="click-hint"><i class="fas fa-mouse-pointer"></i> BẤM ĐỂ XEM CHI TIẾT</div>
            </div>
        `;
    }

    gridContainer.innerHTML = cardsHTML;
}

// Chọn icon
function getRandomEpicIcon(index) {
    const icons = [
        'fas fa-cogs', 'fas fa-map', 'fas fa-robot', 'fas fa-cube',
        'fas fa-dragon', 'fas fa-dice-d6', 'fas fa-code-branch', 'fas fa-users',
        'fas fa-hand-peace', 'fas fa-gamepad', 'fas fa-chess-queen', 'fas fa-skull',
        'fas fa-shield-alt', 'fas fa-meteor', 'fas fa-hat-wizard'
    ];
    return icons[index % icons.length];
}

// Escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/[&<>]/g, function (m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        })
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function (c) {
            return c;
        });
}

// Mở modal
function openModal(termName) {
    const foundTerm = glossaryData.find(item => item.term === termName);

    if (foundTerm) {
        modalTitle.innerText = foundTerm.term;
        modalDefinitionPara.innerText = foundTerm.definition;
    } else {
        modalTitle.innerText = termName;
        modalDefinitionPara.innerText = 'Định nghĩa chi tiết hiện đang được cập nhật. Hãy khám phá thêm thuật ngữ khác!';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Đóng modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Click card
function handleCardClick(e) {
    const card = e.target.closest('.term-card');
    if (!card) return;

    const termAttr = card.getAttribute('data-term-name');
    if (termAttr) {
        openModal(termAttr);
    }
}

// Search
function onSearchInput() {
    const keyword = searchInput.value;
    renderTerms(keyword);
}

// ESC để đóng modal
function handleEscKey(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
}

// Click nền mờ để đóng modal
function handleOverlayClick(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
}

// Gắn sự kiện
function bindEvents() {
    searchInput.addEventListener('input', onSearchInput);
    gridContainer.addEventListener('click', handleCardClick);
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', handleOverlayClick);
    window.addEventListener('keydown', handleEscKey);
}

// Init
function init() {
    renderTerms('');
    bindEvents();
}

init();

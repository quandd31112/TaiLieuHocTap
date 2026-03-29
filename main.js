// ==================== MAIN MODULE ====================
// File này chứa logic chung: tab switching, quiz, và tích hợp các module khác.

// DOM elements
const tabBtns = document.querySelectorAll('.tab-btn');
const glossaryToolbar = document.querySelector('.glossary-toolbar');
const quizBtn = document.getElementById('quizBtn');

// ==================== TAB SWITCHING ====================
function switchTab(tabId) {
    // Cập nhật active class cho tab buttons
    tabBtns.forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Hiển thị nội dung tab tương ứng
    if (tabId === 'glossary') {
        document.getElementById('glossaryTab').classList.add('active');
        document.getElementById('gamesTab').classList.remove('active');
        document.getElementById('bookTab').classList.remove('active');
        glossaryToolbar.style.display = 'flex';
        if (typeof renderTerms === 'function') renderTerms(searchInput.value);
    } else if (tabId === 'games') {
        document.getElementById('glossaryTab').classList.remove('active');
        document.getElementById('gamesTab').classList.add('active');
        document.getElementById('bookTab').classList.remove('active');
        glossaryToolbar.style.display = 'none';
        if (typeof renderGames === 'function') renderGames();
    } else if (tabId === 'book') {
        document.getElementById('glossaryTab').classList.remove('active');
        document.getElementById('gamesTab').classList.remove('active');
        document.getElementById('bookTab').classList.add('active');
        glossaryToolbar.style.display = 'none';
        // Khởi tạo nội dung sách nếu chưa
        if (typeof window.initBookTab === 'function') window.initBookTab();
    }
}

// ==================== QUIZ LOGIC ====================
let currentQuizQuestion = null;
let currentOptions = [];
let quizAnswered = false;

function getRandomWrongTerms(correctTerm, count = 3) {
    const candidates = glossaryData.filter(item => item.term !== correctTerm);
    for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    return candidates.slice(0, count).map(item => item.term);
}

function generateQuizQuestion() {
    const randomIndex = Math.floor(Math.random() * glossaryData.length);
    const correct = glossaryData[randomIndex];
    const wrongTerms = getRandomWrongTerms(correct.term, 3);
    const options = [correct.term, ...wrongTerms];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    currentQuizQuestion = { term: correct.term, definition: correct.definition };
    currentOptions = options;
    quizAnswered = false;
}

function renderQuiz() {
    if (!currentQuizQuestion) generateQuizQuestion();
    document.getElementById('quizDefinition').innerText = currentQuizQuestion.definition;
    const optionsDiv = document.getElementById('quizOptions');
    const feedbackDiv = document.getElementById('quizFeedback');
    optionsDiv.innerHTML = '';
    feedbackDiv.innerHTML = '';
    feedbackDiv.className = 'quiz-feedback';
    currentOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => handleQuizAnswer(opt, btn);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('nextQuizBtn').style.display = 'block';
}

function handleQuizAnswer(selected, btnElement) {
    if (quizAnswered) return;
    quizAnswered = true;
    const allOptions = document.querySelectorAll('.quiz-option');
    const feedbackDiv = document.getElementById('quizFeedback');
    const isCorrect = (selected === currentQuizQuestion.term);
    if (isCorrect) {
        feedbackDiv.innerHTML = `<i class="fas fa-check-circle"></i> Chính xác! "${selected}" là đáp án đúng.`;
        feedbackDiv.className = 'quiz-feedback correct';
    } else {
        feedbackDiv.innerHTML = `<i class="fas fa-times-circle"></i> Sai rồi. Đáp án đúng là: <strong>${currentQuizQuestion.term}</strong>.`;
        feedbackDiv.className = 'quiz-feedback wrong';
    }
    allOptions.forEach(opt => {
        opt.classList.add('disabled');
        opt.onclick = null;
    });
}

function nextQuizQuestion() {
    if (!quizAnswered) {
        if (confirm('Bạn chưa trả lời câu này. Muốn chuyển sang câu khác?')) {
            generateQuizQuestion();
            renderQuiz();
        }
    } else {
        generateQuizQuestion();
        renderQuiz();
    }
}

function openQuizModal() {
    generateQuizQuestion();
    renderQuiz();
    const quizModal = document.getElementById('quizModal');
    quizModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuizModal() {
    const quizModal = document.getElementById('quizModal');
    quizModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== GLOBAL EVENT HANDLERS ====================
function bindGlobalEvents() {
    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Quiz
    quizBtn.addEventListener('click', openQuizModal);
    document.getElementById('closeQuizBtn').addEventListener('click', closeQuizModal);
    document.getElementById('nextQuizBtn').addEventListener('click', nextQuizQuestion);
    const quizModal = document.getElementById('quizModal');
    if (quizModal) quizModal.addEventListener('click', (e) => { if (e.target === quizModal) closeQuizModal(); });
    
    // Lắng nghe sự kiện mở term từ game modal
    window.addEventListener('openTermFromGame', (e) => {
        if (typeof openTermModal === 'function') {
            openTermModal(e.detail.term);
        }
    });
    
    // Đóng modal khi nhấn Escape (quiz modal)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const quizModalElem = document.getElementById('quizModal');
            if (quizModalElem && quizModalElem.classList.contains('active')) closeQuizModal();
        }
    });
}

// ==================== INIT ====================
function init() {
    // Khởi tạo glossary (nếu có hàm initGlossaryEvents)
    if (typeof initGlossaryEvents === 'function') initGlossaryEvents();
    // Khởi tạo games (nếu có hàm initGamesEvents)
    if (typeof initGamesEvents === 'function') initGamesEvents();
    bindGlobalEvents();
    // Mặc định hiển thị tab glossary
    switchTab('glossary');
}

// Chạy khi DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
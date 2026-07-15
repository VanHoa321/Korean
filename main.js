// ==========================================
// BIẾN TOÀN CỤC & KHỞI TẠO
// ==========================================
var starredCards = (JSON.parse(localStorage.getItem('myStarredCards')) || []).map(String);
var currentLevel = 'TOPIK 1';
var currentCat = 'new';
var currentLes = 'All';
var isFlashcard = true;
var isReverseLang = false; // false: Trên Việt - Dưới Hàn | true: Trên Hàn - Dưới Việt

window.onload = function () {
    renderLessonButtons(); 
    filterCards();      
    initBackToTop(); 
};

function renderLessonButtons() {
    const container = document.getElementById('lesson-buttons');
    if (!container) return;
    
    container.innerHTML = '<span class="fw-bold text-theme small me-2"><i class="fi fi-rr-bookmark me-1"></i>CHỌN BÀI</span>';
    
    let btnAll = document.createElement('button');
    btnAll.className = "btn " + (currentLes === 'All' ? "btn-theme" : "btn-theme-outline") + " btn-sm rounded-pill filter-btn";
    btnAll.innerText = "Tất cả";
    btnAll.onclick = function() { setLesson('All', this); };
    container.appendChild(btnAll);

    for (let i = 1; i <= 15; i++) {
        let lessonName = "Bài " + i;
        let btn = document.createElement('button');
        btn.className = "btn " + (currentLes === lessonName ? "btn-theme" : "btn-theme-outline") + " btn-sm rounded-pill filter-btn";
        btn.innerText = lessonName;
        btn.onclick = function() { setLesson(lessonName, this); };
        container.appendChild(btn);
    }
}

// ==========================================
// LOGIC LỌC DỮ LIỆU & ĐIỀU HƯỚNG BỘ LỌC
// ==========================================

function setLevel(level, btn) {
    currentLevel = level;
    currentLes = 'All'; 
    
    if (btn && btn.parentElement) {
        let siblings = btn.parentElement.querySelectorAll('.filter-btn');
        siblings.forEach(b => {
            b.classList.remove('btn-theme');
            b.classList.add('btn-theme-outline');
        });
        btn.classList.remove('btn-theme-outline');
        btn.classList.add('btn-theme');
    }
    
    renderLessonButtons(); 
    filterCards();
}

function setCategory(cat, btn) {
    currentCat = cat;
    updateActiveButton(btn);
    
    const lessonSection = document.getElementById('lesson-buttons').parentElement;
    if (currentCat === 'grammar' || currentCat === 'personal') {
        lessonSection.style.display = 'none';
        currentLes = 'All';
    } else {
        lessonSection.style.display = 'flex';
    }

    // Xử lý thay đổi giao diện Nút Cấp Học
    const levelContainer = document.getElementById('level-buttons');
    if (levelContainer) {
        if (currentCat === 'grammar') {
            levelContainer.innerHTML = `
                <span class="fw-bold text-theme small me-2"><i class="fi fi-rr-layers me-1"></i>CẤP HỌC</span>
                <button class="btn btn-theme btn-sm rounded-pill filter-btn active" onclick="setLevel('Sơ cấp', this)">Sơ cấp</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('Trung cấp', this)">Trung cấp</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('Cao cấp', this)">Cao cấp</button>
            `;
            currentLevel = 'Sơ cấp'; 
        } else {
            levelContainer.innerHTML = `
                <span class="fw-bold text-theme small me-2"><i class="fi fi-rr-layers me-1"></i>CẤP HỌC</span>
                <button class="btn btn-theme btn-sm rounded-pill filter-btn active" onclick="setLevel('TOPIK 1', this)">SC 1</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('TOPIK 2', this)">SC 2</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('TOPIK 3', this)">TC 3</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('TOPIK 4', this)">TC 4</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('TOPIK 5', this)">CC 5</button>
                <button class="btn btn-theme-outline btn-sm rounded-pill filter-btn" onclick="setLevel('TOPIK 6', this)">CC 6</button>
            `;
            currentLevel = 'TOPIK 1'; 
        }
    }

    renderLessonButtons();
    filterCards();
}

function setLesson(les, btn) {
    currentLes = les;
    updateActiveButton(btn);
    filterCards();
}

function updateActiveButton(btn) {
    if (!btn || !btn.parentElement) return;
    
    let rowContainer = btn.closest('.d-flex');
    if (!rowContainer) return;

    let siblings = rowContainer.querySelectorAll('.filter-btn, #flashcard-btn, #quiz-btn, #write-btn');
    siblings.forEach(b => {
        b.classList.remove('btn-theme');
        b.classList.add('btn-theme-outline');
        b.classList.remove('active');
    });
    
    btn.classList.remove('btn-theme-outline');
    btn.classList.add('btn-theme');
    btn.classList.add('active');
}

function filterCards() {
    var keyword = document.getElementById('searchInput').value.toLowerCase().trim();

    var filtered = data.filter(i => {
        let passLevel = (i.level === currentLevel);

        let passCat = false;
        if (currentCat === 'All') passCat = true;
        else if (currentCat === 'starred') passCat = starredCards.includes(String(i.id));
        else if (i.type === currentCat) passCat = true;

        let passLes = false;
        if (currentLes === 'All') passLes = true;
        else if (i.lesson === currentLes) passLes = true;

        let passKey = true;
        if (keyword !== '') {
            passKey = ((i.vn && i.vn.toLowerCase().includes(keyword)) ||
            (i.kr && i.kr.toLowerCase().includes(keyword)));
        }

        return passLevel && passCat && passLes && passKey;
    });

    renderCards(filtered);
}

function shuffleCards() {
    var container = document.getElementById('card-container');
    var cards = Array.from(container.children);
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        container.appendChild(cards[j]);
    }
}

// ==========================================
// RENDER GIAO DIỆN THÈ THỂ HIỆN (GRID)
// ==========================================
function renderCards(cards) {
    const container = document.getElementById('card-container');
    if (!container) return;
    container.innerHTML = '';
    
    cards.forEach(card => {
        let colClass = (card.type === 'translate' || card.type === 'practice' || card.type === 'grammar') ? 'col-12' : 'col-6 col-md-4 col-lg-3';
        
        const wrapper = document.createElement('div');
        wrapper.className = colClass;
        
        const div = document.createElement('div');
        div.className = 'flashcard' + ((card.type === 'translate' || card.type === 'practice') ? ' translate-card' : '');
        
        let safeKr = (card.kr || '').replace(/'/g, "\\'");
        let isStarred = starredCards.includes(String(card.id));
        let starIcon = isStarred ? "fi-sr-star" : "fi-rr-star";
        let starHTML = `<i class="fi ${starIcon} star-btn ${isStarred ? 'active' : ''}" onclick="toggleStar('${card.id}', event, this)"></i>`;
        let speakerHTML = `<i class="fi fi-rr-volume speaker-btn" title="Nghe phát âm" onclick="speakKorean('${safeKr}', event)"></i>`;
        
        if (isFlashcard) {
            div.className = 'flip-card';
            let frontText = !isReverseLang ? (card.vn || '') : card.kr;
            let frontClass = !isReverseLang ? "vn-text" : "kr-text";
            let backText = !isReverseLang ? card.kr : (card.vn || '');
            let backClass = !isReverseLang ? "kr-text" : "vn-text";
            let backNote = (!isReverseLang && card.note) ? `<div class="card-note mt-2">${card.note}</div>` : '';
            let speakerFront = isReverseLang ? speakerHTML : '';
            let speakerBack = !isReverseLang ? speakerHTML : '';
            
            div.onclick = function(e) {
                if(e.target.tagName === 'I') return;
                this.classList.toggle('flipped');
            };
            div.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${starHTML}
                        <div class="${frontClass === 'kr-text' ? 'korean-text' : ''} ${frontClass}">${frontText} ${speakerFront}</div>
                    </div>
                    <div class="flip-card-back">
                        <div class="${backClass === 'kr-text' ? 'korean-text' : ''} ${backClass}">${backText} ${speakerBack}</div>
                        ${backNote}
                    </div>
                </div>
            `;
        } else {
            if (card.type === 'grammar') {
                div.innerHTML = starHTML + `
                    <div class="korean-text kr-text text-start mb-2">${card.kr} ${speakerHTML}</div>
                    <div class="vn-text text-start fw-bold mb-2">${card.vn}</div>
                    ${card.note ? `<div class="card-note text-start small text-muted border-top pt-2"><i class="fi fi-rr-info me-1"></i>${card.note}</div>` : ''}`;
            } else {
                div.innerHTML = starHTML + `
                    <div class="korean-text kr-text mb-1">${card.kr} ${speakerHTML}</div>
                    <div class="vn-text text-muted small">${card.vn || ''}</div>`;
            }
        }
        
        wrapper.appendChild(div);
        container.appendChild(wrapper);
    });
}

// ==========================================
// CÁC HÀM TIỆN ÍCH & HỆ THỐNG PHÁT ÂM
// ==========================================

function toggleStar(cardId, event, iconElement) {
    event.stopPropagation();
    
    cardId = String(cardId); 
    
    let index = starredCards.indexOf(cardId);

    if (index === -1) {
        starredCards.push(cardId);
        iconElement.classList.remove('fi-rr-star');
        iconElement.classList.add('fi-sr-star', 'active');
    } else {
        starredCards.splice(index, 1);
        iconElement.classList.remove('fi-sr-star', 'active');
        iconElement.classList.add('fi-rr-star');
        if (currentCat === 'starred') filterCards();
    }
    localStorage.setItem('myStarredCards', JSON.stringify(starredCards));
}

function speakKorean(text, event) {
    if (event) event.stopPropagation();
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        var msg = new SpeechSynthesisUtterance(text);
        var voices = window.speechSynthesis.getVoices();

        var koreanVoices = voices.filter(v => v.lang.includes('ko-KR') || v.lang.includes('ko_KR'));
        var selectedVoice = null;

        if (koreanVoices.length > 0) {
            selectedVoice = koreanVoices.find(v => v.name.includes('Yuna') || v.name.includes('Sora'));
            if (!selectedVoice) {
                selectedVoice = koreanVoices.find(v => v.name.includes('Google') && !v.name.toLowerCase().includes('male'));
            }
            if (!selectedVoice) {
                selectedVoice = koreanVoices.find(v => !v.name.toLowerCase().includes('male')) || koreanVoices[0];
            }
        }

        if (selectedVoice) msg.voice = selectedVoice;
        msg.lang = 'ko-KR';
        msg.rate = 0.85; 
        msg.pitch = 1.2; 

        window.speechSynthesis.speak(msg);
    } else {
        alert("Trình duyệt không hỗ trợ phát âm!");
    }
}

function toggleFlashcardMode(btn) {
    isFlashcard = true;
    isQuiz = false;
    isWriting = false;
    updateActiveButton(btn);
    filterCards();
}

function toggleLangDirection(btn) {
    isReverseLang = !isReverseLang; 

    if (btn) {
        if (isReverseLang) {
            btn.classList.remove('btn-theme-outline');
            btn.classList.add('btn-theme');
            btn.title = "Mặt trên hiện tại: Tiếng Hàn";
        } else {
            btn.classList.remove('btn-theme');
            btn.classList.add('btn-theme-outline');
            btn.title = "Mặt trên hiện tại: Tiếng Việt";
        }
    }
    filterCards();
}

function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('show'); 
        } else {
            btn.classList.remove('show'); 
        }
    });

    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}
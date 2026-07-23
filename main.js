// ==========================================
// BIẾN TOÀN CỤC & KHỞI TẠO
// ==========================================
var starredCards = [];
var currentLevel = 'TOPIK 1';
var currentCat = 'new';
var currentLes = 'All';
var isFlashcard = true;
var isReverseLang = false; 
var personalSets = {}; 
var currentPersonalSetId = null;

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAN2I8wjOOxuhcAMd9kmZPqwtBYp0NyTYE",
    authDomain: "korean-281d5.firebaseapp.com",
    projectId: "korean-281d5",
    storageBucket: "korean-281d5.firebasestorage.app",
    messagingSenderId: "154349188593",
    appId: "1:154349188593:web:d7e38d9751c45f9e81c050",
    measurementId: "G-NNVMWW6JXM"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userId = "user_hoavv"; 

let manageSetsModal, customWordModal;

window.onload = function () {
    // Khởi tạo Modals
    manageSetsModal = new bootstrap.Modal(document.getElementById('manageSetsModal'));
    customWordModal = new bootstrap.Modal(document.getElementById('customWordModal'));

    loadStarredCardsFromFirebase().then(() => {
        renderLessonButtons(); 
        filterCards();      
        initBackToTop(); 
    });
};

// ==========================================
// KẾT NỐI FIREBASE & TẢI DỮ LIỆU
// ==========================================
async function loadStarredCardsFromFirebase() {
    try {
        const docRef = db.collection("users").doc(userId);
        const docSnap = await docRef.get();
        
        if (docSnap.exists) {
            let data = docSnap.data();
            starredCards = data.starredCards || [];
            personalSets = data.personalSets || {}; 
        } else {
            await docRef.set({ starredCards: [], personalSets: {} });
            starredCards = [];
            personalSets = {};
        }
    } catch (error) {
        console.error("Lỗi khi tải Firebase, sử dụng localStorage dự phòng:", error);
        starredCards = (JSON.parse(localStorage.getItem('myStarredCards')) || []).map(String);
        personalSets = JSON.parse(localStorage.getItem('myPersonalSets')) || {};
    }
}

// ==========================================
// RENDER NÚT BÀI HỌC VÀ LỌC DỮ LIỆU
// ==========================================
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

function setLevel(level, btn) {
    currentLevel = level;
    currentLes = 'All'; 
    if (btn && btn.parentElement) updateActiveButtonFilter(btn);
    renderLessonButtons(); 
    filterCards();
}

function setCategory(cat, btn) {
    currentCat = cat;
    updateActiveButton(btn);
    
    const lessonSection = document.getElementById('lesson-buttons').parentElement;
    if (currentCat === 'grammar') {
        lessonSection.style.display = 'none';
        currentLes = 'All';
    } else {
        lessonSection.style.display = 'flex';
    }

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
    let siblings = rowContainer.querySelectorAll('.filter-btn, #flashcard-btn, #quiz-btn, #write-btn, #personal-set-btn');
    siblings.forEach(b => {
        b.classList.remove('btn-theme', 'active');
        b.classList.add('btn-theme-outline');
    });
    btn.classList.remove('btn-theme-outline');
    btn.classList.add('btn-theme', 'active');
}

function updateActiveButtonFilter(btn) {
    let siblings = btn.parentElement.querySelectorAll('.filter-btn');
    siblings.forEach(b => {
        b.classList.remove('btn-theme', 'active');
        b.classList.add('btn-theme-outline');
    });
    btn.classList.remove('btn-theme-outline');
    btn.classList.add('btn-theme', 'active');
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
// TÍNH NĂNG BỘ ĐỀ CÁ NHÂN & TỪ TỰ TẠO
// ==========================================
function togglePersonalSetMode(btn) {
    currentCat = 'personal_sets';
    isFlashcard = true;
    updateActiveButton(btn);
    
    // Ẩn thanh BÀI HỌC
    document.getElementById('lesson-buttons').parentElement.style.display = 'none';
    
    renderPersonalSetView();
    filterCards();
}

function renderPersonalSetView() {
    const levelContainer = document.getElementById('level-buttons');
    if (!levelContainer) return;
    
    let html = `
        <div class="d-flex w-100 justify-content-between align-items-center mb-3 border-bottom pb-2">
            <span class="fw-bold text-theme small"><i class="fi fi-rr-folder me-1"></i>CHỌN BỘ ĐỀ</span>
            <div>
                <button class="btn btn-sm btn-outline-secondary rounded-pill me-1" onclick="openManageSetsModal()">
                    <i class="fi fi-rr-settings"></i> Quản lý
                </button>
                <button class="btn btn-sm btn-theme rounded-pill" onclick="openCustomWordModal()">
                    <i class="fi fi-rr-plus"></i> Thêm từ mới
                </button>
            </div>
        </div>
        <div class="d-flex flex-wrap gap-2 w-100">
    `;
    
    if (Object.keys(personalSets).length === 0) {
        html += `<span class="text-muted small">Chưa có bộ đề nào. Bấm "Quản lý" để tạo!</span>`;
    } else {
        if (!currentPersonalSetId || !personalSets[currentPersonalSetId]) {
            currentPersonalSetId = Object.keys(personalSets)[0];
        }

        for (let setId in personalSets) {
            let set = personalSets[setId];
            let wordCount = set.words ? set.words.length : 0;
            let isActive = (currentPersonalSetId === setId) ? 'btn-theme active' : 'btn-theme-outline';
            html += `<button class="btn ${isActive} btn-sm rounded-pill filter-btn" onclick="selectPersonalSet('${setId}', this)">${set.name} (${wordCount})</button>`;
        }
    }
    html += `</div>`;
    levelContainer.innerHTML = html;
}

function selectPersonalSet(setId, btn) {
    currentPersonalSetId = setId;
    updateActiveButtonFilter(btn);
    filterCards();
}

function openManageSetsModal() {
    renderManageSetsList();
    manageSetsModal.show();
}

function renderManageSetsList() {
    const container = document.getElementById('manageSetListContainer');
    container.innerHTML = '';
    
    if (Object.keys(personalSets).length === 0) {
        container.innerHTML = '<div class="text-center text-muted small p-3">Chưa có bộ đề nào.</div>';
        return;
    }
    
    for (let setId in personalSets) {
        let set = personalSets[setId];
        container.innerHTML += `
            <div class="list-group-item d-flex justify-content-between align-items-center bg-light">
                <div class="d-flex align-items-center flex-grow-1 me-2">
                    <i class="fi fi-rr-folder text-theme me-2"></i>
                    <input type="text" class="form-control form-control-sm border-0 fw-medium" style="background:transparent" 
                           value="${set.name}" 
                           onchange="renamePersonalSet('${setId}', this.value)" 
                           title="Nhấn để đổi tên">
                </div>
                <i class="fi fi-rr-trash text-danger" style="cursor:pointer; padding: 5px;" onclick="deletePersonalSet('${setId}')" title="Xóa bộ đề"></i>
            </div>
        `;
    }
}

async function createPersonalSet() {
    const input = document.getElementById('newManageSetName');
    const name = input.value.trim();
    if (!name) return alert("Vui lòng nhập tên bộ đề!");
    
    const setId = 'set_' + new Date().getTime();
    personalSets[setId] = { name: name, words: [] };
    
    await savePersonalSetsToFirebase();
    input.value = '';
    renderManageSetsList();
    if (currentCat === 'personal_sets') renderPersonalSetView();
}

async function renamePersonalSet(setId, newName) {
    if (!newName.trim()) return alert("Tên không được để trống!");
    personalSets[setId].name = newName.trim();
    await savePersonalSetsToFirebase();
    if (currentCat === 'personal_sets') renderPersonalSetView();
}

async function deletePersonalSet(setId) {
    if (confirm("Xóa bộ đề này và toàn bộ từ vựng bên trong?")) {
        delete personalSets[setId];
        if (currentPersonalSetId === setId) currentPersonalSetId = null;
        await savePersonalSetsToFirebase();
        renderManageSetsList();
        if (currentCat === 'personal_sets') {
            renderPersonalSetView();
            filterCards();
        }
    }
}

let editingWordId = null;

function openCustomWordModal(wordId = null, event = null) {
    if (event) event.stopPropagation();
    if (!currentPersonalSetId || !personalSets[currentPersonalSetId]) {
        return alert("Vui lòng chọn hoặc tạo một bộ đề trước khi thêm từ!");
    }

    editingWordId = wordId;
    
    if (wordId) {
        let set = personalSets[currentPersonalSetId];
        let word = set.words.find(w => w.id === wordId);
        if (word) {
            document.getElementById('cw_kr').value = word.kr || '';
            document.getElementById('cw_vn').value = word.vn || '';
            document.getElementById('cw_note').value = word.note || '';
            document.getElementById('customWordModalLabel').innerHTML = '<i class="fi fi-rr-pencil me-2"></i>Sửa từ vựng';
        }
    } else {
        document.getElementById('cw_kr').value = '';
        document.getElementById('cw_vn').value = '';
        document.getElementById('cw_note').value = '';
        document.getElementById('customWordModalLabel').innerHTML = '<i class="fi fi-rr-plus me-2"></i>Thêm từ mới';
    }
    customWordModal.show();
}

async function saveCustomWord() {
    let kr = document.getElementById('cw_kr').value.trim();
    let vn = document.getElementById('cw_vn').value.trim();
    let note = document.getElementById('cw_note').value.trim();

    if (!kr || !vn) return alert("Vui lòng nhập Tiếng Hàn và Tiếng Việt!");

    let set = personalSets[currentPersonalSetId];
    if (!set.words) set.words = [];

    if (editingWordId) {
        let wordIndex = set.words.findIndex(w => w.id === editingWordId);
        if (wordIndex !== -1) {
            set.words[wordIndex].kr = kr;
            set.words[wordIndex].vn = vn;
            set.words[wordIndex].note = note;
        }
    } else {
        let newWord = {
            id: 'cw_' + new Date().getTime(),
            kr: kr,
            vn: vn,
            note: note,
            type: 'custom' 
        };
        set.words.unshift(newWord);
    }

    await savePersonalSetsToFirebase();
    customWordModal.hide();
    renderPersonalSetView(); 
    filterCards();
}

async function deleteCustomWord(wordId, event) {
    if (event) event.stopPropagation();
    if (confirm("Xóa từ này khỏi bộ đề?")) {
        let set = personalSets[currentPersonalSetId];
        set.words = set.words.filter(w => w.id !== wordId);
        await savePersonalSetsToFirebase();
        renderPersonalSetView();
        filterCards();
    }
}

async function savePersonalSetsToFirebase() {
    try {
        await db.collection("users").doc(userId).update({
            personalSets: personalSets
        });
    } catch(e) { 
        console.error("Lỗi lưu bộ đề:", e); 
        localStorage.setItem('myPersonalSets', JSON.stringify(personalSets)); 
    }
}

// ==========================================
// RENDER GIAO DIỆN THẺ (LỌC VÀ HIỂN THỊ)
// ==========================================
function filterCards() {
    var keyword = document.getElementById('searchInput').value.toLowerCase().trim();
    var filtered = [];

    if (currentCat === 'personal_sets') {
        if (currentPersonalSetId && personalSets[currentPersonalSetId]) {
            let customWords = personalSets[currentPersonalSetId].words || [];
            filtered = customWords.filter(i => {
                if (keyword === '') return true;
                return ((i.vn && i.vn.toLowerCase().includes(keyword)) ||
                        (i.kr && i.kr.toLowerCase().includes(keyword)));
            });
        }
    } else {
        filtered = data.filter(i => {
            let passCat = false, passLevel = true, passLes = true;

            if (currentCat === 'All') {
                passCat = true;
                passLevel = (i.level === currentLevel);
                if (currentLes !== 'All') passLes = (i.lesson === currentLes);
            } 
            else if (currentCat === 'starred') {
                passCat = starredCards.includes(String(i.id));
                passLevel = (i.level === currentLevel);
                if (currentLes !== 'All') passLes = (i.lesson === currentLes);
            }
            else {
                passCat = (i.type === currentCat);
                passLevel = (i.level === currentLevel);
                if (currentLes !== 'All') passLes = (i.lesson === currentLes);
            }

            let passKey = true;
            if (keyword !== '') {
                passKey = ((i.vn && i.vn.toLowerCase().includes(keyword)) || (i.kr && i.kr.toLowerCase().includes(keyword)));
            }
            return passLevel && passCat && passLes && passKey;
        });
    }

    renderCards(filtered);
}

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
        let actionIconsHTML = '';

        if (currentCat === 'personal_sets') {
            // Nút sửa/xóa cho từ tự tạo
            let isStarred = starredCards.includes(String(card.id));
            let starIcon = isStarred ? "fi-sr-star" : "fi-rr-star";
            actionIconsHTML = `
            <div style="position: absolute; top: 10px; right: 10px; z-index: 2; display: flex; gap: 8px;">
                <i class="fi ${starIcon} ${isStarred ? 'active' : ''} text-theme bg-white rounded-circle shadow-sm" style="cursor:pointer; padding: 5px;" onclick="toggleStar('${card.id}', event, this)" title="Từ khó"></i>
                <i class="fi fi-rr-pencil text-theme bg-white rounded-circle shadow-sm" style="cursor:pointer; padding: 5px;" onclick="openCustomWordModal('${card.id}', event)" title="Sửa từ"></i>
                <i class="fi fi-rr-trash text-theme bg-white rounded-circle shadow-sm" style="cursor:pointer; padding: 5px;" onclick="deleteCustomWord('${card.id}', event)" title="Xóa từ"></i>
            </div>
        `;
        } else {
            // Nút lưu sao cho từ trong app
            let isStarred = starredCards.includes(String(card.id));
            let starIcon = isStarred ? "fi-sr-star" : "fi-rr-star";
            actionIconsHTML = `
                <div style="position: absolute; top: 10px; right: 10px; z-index: 2;">
                    <i class="fi ${starIcon} star-btn ${isStarred ? 'active' : ''}" style="cursor:pointer;" onclick="toggleStar('${card.id}', event, this)"></i>
                </div>
            `;
        }
        
        let speakerHTML = `<i class="fi fi-rr-volume speaker-btn" title="Nghe phát âm" onclick="speakKorean('${safeKr}', event)"></i>`;
        
        if (isFlashcard) {
            div.className = 'flip-card';
            let frontText = !isReverseLang ? (card.vn || '') : card.kr;
            let frontClass = !isReverseLang ? "vn-text" : "kr-text";
            let backText = !isReverseLang ? card.kr : (card.vn || '');
            let backClass = !isReverseLang ? "kr-text" : "vn-text";
            let backNote = card.note ? `<div class="card-note mt-2 text-muted border-top pt-2"><i class="fi fi-rr-info me-1"></i>${card.note}</div>` : '';
            let speakerFront = isReverseLang ? speakerHTML : '';
            let speakerBack = !isReverseLang ? speakerHTML : '';
            
            div.onclick = function(e) {
                if(e.target.tagName === 'I') return;
                this.classList.toggle('flipped');
            };
            div.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${actionIconsHTML}
                        <div class="${frontClass === 'kr-text' ? 'korean-text' : ''} ${frontClass}">${frontText} ${speakerFront}</div>
                    </div>
                    <div class="flip-card-back">
                        <div class="${backClass === 'kr-text' ? 'korean-text' : ''} ${backClass}">${backText} ${speakerBack}</div>
                        ${backNote}
                    </div>
                </div>
            `;
        } else {
            let frontLabel = card.type === 'grammar' ? `<div class="vn-text text-start fw-bold mb-2">${card.vn}</div>` : `<div class="vn-text text-muted small">${card.vn || ''}</div>`;
            let krLabelClass = card.type === 'grammar' ? 'text-start mb-2' : 'mb-1';
            let noteLabel = card.note ? `<div class="card-note mt-2 small text-muted"><i class="fi fi-rr-info me-1"></i>${card.note}</div>` : '';

            div.innerHTML = actionIconsHTML + `
                <div class="korean-text kr-text ${krLabelClass}">${card.kr} ${speakerHTML}</div>
                ${frontLabel}
                ${noteLabel}
            `;
        }
        
        wrapper.appendChild(div);
        container.appendChild(wrapper);
    });
}

// ==========================================
// CÁC HÀM TIỆN ÍCH KHÁC
// ==========================================
async function toggleStar(cardId, event, iconElement) {
    event.stopPropagation();
    cardId = String(cardId); 
    let index = starredCards.indexOf(cardId);
    const docRef = db.collection("users").doc(userId);

    if (index === -1) {
        starredCards.push(cardId);
        iconElement.classList.remove('fi-rr-star');
        iconElement.classList.add('fi-sr-star', 'active');
        try { await docRef.update({ starredCards: firebase.firestore.FieldValue.arrayUnion(cardId) }); } catch(e) {}
    } else {
        starredCards.splice(index, 1);
        iconElement.classList.remove('fi-sr-star', 'active');
        iconElement.classList.add('fi-rr-star');
        if (currentCat === 'starred') filterCards();
        try { await docRef.update({ starredCards: firebase.firestore.FieldValue.arrayRemove(cardId) }); } catch(e) {}
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
            selectedVoice = koreanVoices.find(v => v.name.includes('Yuna') || v.name.includes('Sora')) || 
                            koreanVoices.find(v => v.name.includes('Google') && !v.name.toLowerCase().includes('male')) || 
                            koreanVoices.find(v => !v.name.toLowerCase().includes('male')) || koreanVoices[0];
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
        if (window.scrollY > 300) btn.classList.add('show'); 
        else btn.classList.remove('show'); 
    });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
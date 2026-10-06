// ================= VARIÁVEIS DE ESTADO E DADOS =================
// A variável 'originalFlashcards' agora vem do arquivo data.js que é carregado no HTML antes do script.js
let allFlashcards = [...originalFlashcards]; 
let flashcards = [...allFlashcards]; 
let currentIndex = 0;
let filterEssentialOnly = false;

// Recupera os IDs dos cards marcados como difíceis no localStorage
let difficultCards = JSON.parse(localStorage.getItem('aws_difficult_cards')) || [];

// ================= ELEMENTOS DO DOM =================
const elements = {
    // Menu e Telas
    navButtons: document.querySelectorAll('.nav-btn'),
    views: document.querySelectorAll('.view'),
    btnStartStudy: document.getElementById('btn-start-study'),
    
    // Dashboard Stats
    dashTotal: document.getElementById('dash-total'),
    dashEssential: document.getElementById('dash-essential'),
    dashDifficult: document.getElementById('dash-difficult'),

    // Flashcards
    cardContainer: document.getElementById('card-container'),
    flashcard: document.getElementById('flashcard'),
    cardFront: document.getElementById('card-front'),
    cardBack: document.getElementById('card-back'),
    counter: document.getElementById('counter'),
    diffCount: document.getElementById('diff-count'),
    categoryDisplay: document.getElementById('category-display'),
    // Conteúdos
    topicsList: document.getElementById('topics-list'),
    readingContent: document.getElementById('reading-content'),
    btnPrev: document.getElementById('prev-btn'),
    btnNext: document.getElementById('next-btn'),
    btnShuffle: document.getElementById('shuffle-btn'),
    btnDiff: document.getElementById('diff-btn'),
    btnFilterEssential: document.getElementById('filter-essential-btn')

};

// ================= NAVEGAÇÃO SPA (Single Page Application) =================
function switchView(targetId) {
    // Atualiza botoes do menu
    elements.navButtons.forEach(btn => {
        if(btn.dataset.target === targetId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Mostra apenas a tela alvo
    elements.views.forEach(view => {
        if(view.id === targetId) {
            view.classList.remove('hidden');
            view.classList.add('active');
        } else {
            view.classList.remove('active');
            view.classList.add('hidden');
        }
    });
}

// ================= DASHBOARD LÓGICA =================
function updateDashboard() {
    elements.dashTotal.textContent = allFlashcards.length;
    
    const countEssential = allFlashcards.filter(card => card.isEssential).length;
    elements.dashEssential.textContent = countEssential;
    
    elements.dashDifficult.textContent = difficultCards.length;
}

// ================= FLASHCARDS LÓGICA (Mantida Perfeitamente) =================
function updateUI() {
    if (flashcards.length === 0) {
        elements.cardFront.textContent = "Nenhum card encontrado com este filtro.";
        elements.cardBack.textContent = "";
        elements.counter.textContent = "0 de 0";
        return;
    }

    const currentCard = flashcards[currentIndex];
    
    elements.cardFront.textContent = currentCard.front;
    elements.cardBack.textContent = currentCard.back;
    elements.categoryDisplay.textContent = currentCard.category;
    
    elements.counter.textContent = `Card ${currentIndex + 1} de ${flashcards.length}`;
    elements.diffCount.textContent = difficultCards.length;
    
    if (difficultCards.includes(currentCard.id)) {
        elements.btnDiff.classList.add('difficult-active');
        elements.btnDiff.innerHTML = `<span class="icon">⭐</span> Difícil`;
    } else {
        elements.btnDiff.classList.remove('difficult-active');
        elements.btnDiff.innerHTML = `<span class="icon">☆</span> Marcar Difícil`;
    }

    elements.flashcard.classList.remove('flipped');
}

function toggleFlip() {
    if (flashcards.length > 0) {
        elements.flashcard.classList.toggle('flipped');
    }
}

function nextCard() {
    if (flashcards.length === 0) return;
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateUI();
}

function prevCard() {
    if (flashcards.length === 0) return;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1;
    }
    updateUI();
}

function shuffleCards() {
    elements.btnShuffle.classList.add('spin-anim');
    setTimeout(() => elements.btnShuffle.classList.remove('spin-anim'), 500);

    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    
    currentIndex = 0;
    updateUI();
}

function toggleDifficult() {
    if (flashcards.length === 0) return;
    const currentCardId = flashcards[currentIndex].id;
    
    if (difficultCards.includes(currentCardId)) {
        difficultCards = difficultCards.filter(id => id !== currentCardId);
    } else {
        difficultCards.push(currentCardId);
    }
    
    localStorage.setItem('aws_difficult_cards', JSON.stringify(difficultCards));
    
    // Atualiza UI dos flashcards e também o Dashboard
    updateUI();
    updateDashboard();
}

function toggleEssentialFilter() {
    filterEssentialOnly = !filterEssentialOnly;
    
    if (filterEssentialOnly) {
        elements.btnFilterEssential.classList.add('active');
        // 👇 Aqui está a correção: mudamos de card.isEssential para card.essential
        flashcards = allFlashcards.filter(card => card.essential);
    } else {
        elements.btnFilterEssential.classList.remove('active');
        flashcards = [...allFlashcards];
    }
    
    currentIndex = 0;
    updateUI();
    // Atualiza o contador do Dashboard também se a tela estiver visível
    updateDashboard();
}

// ================= CONTEÚDOS LÓGICA =================
function renderTopicsMenu() {
    elements.topicsList.innerHTML = ''; // Limpa o menu
    
    studyContent.forEach((topic, index) => {
        const btn = document.createElement('button');
        btn.classList.add('topic-btn');
        btn.textContent = topic.title;
        
        btn.addEventListener('click', () => {
            // Remove active de todos e bota neste
            document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Renderiza o HTML do conteúdo selecionado
            elements.readingContent.innerHTML = topic.html;
            
            // Joga o scroll para o topo da área de leitura
            elements.readingContent.parentElement.scrollTop = 0;
        });
        
        elements.topicsList.appendChild(btn);
    });
}

// ================= INICIALIZAÇÃO E LISTENERS =================
function init() {
    updateDashboard();
    updateUI();
    renderTopicsMenu();
    setupEventListeners();
}

function setupEventListeners() {
    // Navegação do Menu
    elements.navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(!btn.classList.contains('disabled')) {
                const targetId = btn.getAttribute('data-target');
                switchView(targetId);
            }
        });
    });

    // Botão continuar estudando do Dashboard
    elements.btnStartStudy.addEventListener('click', () => {
        switchView('view-flashcards');
    });

    // Cliques nos Flashcards
    elements.cardContainer.addEventListener('click', toggleFlip);
    elements.btnNext.addEventListener('click', nextCard);
    elements.btnPrev.addEventListener('click', prevCard);
    elements.btnShuffle.addEventListener('click', shuffleCards);
    elements.btnDiff.addEventListener('click', toggleDifficult);
    elements.btnFilterEssential.addEventListener('click', toggleEssentialFilter);

    // Navegação por teclado (Apenas na aba de Flashcards)
    document.addEventListener('keydown', (e) => {
        // Verifica se a tela de flashcards está ativa
        const flashcardView = document.getElementById('view-flashcards');
        if(!flashcardView.classList.contains('active')) return;
        
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'BUTTON') return;

        switch(e.key) {
            case 'ArrowRight':
                nextCard();
                break;
            case 'ArrowLeft':
                prevCard();
                break;
            case ' ':
                e.preventDefault();
                toggleFlip();
                break;
        }
    });
}

init();
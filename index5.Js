// Navegação entre páginas
function goToPage(pageNumber) {
    if (pageNumber === 5) {
        window.location.href = 'index5.html';
    } else if (pageNumber === 6) {
        window.location.href = 'index6.html';
    }
}

// Animação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Animar cards ao carregar
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });

    // Efeito hover nos cards
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Animação do header ao carregar
    const header = document.querySelector('.header');
    if (header) {
        header.style.animation = 'slideDown 0.8s ease-out';
    }
});

// Scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Efeito de clique nos botões
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
    }
});

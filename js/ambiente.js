// Interatividade para a página de ambiente
document.addEventListener('DOMContentLoaded', function() {
    // Galeria de thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.showcase-main img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remover active de todos
            thumbnails.forEach(t => t.classList.remove('active'));
            // Adicionar active no clicado
            this.classList.add('active');
            // Trocar imagem principal
            if (mainImage) {
                mainImage.src = this.querySelector('img').src;
                mainImage.alt = this.querySelector('img').alt;
            }
        });
    });
    
    // Animação de entrada para elementos
    const animatedElements = document.querySelectorAll('.ambiente-card, .design-element, .sensory-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
    
    // Contador para experiência sensorial
    const sensoryItems = document.querySelectorAll('.sensory-item');
    sensoryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Highlight cards ao passar o mouse
    const ambienteCards = document.querySelectorAll('.ambiente-card');
    ambienteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
// Interatividade para a página de localização
document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada para os cards
    const animatedElements = document.querySelectorAll('.transport-card, .amenity-card');
    
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
    
    // Efeito de clique nos cards de transporte
    const transportCards = document.querySelectorAll('.transport-card');
    transportCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // Aqui você pode adicionar funcionalidades específicas
            // como abrir rotas no Google Maps, etc.
            console.log('Transporte selecionado:', this.querySelector('h4').textContent);
        });
    });
    
    // Integração com API de mapas (exemplo futuro)
    function initMapFeatures() {
        // Futura integração com Google Maps API
        // para features como calcular rotas, etc.
    }
    
    // Tooltips informativos
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// Animação de contagem para estatísticas
document.addEventListener('DOMContentLoaded', function() {
    // Contador de estatísticas
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const count = +entry.target.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    entry.target.innerText = Math.ceil(count + inc);
                    setTimeout(() => {
                        observer.observe(entry.target);
                    }, 1);
                } else {
                    entry.target.innerText = target;
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    // Animação de entrada para elementos
    const animatedElements = document.querySelectorAll('.differential-card, .team-card, .value-card');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        elementObserver.observe(element);
    });
    
    // Efeito parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-sobre');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});

// Efeito de digitação no título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
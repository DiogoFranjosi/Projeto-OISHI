// Mapeamento completo de pratos para imagens, preços e descrições
const itemImages = {
    'Sashimi Premium': 'combinado1.jpg',
    'Nigiri Selection': 'combinado2.jpg',
    'Roll OISHI': 'combinado3.jpg',
    'Dragon Roll': 'destaque-home7.jpg',
    'Rainbow Roll': 'destaque-home6.jpg',
    'Tempura Misto': 'pratos1.jpg',
    'Yakitori Especial': 'pratos3.jpg',
    'Combinado Oishi': 'sobre-prato.jpg',
    'Sashimi Salmão': 'pratos1.jpg',
    'Combinado Sushi': 'sobre-prato.jpg',
    'Philadelphia Roll': 'pratos3.jpg',
    'Tempura Roll': 'combinado1.jpg',
    'California Roll': 'combinado2.jpg',
    'Yakissoba': 'destaque-home7.jpg',
    'Combinado Família': 'combinado1.jpg'
};

// Preços dos pratos
const itemPrices = {
    'Sashimi Premium': 'R$ 89,90',
    'Nigiri Selection': 'R$ 67,90',
    'Roll OISHI': 'R$ 54,90',
    'Dragon Roll': 'R$ 62,90',
    'Rainbow Roll': 'R$ 58,90',
    'Tempura Misto': 'R$ 47,90',
    'Yakitori Especial': 'R$ 52,90',
    'Combinado Oishi': 'R$ 129,90',
    'Sashimi Salmão': 'R$ 74,90',
    'Combinado Sushi': 'R$ 95,90',
    'Philadelphia Roll': 'R$ 49,90',
    'Tempura Roll': 'R$ 56,90',
    'California Roll': 'R$ 44,90',
    'Yakissoba': 'R$ 42,90',
    'Combinado Família': 'R$ 189,90'
};

// Descrições detalhadas
const itemDescriptions = {
    'Sashimi Premium': 'Cortes finos e precisos de salmão selvagem, atum voador e peixe branco fresco. Cada fatia é preparada para realçar o sabor natural do peixe. Servido com wasabi artesanal e shoyu premium.',
    'Nigiri Selection': 'Seleção de 10 peças de nigiri com salmão, atum, camarão e peixe branco. O arroz é temperado com vinagre de arroz especial, na temperatura ideal para harmonizar com os peixes.',
    'Roll OISHI': 'Nosso roll signature! Salmão fresco, cream cheese cremoso, cebolinha crocante e nosso molho secreto. Finalizado com crispy de batata doce para textura perfeita.',
    'Dragon Roll': 'Camarão empanado crocante, abacate cremoso, pepino fresco e molho unagi agridoce. Coberto com fatias de salmão e finalizado com cebolinha.',
    'Rainbow Roll': 'Uma verdadeira obra de arte! California roll tradicional coberto com fatias coloridas de salmão, atum, peixe branco e abacate. Uma explosão de sabores e cores.',
    'Tempura Misto': 'Crocante tempura de camarão gigante e legumes da estação selecionados. Massa leve e airy, frita no ponto perfeito. Acompanha molho tentsuyu tradicional.',
    'Yakitori Especial': 'Espetinhos de frango grelhados no carvão com nosso molho teriyaki secreto. Inclui coração, coxa e asinha. Acompanha legumes grelhados e arroz.',
    'Combinado Oishi': 'Nosso combo premium! 30 peças incluindo nigiris, sushis e rolls exclusivos. Perfeito para 2 pessoas experimentarem a essência da culinária OISHI.'
};

// Ingredientes detalhados
const itemIngredients = {
    'Sashimi Premium': [
        'Salmão selvagem norueguês',
        'Atum voador fresco',
        'Peixe branco da estação',
        'Wasabi artesanal',
        'Shoyu premium'
    ],
    'Nigiri Selection': [
        'Salmão fresco',
        'Atum selecionado',
        'Camarão branco',
        'Peixe branco',
        'Arroz japonês premium',
        'Vinagre de arroz especial'
    ],
    'Roll OISHI': [
        'Salmão fresco',
        'Cream cheese',
        'Cebolinha',
        'Molho especial OISHI',
        'Crispy de batata doce',
        'Arroz para sushi'
    ],
    'Dragon Roll': [
        'Camarão empanado',
        'Abacate hass',
        'Pepino japonês',
        'Molho unagi',
        'Salmão fresco',
        'Cebolinha'
    ],
    'Rainbow Roll': [
        'Salmão fresco',
        'Atum vermelho',
        'Peixe branco',
        'Abacate',
        'Pepino',
        'Caranguejo'
    ],
    'Tempura Misto': [
        'Camarão gigante',
        'Berinjela',
        'Abobrinha',
        'Cenoura',
        'Brócolis',
        'Massa tempura'
    ],
    'Yakitori Especial': [
        'Frango caipira',
        'Molho teriyaki secreto',
        'Cebolinha',
        'Pimentão',
        'Cogumelos shiitake'
    ],
    'Combinado Oishi': [
        'Salmão, atum, peixe branco',
        'Camarão, polvo',
        'Variedade de rolls',
        'Arroz especial',
        'Legumes frescos'
    ]
};

// Informações de preparo
const itemPreparation = {
    'Sashimi Premium': '15-20 minutos',
    'Nigiri Selection': '20-25 minutos',
    'Roll OISHI': '15-18 minutos',
    'Dragon Roll': '18-22 minutos',
    'Rainbow Roll': '20-25 minutos',
    'Tempura Misto': '12-15 minutos',
    'Yakitori Especial': '25-30 minutos',
    'Combinado Oishi': '30-35 minutos'
};

document.addEventListener('DOMContentLoaded', function() {
    // Filtros de Categoria
    const filters = document.querySelectorAll('.category-filter');
    const menuItems = document.querySelectorAll('.menu-category');
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active de todos
            filters.forEach(f => f.classList.remove('active'));
            // Adiciona active no clicado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            menuItems.forEach(item => {
                if (filterValue === 'all' || item.id === filterValue) {
                    item.style.display = 'block';
                    // Animação de entrada
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Modal de Detalhes - CORRIGIDO E COMPLETO
    const itemModal = document.getElementById('itemModal');
    if (itemModal) {
        itemModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const itemName = button.getAttribute('data-item');
            const modalBody = itemModal.querySelector('.modal-body');
            const modalTitle = itemModal.querySelector('.modal-title');
            
            // Obter dados do prato com fallbacks
            const imageFile = itemImages[itemName] || 'pratos1.jpg';
            const price = itemPrices[itemName] || 'R$ 00,00';
            const description = itemDescriptions[itemName] || 'Descrição detalhada do prato.';
            const ingredients = itemIngredients[itemName] || ['Ingrediente fresco', 'Ingrediente premium'];
            const preparationTime = itemPreparation[itemName] || '15-20 minutos';
            
            // Atualizar título do modal
            modalTitle.textContent = itemName;
            
            // Criar conteúdo do modal
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <div class="position-relative">
                            <img src="imagens/${imageFile}" 
                                 class="img-fluid rounded shadow" 
                                 alt="${itemName}"
                                 style="height: 300px; width: 100%; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='imagens/pratos1.jpg';">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-oishi-red">
                                ${preparationTime}
                            </span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-oishi-red mb-3">${itemName}</h4>
                        <p class="text-muted mb-4">${description}</p>
                        
                        <div class="mb-4">
                            <h6 class="fw-bold mb-3">Ingredientes Principais:</h6>
                            <ul class="list-unstyled">
                                ${ingredients.map(ing => `
                                    <li class="mb-2 d-flex align-items-center">
                                        <span class="material-symbols-rounded text-oishi-red me-2" style="font-size: 18px;">check_circle</span>
                                        ${ing}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="nutrition-info mb-4 p-3 bg-light rounded">
                            <h6 class="fw-bold mb-2">Informações do Prato:</h6>
                            <div class="row text-center">
                                <div class="col-4">
                                    <span class="d-block fw-bold"></span>
                                    <small class="text-muted">Serve 1-2</small>
                                </div>
                                <div class="col-4">
                                    <span class="d-block fw-bold"></span>
                                    <small class="text-muted">${preparationTime}</small>
                                </div>
                                <div class="col-4">
                                    <span class="d-block fw-bold"></span>
                                    <small class="text-muted">Fresco</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center border-top pt-4">
                            <div>
                                <span class="h3 text-oishi-red fw-bold d-block">${price}</span>
                                <small class="text-muted">Preço final</small>
                            </div>
                            <a href="https://wa.me/551166661234?text=Olá OISHI! Gostaria de pedir: ${encodeURIComponent(itemName)} - ${encodeURIComponent(price)}" 
                               class="btn-oishi" 
                               target="_blank"
                               onclick="trackOrder('${itemName}')">
                                <span class="material-symbols-rounded align-middle me-2">whatsapp</span>
                                Pedir no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    // Scroll suave para categorias
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efeito de hover nos cards do menu
    const menuCards = document.querySelectorAll('.menu-item');
    menuCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
        });
    });
});

// Função para tracking de pedidos (opcional)
function trackOrder(itemName) {
    // Aqui você pode integrar com Google Analytics ou outro sistema
    console.log(`Pedido realizado: ${itemName}`);
    
    // Exemplo de integração com Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'order', {
            'event_category': 'menu',
            'event_label': itemName
        });
    }
}

// Função para buscar pratos (feature futura)
function searchMenu(query) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const itemName = item.querySelector('.card-title').textContent.toLowerCase();
        if (itemName.includes(query.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Inicializar tooltips do Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
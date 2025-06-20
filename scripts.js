let navBar = document.querySelector('#header')

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else(
        navBar.classList.remove('rolar')
    )
})


// Animação de entrada para o logo
gsap.fromTo(".logo-name" , {
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
})

// Animações para elementos da página inicial
document.addEventListener("DOMContentLoaded", function() {
    // Animação para o título principal
    gsap.from(".txt-hero h1", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });
    
    // Animação para o subtítulo
    gsap.from(".txt-hero p", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out"
    });
    
    // Animação para os itens do menu
    gsap.from(".menu-desktop nav ul li", {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
    });
    
    // Animação para as partículas de poeira
    gsap.from(".dust-particle", {
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out"
    });
    
    // Adicionar efeito de hover nos botões - mais sutil
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.03,
                duration: 0.3,
                ease: "power1.out"
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    });
    
    // Contador regressivo para o lançamento
    const launchDate = new Date('December 25, 2025 00:00:00').getTime();
    
    // Criar elemento para o contador se não existir
    if (!document.querySelector('.countdown')) {
        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        
        // Adicionar ao final da seção de pré-venda
        const preVendaSection = document.querySelector('#pre-venda .interface');
        if (preVendaSection) {
            preVendaSection.appendChild(countdownElement);
        }
    }
    
    // Atualizar o contador
    const countdown = document.querySelector('.countdown');
    if (countdown) {
        // Função para atualizar o contador
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = launchDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdown.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Dias</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">Horas</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">Minutos</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">Segundos</span>
                </div>
            `;
        }
        
        // Atualizar imediatamente e depois a cada segundo
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Adicionar efeito de pergaminho antigo às seções de texto
    const textSections = document.querySelectorAll('.txt-items p, .txt-sobre p');
    textSections.forEach(section => {
        section.style.fontFamily = "'Poppins', serif";
        section.style.lineHeight = "1.8";
        section.style.textShadow = "0 0 1px rgba(212, 175, 55, 0.2)";
    });
    
    // Adicionar efeito de iluminação de tocha em elementos específicos
    function torchEffect() {
        const torchElements = document.querySelectorAll('.txt-hero h1, .card, .countdown-item');
        torchElements.forEach(el => {
            // Criar uma sutil variação na sombra para simular luz de tocha
            const intensity = 0.95 + Math.random() * 0.1; // Variação sutil entre 0.95 e 1.05
            el.style.boxShadow = `0 0 15px rgba(139, 69, 19, ${intensity})`;
        });
        
        // Repetir o efeito
        setTimeout(torchEffect, 1000 + Math.random() * 1000); // Entre 1 e 2 segundos
    }
    
    // Iniciar efeito de tocha
    torchEffect();
    
    // Adicionar efeito de brilho às partículas de poeira
    function dustGlowEffect() {
        const dustParticles = document.querySelectorAll('.dust-particle');
        dustParticles.forEach(particle => {
            // Criar uma sutil variação no brilho para simular poeira em movimento
            const glowIntensity = 0.5 + Math.random() * 0.3; // Variação sutil na opacidade
            const glowSize = 0.8 + Math.random() * 0.4; // Variação sutil no tamanho do brilho
            
            particle.style.opacity = glowIntensity.toString();
            particle.style.boxShadow = `0 0 ${5 * glowSize}px #8b4513, 0 0 ${10 * glowSize}px #d4af37`;
        });
        
        // Repetir o efeito
        setTimeout(dustGlowEffect, 800 + Math.random() * 800); // Entre 0.8 e 1.6 segundos
    }
    
    // Iniciar efeito de brilho nas partículas
    dustGlowEffect();
    
    // Adicionar efeito de movimento de câmera sutil para aumentar a imersão
    function subtleCameraMovement() {
        const heroSection = document.querySelector('.hero-site');
        const moveX = (Math.random() - 0.5) * 5; // Movimento horizontal sutil entre -2.5 e 2.5 pixels
        const moveY = (Math.random() - 0.5) * 5; // Movimento vertical sutil entre -2.5 e 2.5 pixels
        
        gsap.to(heroSection, {
            backgroundPosition: `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`,
            duration: 4,
            ease: "power1.inOut",
            onComplete: subtleCameraMovement
        });
    }
    
    // Iniciar movimento sutil de câmera
    subtleCameraMovement();
});

// Criar texturas de pergaminho e madeira diretamente no JavaScript
function createTextures() {
    // Criar textura de pergaminho
    const parchmentCanvas = document.createElement('canvas');
    parchmentCanvas.width = 200;
    parchmentCanvas.height = 200;
    const parchmentCtx = parchmentCanvas.getContext('2d');
    
    // Cor base de pergaminho
    parchmentCtx.fillStyle = '#e8d6b0';
    parchmentCtx.fillRect(0, 0, 200, 200);
    
    // Adicionar ruído para textura
    for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 200;
        const y = Math.random() * 200;
        const size = Math.random() * 2;
        const opacity = Math.random() * 0.1;
        
        parchmentCtx.fillStyle = `rgba(139, 69, 19, ${opacity})`;
        parchmentCtx.fillRect(x, y, size, size);
    }
    
    // Criar textura de madeira
    const woodCanvas = document.createElement('canvas');
    woodCanvas.width = 200;
    woodCanvas.height = 200;
    const woodCtx = woodCanvas.getContext('2d');
    
    // Cor base de madeira
    woodCtx.fillStyle = '#3e2912';
    woodCtx.fillRect(0, 0, 200, 200);
    
    // Adicionar linhas de madeira
    for (let i = 0; i < 20; i++) {
        const y = i * 10;
        const width = 200;
        const height = 5 + Math.random() * 5;
        const opacity = 0.1 + Math.random() * 0.2;
        
        woodCtx.fillStyle = `rgba(20, 10, 0, ${opacity})`;
        woodCtx.fillRect(0, y, width, height);
    }
    
    // Adicionar nós de madeira
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * 200;
        const y = Math.random() * 200;
        const radius = 3 + Math.random() * 7;
        
        woodCtx.beginPath();
        woodCtx.arc(x, y, radius, 0, Math.PI * 2);
        woodCtx.fillStyle = 'rgba(60, 30, 0, 0.6)';
        woodCtx.fill();
        
        // Adicionar brilho ao nó
        woodCtx.beginPath();
        woodCtx.arc(x - 1, y - 1, radius * 0.5, 0, Math.PI * 2);
        woodCtx.fillStyle = 'rgba(120, 80, 40, 0.3)';
        woodCtx.fill();
    }
    
    // Salvar as texturas como data URLs
    const parchmentTexture = parchmentCanvas.toDataURL();
    const woodTexture = woodCanvas.toDataURL();
    
    // Aplicar as texturas aos elementos apropriados
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        section.vantagens, section.sobre {
            background-image: url('${parchmentTexture}') !important;
        }
        
        section.como-funciona {
            background-image: url('${woodTexture}') !important;
        }
        
        .txt-items p, .txt-sobre p {
            background-image: url('${parchmentTexture}') !important;
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Executar a criação de texturas quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', createTextures);

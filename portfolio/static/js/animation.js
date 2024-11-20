// Inicializa GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação para elementos da seção Hero
gsap.from(".hero-section .reveal", {
    opacity: 1, // Começa invisível
    y: 50,      // Leve deslocamento para baixo
    duration: 1,
    stagger: 0.3, // Intervalo entre os elementos
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top", // Quando 80% da seção entra na viewport
        toggleActions: "play none none none",
    }
});

// Suaviza navegação entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
        });
    });
});
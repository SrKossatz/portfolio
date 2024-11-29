
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


var swiper = new Swiper(".mySwiper", {
effect: "cube",
grabCursor: true,
cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
},
pagination: {
    el: ".swiper-pagination",
},
});





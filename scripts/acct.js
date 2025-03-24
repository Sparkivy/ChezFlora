let currentSlide = 1;

function adjustCarousel() {
    const images = document.querySelectorAll('.carousel-img');
    images.forEach((image, index) => {
        if (index === currentSlide) {
            image.style.transform = 'scale(1.2)';
            image.style.opacity = '1';
        } else {
            image.style.transform = 'scale(1)';
            image.style.opacity = '2';
        }
    });
}



// Fonction de défilement automatique
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3; // Assure que l'indice reste entre 0 et 2
    adjustCarousel();
}, 3000); // Change d'image toutes les 3 secondes

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("animated-title");
    const text = document.getElementById("animated-text");

    // Déclencher l'animation du titre
    title.style.width = "100%"; // Active l'animation typing

    // Attendre 2 secondes avant d'afficher le texte (cohérent avec le typing)
    setTimeout(() => {
        text.style.opacity = "1"; // Rend le texte visible progressivement
    }, 2000);
});

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

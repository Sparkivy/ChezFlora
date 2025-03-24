document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "images/mariage.jpg", alt: "Décoration de mariage" },
        { src: "images/anniversaire.jpg", alt: "Décoration d'anniversaire" },
        { src: "images/entreprise.jpg", alt: "Décoration pour Entreprises" },
        { src: "images/funerailles.jpg", alt: "Décoration pour Funérailles" },
        { src: "images/noel.jpg", alt: "Décoration de Noël" }
    ];

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card, index) => {
        const img = card.querySelector("img");
        if (img) {
            img.src = images[index].src;
            img.alt = images[index].alt;
        }
    });
});

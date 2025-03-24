// scripts/index.js
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-image");
  let index = 0;
  
  function changeImage() {
      images.forEach(img => img.style.opacity = "0.6");
      images[index].style.opacity = "1";
      index = (index + 1) % images.length;
  }
  
  setInterval(changeImage, 3000);

  
});


document.addEventListener("DOMContentLoaded", () => {
  const filtres = document.querySelectorAll(".filtre");
  const produits = document.querySelectorAll(".produit");

  // Filtrage des produits
  filtres.forEach(bouton => {
      bouton.addEventListener("click", () => {
          filtres.forEach(btn => btn.classList.remove("active"));
          bouton.classList.add("active");

          const categorie = bouton.getAttribute("data-categorie");
          produits.forEach(produit => {
              produit.style.display = (categorie === "tous" || produit.getAttribute("data-categorie") === categorie) ? "block" : "none";
          });
      });
  });

  // Gestion du panier
  document.querySelectorAll(".ajouter-panier").forEach(btn => {
      btn.addEventListener("click", () => {
          let count = parseInt(document.getElementById("cart-count").textContent);
          document.getElementById("cart-count").textContent = count + 1;
      });

  });
});
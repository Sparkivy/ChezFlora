document.getElementById("formContact").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi automatique
  alert("Votre message a bien été envoyé ! Nous vous répondrons sous peu.");
  this.reset(); // Réinitialise le formulaire
});
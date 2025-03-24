document.addEventListener("DOMContentLoaded", function() {
  // Formulaire d'inscription
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
      signupForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirm-password").value;

          if (password !== confirmPassword) {
              alert("Les mots de passe ne correspondent pas !");
              return;
          }

          alert("Inscription réussie !");
          signupForm.reset();
      });
  }

  // Formulaire de connexion
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          alert("Connexion réussie !");
          loginForm.reset();
      });
  }
  
});
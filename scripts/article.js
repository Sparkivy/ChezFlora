
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let commentInput = document.getElementById('comment-input');
        let commentText = commentInput.value.trim();

        if (commentText !== "") {
            let commentContainer = document.getElementById('comments-container');
            let newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentText;
            
            commentContainer.appendChild(newComment);
            commentInput.value = ""; // Efface le champ après l'envoi
        }
    });

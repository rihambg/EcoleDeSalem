// Fonction pour envoyer un commentaire
function envoyerCommentaire() {
    // Récupérer les valeurs des champs du formulaire
    var email = document.getElementById('email').value;
    var commentaire = document.getElementById('comment').value;

    // Vérifier si l'adresse email est valide (expression régulière simple)
    var emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Si l'adresse email est valide, ajouter le commentaire à la section des commentaires
    if (emailValide) {
        var nouveauCommentaire = '<div><strong>' + email + ':</strong> ' + commentaire + '</div>';
        document.getElementById('comments').innerHTML += nouveauCommentaire;
        // Effacer les champs du formulaire après l'envoi
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Adresse email invalide. Veuillez saisir une adresse email valide.');
    }
}

// Écouter l'événement de soumission du formulaire de commentaire
document.getElementById('comment-form').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page par défaut
    event.preventDefault();
    // Appeler la fonction d'envoi de commentaire
    envoyerCommentaire();
});

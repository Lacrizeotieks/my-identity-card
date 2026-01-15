console.log("Test");

// 1. On récupère le bouton et l'endroit où on va écrire
const btn = document.getElementById('Mybtn');
const textDisplay = document.getElementById('message');

btn.addEventListener('click', function() {
    // On vérifie si le paragraphe est vide
    if (textDisplay.innerHTML === "") {
        // S'il est vide, on affiche le message
        textDisplay.innerHTML = "This is my very first repository on GitHub! 🚀";
        btn.innerHTML = "Hide message"; // On change aussi le texte du bouton
    } else {
        // S'il n'est PAS vide, on le vide
        textDisplay.innerHTML = "";
        btn.innerHTML = "Click me!"; // On remet le texte d'origine du bouton
    }

    // Optionnel : un petit effet console pour faire "Cyber"
    console.log("Status: Message displayed successfully.");
});
    
   
 


// injecte la date du jour dans l'input
document.getElementById("date").valueAsDate = new Date();
document.getElementById("savoir").focus();


function ajouter() {
    // Sélectionner l'élément input et récupérer sa valeur
    let savoir = document.getElementById("savoir").value;
    let auteur = document.getElementById("auteur").value;
    let date = document.getElementById("date").valueAsDate;
    // Afficher la valeur

}

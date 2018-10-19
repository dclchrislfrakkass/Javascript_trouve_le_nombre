//Déclaration des variables
var nombre;
var nombreHasard;
nombre = 0;

//calculer un nombre aléatoire entre 0 et 100
var nombreHasard = Math.floor(Math.random() * 100);
console.log(nombreHasard);


//demander un chiffre au joueur et vérifier le chiffre
while (nombre != nombreHasard) {
    nombre = parseInt(prompt("Entrez un nombre !"));

    //si le chiffre esr trop petit
    if (nombre<nombreHasard) {
        console.log("Votre nombre est trop petit!");
    }
    //si le chiffre est trop grand
    else if (nombre>nombreHasard){
        console.log("Votre nombre est trop grand!");
    }
    //quand le chiffre est le même
    else {
        console.log("BRAVO !!! C'était bien le " +nombreHasard);
    }
}



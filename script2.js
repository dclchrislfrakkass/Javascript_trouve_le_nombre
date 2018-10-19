//Nombre de coups max définit par le chiffre max choisit par le joueur


//Déclaration des variables
var nombre;
var nombreHasard;
var nombreMax;
var nombre;
var compteur;
var nbCoups;
nombre = 0;
compteur = 0;
nbCoups = 0;
const DEBUG = false;

//calculer un nombre aléatoire entre 0 et celui choisit par l'utilisateur
nombreMax = parseInt(prompt("Entrez un chiffre maximum pour jouer"))
var nombreHasard = Math.floor(Math.random() * nombreMax);
if (DEBUG) {console.log(nombreHasard);}

//choisir le nombre de coups en fonction du chiffre max choisit
if (nombreMax <= 50) {
    nbCoups = 8;
    console.log("vous avez droit à 8 coups max !");
}
else if (nombreMax <= 100) {
    nbCoups = 10;
    console.log("vous avez droit à 10 coups max !");
}
else if (nombreMax <=200) {
    nbCoups = 20;
    console.log("vous avez droit à 20 coups max !");
}

//demander à l'utilisateur le nombre de coups à jouer (ancienne version)
//   nbCoups= parseInt(prompt("Entrez le nombre de coups max à jouer"))

//limiter le nombre de coups
for (var i=0; i <nbCoups; i++) {    
    console.log(i);
    
    //demander un chiffre au joueur et vérifier le chiffre
    //while (nombre != nombreHasard) {
    nombre = parseInt(prompt("Entrez un nombre !"));

    //vérifie si le nombre est bien supérieur à 0
    if (nombre <=0 ){
        console.log("entrez un chiffre au dessus de 0, merci");
        nombre = parseInt(prompt("Entrez un nombre !"));
    }
    else {
        compteur++;
        //affiche le compteur pour voir
        console.log("le compteur tourne, déjà : " +compteur);
        
        //si le chiffre esr trop petit
        if (nombre < nombreHasard) {
            console.log("Votre nombre est trop petit!");
        }
        //si le chiffre est trop grand
        else if(nombre > nombreHasard){
            console.log("Votre nombre est trop grand!");
        }
        //quand le chiffre est le même
        else {
            if (compteur == 1){
                console.log("Like a boss !!! C'était bien le " +nombreHasard);
                break;
            }
            else if (compteur >1 && compteur <= 5){
                console.log("Vous êtes devins!! C'était bien le " +nombreHasard);
                break;
            }
            else if (compteur >5 && compteur <= 10){
                console.log("Pas mal! en moins de 10 coups! C'était bien le " +nombreHasard);
                break;
            }
            else if (compteur > 10 && compteur <= 15){
                console.log("15 coups...... ca va...le nombre était bien le " +nombreHasard);
                break;
            }
        }
        //nombre max de coups atteint    
    }
    if (i == nbCoups){
        alert("NOOB!!!")
        console.log("Vous avez fait le nombre max de coups! Vous pouvez recommencer!")
        // break;
    }
}
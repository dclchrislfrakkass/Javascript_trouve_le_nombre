function jeu() {

    //variables
    
    var nombreAleatoire;
    var nombreUtilisateur;
    var victoire = false;
    const DEBUG = true;
    
    //tirer un nombre entre 1 et 100 -> nombreAleatoire
    
    nombreAleatoire = Math.round(Math.random()*100);
    if (DEBUG) {console.log("debug : " + nombreAleatoire);} 
    
    //boucle tant que le joueur n'a pas trouvé -> victoire=faux
    
    while (!victoire) {
    
        //"choisi un nombre" -> nombreUtilisateur
    
        nombreUtilisateur = parseInt(prompt("Faites une proposition entre 1 et 100", "000"));
    
        //comparer les deux nombres
            // le nombre est plus grand --> "trop grand"
            if (nombreUtilisateur>nombreAleatoire) {
                console.log("Vous avez vu trop grand !");
            }
            // le nombre est trop petit --> "trop petit"
            else if (nombreUtilisateur<nombreAleatoire) {
                console.log("Vous avez visé trop petit");
            }
            // le nombre est égal
            else {
                //--> victoire=vrais
                victoire = true;
                //--> sortir de la boucle
                break;
            }
        
    }
    
    // gagné !
    console.log("<------  Youuuuuuuuu Winnnnnnnnnnnnn !!!--------->")
    console.log("made by MrB! 19/20/2018")
    
    }
    
    
    jeu(); 
    
    
    
    
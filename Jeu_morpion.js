// Cette variable nous permettra de determiner quelle
// vérification il faut faire.
var Verif = 0;

/* Voici la fonction qui va nous permettre de créer notre grile de jeu */
function remplirMatrice(a) {
let Image = document.querySelectorAll("img");
let Matrice = new array();
for (let i=0; i<a;i++) {
    Matrice[i] = null;
    Image[i].src="images/CaseBlanche.png"; //on insère nos cases blanche
}
}
/* cette fonction va nous permettre de remplir une case vide par une croix.*/
function click_vide(b){
    let Image = document.querySelectorAll("img");
    Matrice[b] = "croix";
    Image[b].src="images/Croix.png";
}

function verifierCaseValide(b){
    if (Matrice[b] != null){
        alert("Cet cellule est déjà prise recommence!! ");
    }
    else{click_vide(b); 
    }
}
function verification(b){
    if(b==2 || || b==6 || b==8){
      
} 





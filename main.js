// Création d'une variable qui contient :
// l'objet Math qui effectue des tâches mathématiques sur les nombres
// --> utilisé avec la méthode floor qui arrondit à l'entier inférieur
// + la méthode random qui ici retourne un nombre au hasard entre 1 (inclus) et 100 (inclus)
let mysteryNumber = Math.floor(Math.random() * 100) + 1;

// Initialisation d'un compteur pour le nombre de tentatives de l'utilisateur
let i = 0;

// Fonction qui récupère la valeur de l'input et affiche des alertes suivant les différents cas de figure
function testing(){
    let inputValue = document.getElementById("number").value;

    if(isNaN(inputValue) == false && inputValue > 0 && inputValue < 101 && i < 7){
        i++;
        //condition imbriquée
        if(inputValue < mysteryNumber){
            alert("C'est plus !");
        }
        else if(inputValue > mysteryNumber){
            alert("C'est moins !");
        }
        else{
            alert(`Bien ouéj, t'as gagné en ${i} coups !`);
        }
    }
    else{
        //condition imbriquée
        if(i > 6){
            alert("C'est beaucoup de tentatives là, NEXT !")
        }
        else{
            alert("Entre 1 et 100 !");
        }
    }
}


// Syntaxe pour les méthodes de Math --> Math.method.(number)
// Récupérer le contenu d'un fichier text avec fetch.
// créer d'abord le boutton avec son id "#"dans le fichier HTML.
let myButton=document.getElementById("button");
// créer un écoute sur le boutton. 
myButton.addEventListener("click", ()=>{

    //Créer la variable permettant de stoquer le texte contenu dans le fichier txt que l'on souhaite faire apparaître dans notre balise (P).
    let paragraphe=document.createElement("p");
    
// utiliser (fetch) suivi des parenthèses puis le nom du fichier entre guillémés contenant la phrase texte que l'on souhaite faire apparaître après le click sur le boutton.
fetch("expression.txt")
//récupérer toutes les informations et les transforment en format text. 
.then(response => response.text()) 
//Retourne les valeurs text déjà récupérées après un temps de l'attence. 
.then(textString => {
    // affecter la valeur texte à la balise P.
    paragraphe.textContent=textString;
// ratacher l'élément à un autre élément html (body) par exemple.
    document.body.append(paragraphe);

});
});


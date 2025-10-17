/*Job􀀃06􀀃
    Par défaut, votre index.php n’a pas de contenu. Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de La Plateforme_.*/

//Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A

const konami = ["ArrowDown", "ArrowUp", "ArrowDown"];
let index = 0;
window.addEventListener("keydown", (e) => {
  if (e.key === konami[index]) {
    index++;
    if (index === konami.length) {
      document.getElementById("changeBody").style.backgroundColor = "#0693E3";
      index = 0;
    }
  } else {
    index = 0;
  }
});

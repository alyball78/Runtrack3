/*job􀀃05􀀃
Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px. Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas de votre fenêtre. De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en fonction du pourcentage de scrolling. */
window.addEventListener("scroll", function () {
  const target = document.getElementById("colorRed");
  if (window.scrollY >= 1000) {
    target.style.backgroundColor = "red";
    target.style.display = "block";
  } else {
    target.style.backgroundColor = "transparent";
  }
});
  
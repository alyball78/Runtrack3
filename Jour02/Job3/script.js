function addone() {
  var elementCompteur = document.getElementById("compteur");
  elementCompteur.innerHTML = parseInt(elementCompteur.innerHTML) + 1;

  if (elementCompteur.innerHTML >= 10) {
    elementCompteur.innerHTML = 10;
  }
  return elementCompteur.innerHTML;
}
var elementButtonIncrement = document.getElementById("button");
elementButtonIncrement.addEventListener("click", () => {
  addone();
});

function removeone() {
  var elementCompteur = document.getElementById("compteur");
  elementCompteur.innerHTML = parseInt(elementCompteur.innerHTML) - 1;
  if (elementCompteur.innerHTML < 0) {
    elementCompteur.innerHTML = 0;
  }
  return elementCompteur.innerHTML;
}
var elementDecrementer = document.getElementById("decrementer");
elementDecrementer.addEventListener("click", () => {
  removeone();
});

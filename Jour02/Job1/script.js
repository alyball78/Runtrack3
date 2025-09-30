var elementArticle = document.getElementById("citation");
console.log(elementArticle.innerHTML);
var elementButton = document.getElementById("button");
elementButton.addEventListener("click", () => {
  console.log(elementArticle.innerHTML);
});

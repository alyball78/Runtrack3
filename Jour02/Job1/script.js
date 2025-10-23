let elementArticle = document.getElementById("citation");
console.log(elementArticle.innerHTML);
let elementButton = document.getElementById("button");
elementButton.addEventListener("click", () => {
  console.log(elementArticle.innerHTML);
});

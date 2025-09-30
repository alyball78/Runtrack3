function showhide() {
  var elementArticle = document.getElementById("citation");

  if (elementArticle.style.display === "none") {
    elementArticle.style.display = "block";
  } else {
    elementArticle.style.display = "none";
  }
}
var elementButton = document.getElementById("button");
elementButton.addEventListener("click", () => {
  showhide();
});

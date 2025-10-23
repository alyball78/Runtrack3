let numbers = [84, 12, 93, 64, 35, 26, 70, 418, 92, 10];
order = "asc";
function tri(numbers, order) {
  if ((order = "asc")) {
    console.log(
      numbers.sort(function (a, b) {
        return a - b;
      })
    );
  } else {
    console.log(
      numbers.sort(function (a, b) {
        return b - a;
      })
    );
  }
}
tri(numbers, "asc");

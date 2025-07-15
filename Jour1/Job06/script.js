function fizzbuzz() {
  for (let index = 1; index <= 150; index++) {
    if (index % 3 == 0) console.log("fizz" + index);
    if (index % 5 == 0) console.log("buzz" + index);
    if (index % 3 == 0 && index % 5 == 0) console.log("fizzbuzz" + index);
  }
}
fizzbuzz();

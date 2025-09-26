function jourtravaille(date) {
  const jourferie = [
    "01/01/2020",
    "13/04/2020",
    "01/05/2020",
    "08/05/2020",
    "21/05/2020",
    "01/06/2020",
    "14/07/2020",
    "15/08/2020",
    "01/11/2020",
    "11/11/2020",
    "25/12/2020",
  ];

  let day = new Date(date).getDay();
  let isWeekend = day === 6 || day === 0;
  if (isWeekend) {
    console.log("c'est un weekend");
  } else {
    console.log("c'est un jour de travail");
  }
  if (jourferie.includes(date)) {
    console.log("c'est un jour férié");
  } else {
    console.log("c'est un jour de travail");
  }
}

const form = document.getElementById("formulaire");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputdate = document.getElementById("date").value;
  jourtravaille(inputdate);
});

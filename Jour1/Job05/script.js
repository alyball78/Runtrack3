var tab = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
for (day = 0; day < tab.length; day++) {
  const element = tab[day];
  if (element == "lundi") {
    alert("le service est fermé");

    console.log(element);
    /Vous pouvez prendre rendez-vous en ligne/;
  }
}

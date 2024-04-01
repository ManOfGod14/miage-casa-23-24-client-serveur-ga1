const heuresId = document.querySelector("#heuresId");
const minutesId = document.querySelector("#minutesId");
const secondesId = document.querySelector("#secondesId");
const millisecondesId = document.querySelector("#millisecondesId");

const startId = document.querySelector("#startId");
const stopId = document.querySelector("#stopId");
const resetId = document.querySelector("#resetId");

let timerId; // stocker l'id du timer
let heure = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// fonction pour afficher 2 chiffres lorsqu'on a 1 seul chiffre
function numberFormat(nbr) {
  return nbr.toString().padStart(2, "0");
}

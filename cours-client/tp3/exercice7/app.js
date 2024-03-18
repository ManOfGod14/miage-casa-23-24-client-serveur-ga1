const compteurIdElt = document.querySelector("#compteurId");
const btnIdElt = document.querySelector("#btnId");

let compteur = 0;
btnIdElt.addEventListener("click", function () {
  compteurIdElt.textContent = compteur++;
});

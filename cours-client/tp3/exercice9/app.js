const textIdElt = document.getElementById("textId");
const inputIdElt = document.querySelector("#inputId");
const btnIdElt = document.querySelector("#btnId");

btnIdElt.addEventListener("click", function () {
  // affichage de la valeur du champ input
  console.log(inputIdElt.value);

  if (inputIdElt.value) {
    textIdElt.textContent = inputIdElt.value;
    inputIdElt.value = "";
  } else {
    alert("Veuillez remplir le champ input !");
  }
});

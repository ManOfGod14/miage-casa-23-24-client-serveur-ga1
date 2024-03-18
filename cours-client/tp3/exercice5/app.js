const textIdElt = document.querySelector("#textId");
const btnIdElt = document.querySelector("#btnId");
const listIdElt = document.querySelector("#listId");

// ecouter l'évenement sur le bouton
btnIdElt.addEventListener("click", function () {
  //   console.log(textIdElt.value);
  if (textIdElt.value) {
    //   création d'un élement html en javascript
    const newLi = document.createElement("li");
    //   console.log(newLi);

    //   ajouter un contenu dans l'élement li crée
    newLi.textContent = textIdElt.value;
    //   console.log(newLi);

    //   mettre l'element li crée et son contenu dans son parent ul
    listIdElt.appendChild(newLi);

    // initialisation du champ input
    textIdElt.value = "";
  } else {
    alert("Veuillez remplir le champ input");
  }
});

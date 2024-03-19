const textIdElt = document.querySelector("#textId");
const changerIdElt = document.querySelector("#changerId");
const afficherMasquerIdElt = document.querySelector("#afficherMasquerId");

// changement de couleur du text
changerIdElt.addEventListener("click", function () {
  //   console.log(textIdElt);
  textIdElt.style.color = "red";
  //   textIdElt.style.fontSize = "22px";
});

// afficher/masquer
afficherMasquerIdElt.addEventListener("click", function () {
  //   console.log(textIdElt);
  if (textIdElt.style.display === "none") {
    textIdElt.style.display = "block";
  } else {
    textIdElt.style.display = "none";
  }
});

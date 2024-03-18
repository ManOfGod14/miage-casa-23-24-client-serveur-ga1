const listElt = document.querySelector("#list");
const deleteButtons = document.querySelectorAll(".delete");
// console.log(deleteButtons);

deleteButtons.forEach(function (btnElt) {
  btnElt.addEventListener("click", function () {
    btnElt.parentNode.remove();
  });
});

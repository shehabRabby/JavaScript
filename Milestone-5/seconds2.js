// option-2 Even Handler
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeGreen() {
  document.body.style.backgroundColor = "lightgreen";
}
// option-2 Even end Handler

// option-3 Even Handler
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
// option-3 different Even Handler
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
// option-3 Even end Handler



//option-4 Even Handler :- addEventListener()
// document.getElementByID.addEventListener('type',handler function)
document
  .getElementById("btn-make-orange")
  .addEventListener("click", function makeOrange() {
    document.body.style.backgroundColor = "orange";
  });

document
  .getElementById("btn-make-golden")
  .addEventListener("click", function makeGold() {
    document.body.style.backgroundColor = "gold";
  });


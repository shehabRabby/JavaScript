document.getElementById("update-title").addEventListener("click", function () {
  const pageTitleElement = document.getElementById("page-title");
  pageTitleElement.innerText = "Changed The Title";
  document.body.style.backgroundColor = "gold";
});

document
  .getElementById("update-login-title")
  .addEventListener("click", function () {
    const updateLogiPageTitle = document.getElementById("login-title");
    updateLogiPageTitle.innerText = "Successfully Login";
    document.body.style.backgroundColor = "lightgreen";
  });



  //   set event listener
document.getElementById("btn-update").addEventListener("click", function () {
  //inputfild e ja liksi take dhorbo
  const nameInput = document.getElementById("input-field");
  const fieldText = nameInput.value;
  //jake change krbo take dhore innertext add korbo
  const nameParagraph = document.getElementById("input-fild-title");
  nameParagraph.innerText = fieldText;
});

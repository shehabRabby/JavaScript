document.getElementById("btn-mouse").addEventListener("mouseout", function () {
  console.log("event Trigger");
});

document.getElementById("user-name").addEventListener("focus", function () {
  console.log("This is Name");
});

document.getElementById("user-email").addEventListener("focus", function () {
  console.log("This is Email");
});

document.getElementById("user-name").addEventListener("blur", function () {
  console.log("Name entered");
});

document.getElementById("user-email").addEventListener("blur", function () {
  console.log("Email entered");
});


document.getElementById("user-email2").addEventListener("keyup", function (event) {
  console.log(event.target.value);
});




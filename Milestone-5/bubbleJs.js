//list item-2 click handler
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("clicked item-2");
  this.style.backgroundColor = "yellow";
  event.stopPropagation();  //stoping condition
//   event.stopImmediatePropagation();
});

//ol click handler
document.getElementById("item-list").addEventListener("click", function () {
  console.log("clicked ol section");
  this.style.backgroundColor = "lightgreen";
});

//List container click handler
document.getElementById("list-container").addEventListener("click", function () {
  console.log("clicked list container Section");
  this.style.backgroundColor = "lightblue";
});

//List container click handler
document.getElementById("body").addEventListener("click", function () {
  console.log("clicked body container Section");
  this.style.backgroundColor = "lightyellow";
});

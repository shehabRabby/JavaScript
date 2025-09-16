// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     // console.log(event.target.parentNode);
//     event.target.parentNode.removeChild(event.target) //jetay clic korbo setai remove hobe
//   });
// }


document.getElementById('item-list').addEventListener('click',function(event){
    // console.log(event.target)
    event.target.parentNode.removeChild(event.target);
})

//add new item
document.getElementById("btn-add-item").addEventListener("click", function () {
 //parent tobe added to 
 const ol = document.getElementById('item-list');
 //new item
 const li = document.createElement('li');
 li.classList.add('item');
 li.innerText = 'Brand new item added';
 //add the item
 ol.appendChild (li);
});

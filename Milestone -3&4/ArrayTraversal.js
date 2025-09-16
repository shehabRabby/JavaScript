// Array Travers use for loop
const game = ['Football','Hokey','Badminton','Basketball','Cricket','Tenis','Ruggby'];
for(let i = 0; i<game.length; i++){
    let display = game[i];
    // console.log(display);
}
// Array Travers use for-of loop
for(let j of game){
    // console.log(j);
}

// Array Travers use for-Each loop
game.forEach(function displayArray(i){
    // console.log(i);
})

// Array Travers use Arrow Function (value,index,fullArray)
game.forEach((i)=>{
    console.log(i);
})
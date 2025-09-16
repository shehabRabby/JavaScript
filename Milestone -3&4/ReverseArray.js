// ReverseArray use for loop
const num = [1,2,3,4,5];
for(let i = num.length-1; i>=0; i--){
    // console.log(num[i]);
}


// ReverseArray use Unshift()
const newArray =[];
for(let i = 0; i<num.length; i++){
   newArray.unshift(num[i]);
}
// console.log(newArray);


// ReverseArray use push()
const reverse =[];
for(let i = num.length-1; i>=0; i--){
    reverse.push(num[i]);
}
// console.log(reverse);


// ReverseArray use for-of - unshift
for(const i of num){
    reverse.unshift(i);
}
// console.log(reverse);


// ReverseArray use Reverse method
const arr = num.reverse();
// console.log(arr);


// ReverseArray use One-liner with Spread
const newArr = [...num].reverse();
console.log(newArr);
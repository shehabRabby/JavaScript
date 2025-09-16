let num1 = 10;
let num2 = 2;
let result;
if(num1 > num2){
    result = 2*num1;
    // console.log("The result is double : ", result)
}else{
    result = num1+num2;
    //  console.log("The sum of result is : ", result)
}

// use ternary
let n1 = 11;
let n2 = 29;
let res = (n1>n2) ? n1*2 : n1+n2;
// console.log("Ternary res is : ", res);


// Bus Fare Calculator
let ticket = 800;
let age = 68;
let isStudens = false;

if(age < 10){
    console.log("Free");
}else if(age >= 60){
    let discount = ticket *.15;
    let fare = ticket - discount;
    console.log("Senior Citizens get 15% so ticket fare is = ", fare);
}else if( isStudens ){
    let discount = ticket*.5;
    let fare = ticket - discount;
    console.log("Students get 50% so ticket fare is = ", fare);
}else{
console.log("Ticket fare is : ", ticket);
}

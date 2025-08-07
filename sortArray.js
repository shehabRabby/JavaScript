
// Sort String Array use sort() 
const car = ['BMW','VOLVO','Mercedes','AUDI','Apache']
car.sort();
// console.log(car);



// Sort() muloto array r elements gulo k string hisebe dhore niye short kore but number er khettre problem hoy se khettre onno vabe sort use korte hbe


// Sort Number Array ascending Order
const num = [122,33,21,50,400,1,30] ;
num.sort(function(a,b){
    return a - b;
})
// console.log(num);

// Sort Number Array Dscending Order
num.sort(function(a,b){
    return b - a;
})
console.log(num);
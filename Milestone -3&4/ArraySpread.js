const arr1 = [22,33,64,656,788,22];
const arr2 = [112,568,234,65,80,34];

// Join to array use Spread(...)
const arr3 = [...arr1, ...arr2];
// console.log(arr3);



// Copy array use spread(...)
const arr4 = [...arr1];
console.log(arr4);
arr4[0]= 2222;
console.log(arr4);
console.log(arr1);


// Find MAX MIN use Spread(...)
const maxValue = Math.max(...arr1);
console.log(maxValue);


// Find MAX MIN use Spread(...)
const minValue = Math.min(...arr2);
console.log(minValue);


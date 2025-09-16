// Count how many times a string has the letter a or A
// let str = 'Aktab Hossain';
// let count = 0;
// for(let i=0; i<=str.length; i++){
//     if(str[i]==='a' || str[i]==='A'){
//         count++;
//     }
// }
// console.log('Total a is : ',count);



// Check whether a string contains all the vowels a, e, i, o, u
// let str1 = 'Programming Hero';
// let str = str1.toLowerCase();
// let count = 0;
// for(let i = 0; i<=str.length; i++){
//     if(str[i]==='a' || str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//         count++;
//         console.log(str[i])
//     }
// }
// console.log("Total vowel in this string : ",count);



// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let str = 'Six';
let res='';
for(let i =0; i<str.length; i++){
    if(str[i]==='x'){
      res += 'y';
    }else if(str[i]==='X'){
        res += 'Y';
    }
    else{
        res += str[i];
    }
}
console.log("Update string is : ",res);
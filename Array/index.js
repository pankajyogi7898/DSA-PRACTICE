const prompt = require("prompt-sync")()

//1. Accept value from the user  and assign in the array


// let n = Number(prompt("Enter a Number : "));

// let arr = new Array(n)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter a Value : "))
// }
// console.log(arr);

//2. Sum of Array Elements

// let n = Number(prompt("Enter a Number : "))
// let arr = new Array(n)
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter a Value : "))
//     sum = sum + arr[i]
// }
// console.log(arr)
// console.log(`Sum of Array Elements : ${sum}`)


//3. Max number form the Array

// let arr = [193,21,2319,344,4211,43,45,7434,4342,231]
// let max = arr[0];
// for(let i =1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(arr)
// console.log("maximum number from array :  " + max)

//4. find the Second Maximum value of the array.

let arr = [193, 21, 2319, 344, 4211, 43, 45, 7434, 4342, 231]
let max = Math.max(arr[0], arr[1])
let sMax = Math.min(arr[0], arr[1])

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max
        max = arr[i]
    }
    else if (arr[i] > sMax && arr[i] != max) {
        sMax = arr[i];
    }
}
console.log(arr)
console.log("Second max of Array : " + sMax);

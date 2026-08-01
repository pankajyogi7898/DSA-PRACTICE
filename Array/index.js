const prompt = require("prompt-sync")()

//1. Accept value from the user  and assign in the array


// let n = Number(prompt("Enter a Number : "));

// let arr = new Array(n)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter a Value : "))
// }
// console.log(arr);

//2. Sum of Array Elements

let n = Number(prompt("Enter a Number : "))
let arr = new Array(n)
let sum = 0
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter a Value : "))
    sum = sum + arr[i]
}
console.log(arr)
console.log(`Sum of Array Elements : ${sum}`)



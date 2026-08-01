//1. Accept value from the user  and assign in the array

const prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number : "));

let arr = new Array(n)

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter a Value : "))
}
console.log(arr);
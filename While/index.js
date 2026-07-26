//1 Write a program that takes an integer "n" as input and computes the sum of its digits. • The input number is always positive.


let prompt = require("prompt-sync")()
let n = Number(prompt("Enter Number : "))

let sum = 0;
while (n > 0) {
    let rem = n % 10
    sum = sum + rem
    n = Math.floor(n / 10)
}
console.log(sum)
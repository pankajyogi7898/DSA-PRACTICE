let prompt = require("prompt-sync")()
//1 Write a program that takes an integer "n" as input and computes the sum of its digits. • The input number is always positive.

// let n = Number(prompt("Enter Number : "))

// let sum = 0;
// while (n > 0) {
//     let rem = n % 10
//     sum = sum + rem
//     n = Math.floor(n / 10)
// }
// console.log(sum)

//2. Write a program that accepts a positive integer "n" as input and return the reverse of the number.


let n = Number(prompt("Enter Number : "))
let reverse = 0
while (n > 0) {
    let rem = n % 10
    reverse = rem + (reverse * 10)
    n = Math.floor(n / 10)
}
console.log(reverse)

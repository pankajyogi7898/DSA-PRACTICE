//1. Write a program to check whether a given number is a Harshad Number or not. A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits. For example, 18 is a Harshad number because 1 + 8 = 9, and 18 % 9 == 0.

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number : "))
let copy = num
let sum = 0;

while (num > 0) {
    let digit = num % 10
    sum = sum + digit
    num = Math.floor(num / 10)
}
console.log(sum)
console.log(copy % sum === 0 ? "Harshad Number or Niven Number " : "No harshad number")
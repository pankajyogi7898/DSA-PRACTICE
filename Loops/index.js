const propmt = require("prompt-sync")()
//1. Given an integer n, print all natural numbers from 1 to n.

// let number = Number(propmt("Enter Number: "));
// for (let i = 0; i <= number; i++) {
//     console.log(i)
// }


// 2. Given an integer n, print all natural numbers starting from n down to 1.
// let number = Number(propmt("Enter Number: "));
// for (let i = number; i >= 1; i--) {
//     console.log(i)
// }

// 3. Write a program that accepts an integer "n" and calculates the sum of the first "n" natural numbers. Natural numbers start from 1 and go up to "n".
let number = Number(propmt("Enter Number: "));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);





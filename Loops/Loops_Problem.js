const prompt = require("prompt-sync")()
// LOOPS PROBLEM 1
//1. Write a program that accepts an integer "n" as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. • If the number is prime, print "Prime". • Otherwise, print "Not Prime".


// const num = Number(prompt("Enter Number:"));

// let isPrime = true;
// if (num < 2) {
//     isPrime = false;
// }else {
//     for (let i = 2; i <= num - 1; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }


//3. Write a program that accepts two integers, a and b, as input and calculates the value of a raised to the power of b (a^b). For example, if a = 2 and b = 3, the result is 8 (since 2^3 = 8).

const num1 = Number(prompt("Enter first Number:"));
const num2 = Number(prompt("Enter second Number:"));
let result = 1
for (let i = 1; i <= num2; i++) {
    result = result * num1
}
console.log(result)



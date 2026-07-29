let prompt = require("prompt-sync")()

//1. Write a program to check whether a given number is a Harshad Number or not. A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits. For example, 18 is a Harshad number because 1 + 8 = 9, and 18 % 9 == 0.


// let num = Number(prompt("Enter a Number : "))
// let copy = num
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10
//     sum = sum + digit
//     num = Math.floor(num / 10)
// }
// console.log(sum)
// console.log(copy % sum === 0 ? "Harshad Number or Niven Number " : "No harshad number")

//2. An Abundant Number is a number for which the sum of its proper divisors (divisors excluding the number itself) is greater than the number. Your task is to write a program to determine if a given number is an Abundant Numbers. Return "Yes" or "No".

// let num = Number(prompt("Enter a Number :"))
// let sum = 0;
// for (let i = 1; i <= num / 2; i++) {
//     if (num % i == 0) {
//         sum = sum + i
//     }

// }
// console.log(sum > num ? `Number ${num} is Abundant` : `Number ${num} is Not Abundant`);

//3. Write a program to find and print all the prime factors of a given number. A prime factor is a factor that is a prime number. If the number is 0 or 1, print No prime factors.

// let num = Number(prompt("Enter a Number :"))

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         let prime = true
//         if (i < 2) {
//             prime = false;
//         }
//         else {
//             for (let j = 2; j < i; j++) {
//                 if (i % j === 0) {
//                     prime = false
//                     break;
//                 }
//             }
//             if (prime) {
//                 console.log(i);
//             }
//         }

//     }
// }


//4. Write a program that takes an integer n as input and prints a right triangle star pattern with n rows. • Each row should contain stars (*) with spaces between them. • The number of stars increases as you move from the first row to the nth row.
// *
// * *
// * * *
// * * * *
// * * * * *

let n = Number(prompt("Enter a Number :"))
for (let i = 1; i <= n; i++) {
    let ch = 65;
    for (j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ch) + " ");
        ch++;
    }
    console.log(" ")
}
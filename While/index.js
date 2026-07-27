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

// let n = Number(prompt("Enter Number : "))
// let reverse = 0
// while (n > 0) {
//     let rem = n % 10
//     reverse = rem + (reverse * 10)
//     n = Math.floor(n / 10)
// }
// console.log(reverse)

//3. Write a program that accepts a 10-digit ISBN number and checks whether it is a valid ISBN number or not.
// valid isbn no - 0201314525 , 0131103628 , 8175257660
//invalid isbn no  - 0201314524 , 0132350883 , 0201633613



// let num = Number(prompt("Enter Number : "))
// let print = num
// let copy = num;
// let count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10)
// }
// if (count != 10) console.log("Invalid ISBN number");
// else {
//     let ans = 0;
//     while (copy > 0) {
//         let digit = copy % 10
//         ans = ans + (count * digit)
//         count--
//         copy = Math.floor(copy / 10)
//     }
//     console.log(ans % 11 === 0 ? `${print} is Valid ISBN` : `${print} is Invalid ISBN`)
// }


//4. Write a program that accepts a number n and checks whether it is an Automorphic Number or not.
// An Automorphic Number is a number whose square ends with the same digits as the number itself.


// let num = Number(prompt("Enter Number : "))
// let copy = num;
// let count = 0;
// let sq = num * num
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10)
// }
// if (sq % Math.pow(10, count) == copy) console.log("AUTOMORPHIC Number");
// else {
//     console.log("Not AUTOMORPHIC Number");
// }

//5. do while loop - Write a program to Computer generate a random number b/w 1 to 100 and user guess the number is correct or not

// let computer = Math.floor((Math.random() * 100) + 1)
// let user;
// do {
//     user = Number(prompt("Enter a number b/w 1 to 100 : "))
//     if (user > computer) console.log("To Large");
//     else if (user < computer) console.log("To Small");
//     else if (user == computer) console.log(`Congratulations!! , you guessed number is Correct ${computer}`);
//     else {
//         console.log("Invalid Number..");
//     }
// } while (user != computer);
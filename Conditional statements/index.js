// 1. accept two number and write a program to find and return greatest of the two numbers

const propmt = require("prompt-sync")()
// let n1 = Number(propmt("Enter first number: "));
// let n2 = Number(propmt("Enter second number: "));

// if (n1 > n2) {
//     console.log(n1)
// }
// else {
//     console.log(n2)
// }

// 2  Write a program that takes an integer as input and checks whether the number is even or odd. • If the number is even, return "Even". • If the number is odd, return "Odd".

// let num = Number(propmt("Enter number: "));

// if (num % 2 == 0) {
//     console.log("Even")
// }
// else {
//     console.log("Odd")
// }


//3. Write a program that takes an integer representing a year as input and checks whether it is a leap year. A year is considered a leap year if it satisfies either of the following conditions: 1. It is divisible by 4 but not divisible by 100, or 2. It is divisible by 400. •. If the year is a leap year, print "Leap Year". •. Otherwise, print "Not a Leap Year".

let year = Number(propmt("Enter year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}


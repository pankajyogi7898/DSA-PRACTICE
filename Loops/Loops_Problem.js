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

// const num1 = Number(prompt("Enter first Number:"));
// const num2 = Number(prompt("Enter second Number:"));
// let result = 1
// for (let i = 1; i <= num2; i++) {
//     result = result * num1
// }
// console.log(result)

//4. A number is called a strong number if the sum of the factorial of its digits is equal to the number itself. Write a program that accepts a number and checks if it is a strong number. • If n is a strong number, print "Yes". • Otherwise, print "No".

// let n = Number(prompt("Enter Number:"));
// let original_num = n;
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10

//     let fact = 1;
//     for (let i = 1; i <= digit; i++) {
//         fact = fact * i
//     }
//     sum = fact + sum
//     n = Math.floor(n / 10)
// }
// if (sum === original_num) {
//     console.log("Yes,it is strong num")
// }
// else {
//     console.log(`Not Strong number ${n}`)
// }

//5. use a break statement - jab loops chalta rhta hai aur hame koi condition par loop ko rokna hota hai to vaha par break use krte hai

//for example - koi class mein 10 student hai usko "ram" name ke ldke ko dhoodhna hai attedance le rhe hai teacher vo student 6th position pe mil gya...uske baad uske aage hi nhi jayega to aaise condition mein break ka use krte hai

for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i)
}
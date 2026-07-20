// LOOPS PROBLEM 1
//1. Write a program that accepts an integer "n" as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. • If the number is prime, print "Prime". • Otherwise, print "Not Prime".

const prompt = require("prompt-sync")()

const num = Number(prompt("Enter Number:"));

let isPrime = true;
if (num < 2) {
    isPrime = false;
}else {
    for (let i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}
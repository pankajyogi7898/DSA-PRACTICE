// 1. accept two number and write a program to find and return greatest of the two numbers

const propmt = require("prompt-sync")()
let n1 = Number(propmt("Enter first number: "));
let n2 = Number(propmt("Enter second number: "));

if (n1 > n2) {
    console.log(n1)
}
else {
    console.log(n2)
}



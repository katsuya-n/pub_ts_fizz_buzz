"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (const num of numbers) {
    if (num % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(num);
    }
}

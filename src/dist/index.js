"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var result = "";
for (const num of numbers) {
    result += " ";
    if (num % 15 === 0) {
        result += "FizzBuzz";
    }
    else if (num % 5 === 0) {
        result += "Buzz";
    }
    else if (num % 3 === 0) {
        result += "Fizz";
    }
    else {
        result += `${num}`;
    }
}
console.log(result);

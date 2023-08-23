// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

const textToShow = `My first name is ${firstName} and my last name is ${lastName}.`;
console.log(textToShow);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2

const resultYear = Number(year) + number; // alternative to coercion: resultYear = +year + number
console.log(resultYear);

// --------------------------------------
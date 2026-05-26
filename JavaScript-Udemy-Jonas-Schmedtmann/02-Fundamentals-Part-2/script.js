// Activating Strict mode
// "use strict";

// Functions

// function logger() {
//     console.log("My name is Nupur");
// }

// // callaing / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(5, 0)

// console.log(fruitProcessor(5, 0));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function greet(userName) {
//     console.log(`Welcome back, ${userName}`);
// }

// greet("Ram");
// greet("Sita");


// Functions Declarations vs. Expressions

// Function Declarations

// function calcAge1(birthYear) {
//     return 2026 - birthYear;
// }

// // console.log(calcAge1(2015));
// const age1 = calcAge1(2015);
// console.log(age1);


// // Function Expression

// const calcAge2 = function (birthYear) {
//     return 2026 - birthYear;
// }

// const age2 = calcAge2(2015);
// console.log(age2);


// Arrow functions

// const calcAge3 = birthYear => 2026 - birthYear;

// const age3 = calcAge3(2010);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirment = 65 - age;
//     return retirment;
// }

// const age4 = yearsUntilRetirement(2000);
// console.log(age4);


// DAY 4
// Functions Calling Other Functions
// Reviewing Functions
// 1. functio declaration, 2. function expression, 3. Arrow function
// Introduction to Arrays
const friends = ["Ram", "Shyam", "Laxman"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Sita";
console.log(friends);

const firstName = "Nupur";
const aboutUser = [firstName, "Joshi", 2037 - 1991, "UI designer", friends];

console.log(aboutUser);

const years = new Array(2001, 2002, 2003);
console.log(years);

// Exercise

const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const years1 = [1990, 2000, 1947, 2015];

console.log(calcAge(years1[1]));





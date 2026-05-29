// Activating Strict mode
// "use strict";

// Functions
// function logger() {
//     console.log("My name is Nupur");
// }
// // callaing / running / invoking function
// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// fruitProcessor(5, 0)
// console.log(fruitProcessor(5, 0));
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// function greet(userName) {
//     console.log(`Welcome back, ${userName}`);
// greet("Ram");
// greet("Sita");
// Functions Declarations vs. Expressions
// Function Declarations
// function calcAge1(birthYear) {
//     return 2026 - birthYear;
// // console.log(calcAge1(2015));
// const age1 = calcAge1(2015);
// console.log(age1);
// // Function Expression
// const calcAge2 = function (birthYear) {
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
// const age4 = yearsUntilRetirement(2000);
// console.log(age4);
// DAY 4
// Functions Calling Other Functions
// Reviewing Functions
// 1. functio declaration, 2. function expression, 3. Arrow function
// Introduction to Arrays
// const friends = ["Ram", "Shyam", "Laxman"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Sita";
// const firstName = "Nupur";
// const aboutUser = [firstName, "Joshi", 2037 - 1991, "UI designer", friends];
// console.log(aboutUser);
// const years = new Array(2001, 2002, 2003);
// console.log(years);
// // Exercise
// const calcAge = function (birthYear) {
// const years1 = [1990, 2000, 1947, 2015];
// console.log(calcAge(years1[1]));

// DAY 5
// Basic Arrey Operations (methods)
// friends.push("Sita");
// friends.unshift("Maruti");
// friends.pop(); // Last element remove
// friends.shift(); //first element remove
// console.log(friends.indexOf("Shyam"));
// console.log(friends.includes("Maruti"));
// console.log(friends.includes("Ram"));
// Introduction to Objects
// const userDetails = {
//     userName: "Nupur",
//     lastName: "Joshi",
//     age: 2026 - 1980,
//     job: "Fullstack Developer",
//     friends: ["Ram", "Laxman", "Sita"]
// };
// // Dot vs. Bracket Notation
// console.log(userDetails);
// console.log(userDetails.userName);
// console.log(userDetails["userName"]);
// let nameKey = "Name";
// console.log(userDetails["user" + nameKey]);
// console.log(userDetails["last" + nameKey]);
// console.log(userDetails["user" + nameKey], userDetails["last" + nameKey]);
// // const interstedIn = prompt("What do you want to know about User? Choose between userName, lastName, age, job, friends?")
// // console.log(userDetails[interstedIn]);
// // Challenge
// console.log(`${userDetails.userName} has ${userDetails.friends.length} friends, and his best friend is called ${userDetails.friends[0]}.`);
// Object Methods

// const userDetails = {
//     userName: "Nupur",
//     lastName: "Joshi",
//     birthYear: 1970,
//     job: "Fullstack Developer",
//     friends: ["Ram", "Laxman", "Sita"],
//     hasDriversLicense: false,

// calcAge: function (birthYear) {
//     return 2026 - birthYear;
// }

// calcAge: function () {
//     return 2026 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2026 - this.birthYear;
//         return this.age;
//     },

//     checkLicense: function () {
//         if (this.hasDriversLicense === true) {
//             return "a";
//         } else {
//             return "no";
//         }
//     }
// };
// console.log(userDetails.calcAge(2000));
// console.log(userDetails.calcAge());
// console.log(userDetails.age);
// // console.log(userDetails.checkLicense);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a/no driver's license."

// console.log(`${userDetails.userName} is a ${userDetails.age}-year old ${userDetails.job}, and he has ${userDetails.checkLicense()} driver's license.`);

// Iteration : The for Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// DAY 6

// Looping Arrays, Breaking and Continuing

// const userDetails = [
//     "Nupur",
//     "Joshi",
//     2026 - 1980,
//     "Fullstack Developer",
//     ["Ram", "Laxman", "Sita"],
//     123
// ];

// for (let i = 0; i < userDetails.length; i++) {
//     console.log(`${userDetails[i]}`)
// }

const birthYears = [1980, 1994, 1996, 2008, 2019];
const currentYear = 2026;
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  // console.log(`User age is ${currentYear - birthYears[i]}`)
  ages.push(`${currentYear - birthYears[i]}`);
}
console.log(ages);

// continue and break
// Looping Backwards and Loops in Loops
// While loop

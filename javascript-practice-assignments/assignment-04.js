/*

Assignment 4 — BMI Calculator

Create 2 variables:

weight
height

Calculate BMI using formula:

BMI = weight / (height * height)


Then print: Your BMI is 22.5

*/

let weight = 45;
let height = 1.8;
let rawBMI = weight / (height * height);
let BMI = Number(rawBMI.toFixed(2));

if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI}. You are Underweight`);
} else if (BMI < 25) {
    console.log(`Your BMI is ${BMI}. You are Healthy / Normal weight`);
} else if (BMI < 30) {
    console.log(`Your BMI is ${BMI}. You are Overweight`);
} else if (BMI >= 30) {
    console.log(`Your BMI is ${BMI}. You are Obese`);
} else {
    console.log("Please enter correct value");
}

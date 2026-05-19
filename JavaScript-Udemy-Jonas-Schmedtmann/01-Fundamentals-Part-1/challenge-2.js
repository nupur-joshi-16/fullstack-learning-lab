// DATA 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// DATA 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);
let markheigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log("Mark's BMI = " + bmiMark + " is heigher than John's BMI:" + bmiJohn + "? : " + markheigherBMI);

// Template Literals
console.log(`Mark's BMI = ${bmiMark} is heigher than John's BMI: ${bmiJohn}? : ${markheigherBMI}`);


if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}


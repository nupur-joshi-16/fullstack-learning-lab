const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    },
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    },
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {

    console.log(`${john.fullName}'s BMI ${john.bmi} is lower than ${mark.fullName}'s ${mark.bmi}!`)
} else {

    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`)
}


// console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`)


//     calcAge: function () {
//         this.age = 2026 - this.birthYear;
//         return this.age;
//     },





// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// let bill = 275;

// Test Data
// bill = 40;
// bill = 430;


// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + Number(tip)}`)


let bills = [125, 555, 44];

// function calcTip(bill) {
//     let tip = bill >= 50 && bill <= 300 ? `${bill * (15 / 100)}` : `${bill * (20 / 100)}`;
//     return tip
// }

function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
    return tip
}


let tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
]

console.log(tips[0]);
console.log(tips[1]);
console.log(tips[2]);

// let totals = [
//     Number(bills[0]) + Number(calcTip(bills[0])),
//     Number(bills[1]) + Number(calcTip(bills[1])),
//     Number(bills[2]) + Number(calcTip(bills[2])),
// ]

// let totals = [
//     bills[0] + calcTip(bills[0]),
//     bills[1] + calcTip(bills[1]),
//     bills[2] + calcTip(bills[2]),

// ]

let totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]

]

console.log(totals[0]);
console.log(totals[1]);
console.log(totals[2]);



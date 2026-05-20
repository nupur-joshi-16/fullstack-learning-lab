let bill = 275;

// Test Data
// bill = 40;
// bill = 430;

let tip = bill >= 50 && bill <= 300 ? `${bill * (15 / 100)}` : `${bill * (20 / 100)}`;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + Number(tip)}`)

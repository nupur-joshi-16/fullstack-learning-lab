let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoals = (88 + 91 + 110) / 3;

// Test Data 2
scoreDolphins = (96 + 108 + 89) / 3;
scoreKoals = (108 + 100 + 110) / 3;

// Test Data 3
scoreDolphins = (101 + 101 + 101) / 3;
scoreKoals = (101 + 101 + 101) / 3;

let minScore = 100

console.log(scoreDolphins);
console.log(scoreKoals);

if (scoreDolphins > scoreKoals && scoreDolphins >= minScore) {
    console.log("Dolphins win the trophy.")
} else if (scoreKoals > scoreDolphins && scoreKoals >= minScore) {
    console.log("Koalas win the trophy.")
} else if (scoreDolphins === scoreKoals && scoreDolphins >= minScore && scoreKoals >= minScore) {
    console.log("Both win the trophy.")
} else {
    console.log("No teams win the trophy.")
}

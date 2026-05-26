'use strict';

// let calcAverage = (score1, score2, score3) => {
//     let averageScore = (score1 + score2 + score3) / 3;
//     return averageScore;
// }

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// TEST DATA 3
scoreDolphins = calcAverage(27, 32, 19);
scoreKoalas = calcAverage(87, 79, 92);

let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return "No team wins...";
    }
}

let winner = checkWinner(scoreDolphins, scoreKoalas);

console.log(winner);





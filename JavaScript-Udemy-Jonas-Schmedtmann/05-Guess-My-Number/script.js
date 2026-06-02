"use strict";

/*
console.log(document.querySelector(".message").textContent);

// What is the DOM and DOM manipulation
// Selecting and Manipulating Elements

document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 4;
console.log(document.querySelector(".guess").value);
*/

// Handling Click Events
// document.querySelector(".check").addEventListener("click", function () {
//   // console.log(document.querySelector(".guess").value);
//   // document.querySelector(".message").textContent = "Correct Number!";
//   //   const guess = document.querySelector(".guess").value;
//   // console.log(guess);
//   // console.log(typeof guess);
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector(".message").textContent = "No Number!";
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   alert("I am trying to understand addEventListener");
// });

// let userAge = 0;

// if (!userAge) {
//   console.log("Hi");
// } else {
//   console.log("Bye");
// }

//Implementing the Game Logic

const secreatNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secreatNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);
  // console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secreatNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secreatNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      document.querySelector(".score").textContent = score--;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secreatNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      document.querySelector(".score").textContent = score--;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Manipulating CSS Styles

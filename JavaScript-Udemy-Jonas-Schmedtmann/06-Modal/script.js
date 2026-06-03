"use strict";

// Selecting elements
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");

const openModel = function () {
  //   console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // modal.computedStyleMap.display = "block";
};

const closeModal1 = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < showModal.length; i++) {
//   console.log(showModal[i].textContent);
// }

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModel);
}

// closeModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

closeModal.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

// document.addEventListener("keydown", function (e) {
//   //   console.log("key pressed");
//   console.log(e);
//   if (e.key === "Escape") {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal1();
//     }
//   }
// });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal1();
  }
});
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

"use strict";

// selecting elements
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  // 3. Check if it rolled 1:
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById("`current--${activePlayer}").textContent =
      currentScore;
  } else {
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

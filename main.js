"use strict";

let randomNumber = () => Number(Math.random() * 11).toFixed(0);

const inputAttempt = document.getElementById("attemptNum");
const guessAttemptBtn = document.getElementById("guessBtn");
const tryAgainBtn = document.getElementById("tryAgain");

let numberToGuess = randomNumber();
let attemptCounter = 0;

guessAttemptBtn.addEventListener("click", tryToGuess);
tryAgainBtn.addEventListener("click", restart);
inputAttempt.addEventListener("keydown", enterGuess);

function tryToGuess(event) {
    attemptCounter++;
    const guess = inputAttempt.value;
    if (guess == numberToGuess) {
        // Display changes
        document.getElementsByClassName("main1")[0].style.display = "none";
        document.getElementsByClassName("main2")[0].style.display = "block";
        document.getElementById("counter").setHTML(attemptCounter);
        // Event Listener changes
        event.stopPropagation();
        inputAttempt.removeEventListener("keydown", enterGuess);
        document.addEventListener("keydown", enterToTryAgain);
    }
    else {
        return false;
    }
}

function restart(event) {
    attemptCounter = 0;
    numberToGuess = randomNumber();
    // Visual changes
    document.getElementsByClassName("main2")[0].style.display = "none";
    document.getElementsByClassName("main1")[0].style.display = "block";
    // Event Listener changes
    event.stopPropagation();
    document.removeEventListener("keydown", enterToTryAgain);
    inputAttempt.addEventListener("keydown", enterGuess);
}

// Listener functions
function enterToTryAgain(event) {
    if (event.key === "Enter") {
        restart(event);
    }
}
function enterGuess(ev) {
    if (ev.key === "Enter") { 
        tryToGuess(ev);
    }
}
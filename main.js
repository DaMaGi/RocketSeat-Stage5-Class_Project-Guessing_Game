"use strict";

let randomNumber = () => Number(Math.random() * 11).toFixed(0);

const screen1 = document.getElementsByClassName("main1")[0];
const screen2 = document.getElementsByClassName("main2")[0];
const numInputElem = document.getElementById("attemptNum");

let numberToGuess = randomNumber();
let attemptCounter = 0;

numInputElem.addEventListener("keydown", enterGuess);
document.getElementById("guessBtn").addEventListener("click", tryToGuess);
document.getElementById("tryAgain").addEventListener("click", restart);

function tryToGuess(event) {
    attemptCounter++;
    if (numInputElem.value == numberToGuess) {
        // Display changes
        screen1.style.display = "none";
        screen2.style.display = "block";
        document.getElementById("counter").setHTML(attemptCounter);
        // Event Listener changes
        event.stopPropagation();
        numInputElem.removeEventListener("keydown", enterGuess);
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
    screen2.style.display = "none";
    screen1.style.display = "block";
    // Event Listener changes
    event.stopPropagation();
    document.removeEventListener("keydown", enterToTryAgain);
    numInputElem.addEventListener("keydown", enterGuess);
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
const form = document.querySelector("form");
const guess = form.querySelector("#guess-input");
const resultText = document.querySelector(".result-text");
const prevGuessDiv = document.querySelector(".prev-guesses");
const guessAttempt = document.querySelector(".guess-attempt");
const infoBtn = document.querySelector(".info-btn");
const restartBtn = document.querySelector(".reset-btn");
let attempt = 1;
let prevGuesses = [];

let randomNumber = Math.floor(Math.random() * 100) + 1;

restartBtn.style.display = "none";

//event listeners

infoBtn.addEventListener("click", () => {
  Swal.fire({
    padding: "2rem",
    title: "<b>How To Play ?</b>",
    icon: "info",
    html: `<ul>
      <li>A number between 0-100 will be generated when the game starts</li>
      <li>And try to guess this number !!!</li>
      <li>There will also be little hints that tell you how close you are!</li>
      <li>Come on, what are you waiting for, get started!!</li>
      </ul>`,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: true,
    confirmButtonText: "Roger !!",
    buttonsStyling: false,
    customClass: {
      popup: "popup-class",
      title: "title-class",
      content: "content-class",
    },
  });
});

restartBtn.addEventListener("click", function () {
  restartBtn.style.display = "none";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guess.value = "";
  resultText.textContent = "";
  prevGuessDiv.textContent = "";
  guessAttempt.textContent = `1. Guess`;
  attempt = 1;
  prevGuesses = [];
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (guess.value === "") {
    resultText.textContent = "Guess a number first";
    setTimeout(() => {
      resultText.textContent = "";
    }, 2000);
  } else {
    const diff = Math.abs(guess.value - randomNumber);
    prevGuesses.push(guess);
    getAttempt();
    getResult(diff);
    showPrevGuesses();
    console.log(randomNumber, prevGuesses);
  }
});

//functions

function getResult(diff) {
  let msg;
  if (diff === 0) {
    msg = `Congratulations you know !! ${
      attempt - 1
    }. you guessed it. Click below to play again`;
    restartBtn.style.display = "";
  } else if (diff < 5) {
    msg = "so hooooot! You're close, try hard";
  } else if (diff < 15) {
    msg = "Well, it's warm. You can approach it with a little effort.";
  } else if (diff < 25) {
    msg = "We are cold dad !!";
  } else if (diff < 35) {
    msg = "But I'll be back soon, try some more";
  } else if (diff < 45) {
    msg = "Cooold as iceeee !!!!";
  } else {
    msg = "Ooooo get away from here you're in the wrong place";
  }
  resultText.textContent = msg;
}

function getAttempt() {
  attempt++;
  guessAttempt.textContent = `${attempt}. Guess`;
}

function showPrevGuesses() {
  const index = prevGuesses.length - 1;
  const guesses = document.createElement("li");
  guesses.textContent = prevGuesses[index].value;
  prevGuessDiv.appendChild(guesses);
}
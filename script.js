'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let numberElement = document.querySelector('.number');
let againElement = document.querySelector('.again');
let checkElement = document.querySelector('.check');
let guessElement = document.querySelector('.guess');
let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.Score');
let highScoreElement = document.querySelector('.highscore');

let bodyElement = document.querySelector('body');

const displayMessage = function (message) {
  messageElement.textContent = message;
};

numberElement.textContent = '?';
// Test
console.log(secretNumber);
//again Func
againElement.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberElement.textContent = '?';
  //Test
  console.log(secretNumber);
  guessElement.value = '';
  displayMessage('⌛️ Start Guessing...');
  bodyElement.style.backgroundColor = '#1a1a1a';
  numberElement.style.width = '6rem';
  score = 20;
  scoreElement.textContent = score;
  highScoreElement.textContent = highscore;
});
// check Func
checkElement.addEventListener('click', function () {
  const guess = Number(guessElement.value);
  // if no Inputs
  if (!guess) {
    displayMessage(' ❌ No Number !');
  }
  // if there's Inputs
  else if (guess === secretNumber) {
    displayMessage(' ✔️ Correct Number !');
    bodyElement.style.backgroundColor = 'green';
    numberElement.style.width = '20rem';
    numberElement.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    bodyElement.style.backgroundColor = '#1a1a1a';
    numberElement.style.width = '6rem';
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('📈 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

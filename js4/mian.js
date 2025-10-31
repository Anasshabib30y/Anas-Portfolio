let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    ValidateGuess(guess);
  });
}

function ValidateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuesses(guess);
      displayMassege(`Game Over! The correct number was ${randomNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassege('You guessed correctly!');
    endGame();
  } else if (guess > randomNumber) {
    displayMassege('Too high! Try again');
  } else {
    displayMassege('Too low! Try again');
  }
}

function displayGuesses(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}


function displayMassege(message) {
  lowOrHi.innerHTML = message;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numGuesses = 1;
    playGame = true;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    if (startOver.contains(p)) {
      startOver.removeChild(p);
    }
  }, { once: true });
}

function endGame() {
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

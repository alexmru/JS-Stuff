const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const draw = 'DRAW';
const pWins = 'Player wins!';
const cWins = 'Computer wins!';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random()* 10;
  if(randomValue < 3.4) {
    return ROCK;
  } else if (randomValue > 3.3 && randomValue < 6.7) {
    return PAPER;
  } else if (randomValue > 6.6) {
    return SCISSORS;
  }
}

const getWinner = function (player , computer) {
  if(player === computer) {
    return draw;
  } else if (player === ROCK && computer === SCISSORS ||
     player === PAPER && computer === ROCK || 
     player === SCISSORS && computer === PAPER) {
    return pWins;
  } else if (computer === ROCK && player === SCISSORS ||
    computer === PAPER && player === ROCK || 
    computer === SCISSORS && player === PAPER) {
      return cWins;
    }
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  const winner = getWinner(playerSelection, computerSelection);
  alert(winner);
  gameIsRunning = false;
});

const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const draw = 'DRAW';
const pWins = 'Player wins!';
const cWins = 'Computer wins!';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
  const randomValue = Math.random()* 10;
  if(randomValue < 3.4) {
    return ROCK;
  } else if (randomValue > 3.3 && randomValue < 6.7) {
    return PAPER;
  } else if (randomValue > 6.6) {
    return SCISSORS;
  }
}

const getWinner = (player , computer) => {
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

startGameBtn.addEventListener('click', () => {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  const winner = getWinner(playerSelection, computerSelection);
  let message = `You picked${playerSelection}, computer picked ${computerSelection}, `;
  winner === draw ? message += `it's a draw!` : winner === pWins ? message += ` player wins!` : message += ' computer wins!'
  alert(message);
  gameIsRunning = false;
});

// Nu este legat de joc

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = number => isNaN(number) ? 0 : number;
  let sum = 0;
  for(num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum, 'The result of adding all numbers is ');
}

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for(num of numbers) {
    sum += num;
  }
  resultHandler(sum, 'The result of adding all numbers is ');
}

const showResult = (result , message) => {
  alert(message + result);
}

subtractUp(showResult, 10, 6 , 30 , 20);
sumUp(showResult, 10, 6 , 30 , 20);
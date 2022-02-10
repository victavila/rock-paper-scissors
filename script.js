let playerScore = 5;
let computerScore = 5;

const playerResult = document.querySelector("#player-score");
const computerResult = document.querySelector("#computer-score");
const div = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const results = document.querySelector("#results");
const buttons = document.querySelectorAll(".btn");
const gameOver = document.querySelector("#game-over");

function computerPlay() {
  let randnum = Math.floor(Math.random() * 3);
  if (randnum == 0) {
    return "Rock";
  } else if (randnum == 1) {
    return "Paper";
  } else if (randnum == 2) {
    return "Scissors";
  }
}

function rock(player, computer) {
  if (player.toUpperCase() == "ROCK" && computer == "Paper") {
    playerScore--;
    updateScore();
    return "You Lose! Paper beats Rock";
  } else if (player.toUpperCase() == "ROCK" && computer == "Scissors") {
    computerScore--;
    updateScore();
    return "You Win! Rock beats Scissors";
  }
}

function paper(player, computer) {
  if (player.toUpperCase() == "PAPER" && computer == "Scissors") {
    playerScore--;
    updateScore();
    return "You Lose! Scissors beats Paper";
  } else if (player.toUpperCase() == "PAPER" && computer == "Rock") {
    computerScore--;
    updateScore();
    return "You Win! Paper beats Rock";
  }
}

function scissors(player, computer) {
  if (player.toUpperCase() == "SCISSORS" && computer == "Rock") {
    playerScore--;
    updateScore();
    return "You Lose! Rock beats Scissors";
  } else if (player.toUpperCase() == "SCISSORS" && computer == "Paper") {
    computerScore--;
    updateScore();
    return "You Win! Scissors beats Paper";
  }
}

function playRound(player, computer) {
  let playerSelection = player;
  let computerSelection = computerPlay();
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
    return `It's a Draw! You both chose ${computerSelection}`;
  } else if (playerSelection.toUpperCase() == "ROCK") {
    return rock(playerSelection, computerSelection);
  } else if (playerSelection.toUpperCase() == "PAPER") {
    return paper(playerSelection, computerSelection);
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    return scissors(playerSelection, computerSelection);
  }
}

function updateScore() {
  playerResult.textContent = `You: ${playerScore}`;
  computerResult.textContent = `Computer: ${computerScore}`;
  if (playerScore === 0) {
    div.classList.remove("hidden");
    buttons.forEach((button) => {
      button.classList.add("hidden");
    });
  } else if (computerScore === 0) {
    div.classList.remove("hidden");
    buttons.forEach((button) => {
      button.classList.add("hidden");
    });
  }
}

function reset() {
  playerScore = 5;
  computerScore = 5;
  updateScore();
}

resetButton.addEventListener("click", () => {
  reset();
  div.classList.add("hidden");
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
  results.textContent = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    results.textContent = playRound(e.target.id);
  });
});

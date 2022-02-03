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
    return "You Lose! Paper beats Rock";
  } else if (player.toUpperCase() == "ROCK" && computer == "Scissors") {
    return "You Win! Rock beats Scissors";
  }
}

function paper(player, computer) {
  if (player.toUpperCase() == "PAPER" && computer == "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (player.toUpperCase() == "PAPER" && computer == "Rock") {
    return "You Win! Paper beats Rock";
  }
}

function scissors(player, computer) {
  if (player.toUpperCase() == "SCISSORS" && computer == "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (player.toUpperCase() == "SCISSORS" && computer == "Paper") {
    return "You Win! Scissors beats Paper";
  }
}

function playRound(player, computer) {
  let playerSelection = prompt("Please choose Rock Paper or Scisscors: ");
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

function game() {
  for (let i = 0; i <= 4; i++) {
    console.log(playRound());
  }
}

game();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanInput = prompt("Quick, what's your choice!").toLowerCase();
  while (
    humanInput !== "rock" &&
    humanInput !== "paper" &&
    humanInput !== "scissors"
  ) {
    humanInput = prompt("Please select between rock, paper, or scissors!");
  }
  return humanInput;
}

function playRound(humanChoice, computerChoice) {
  console.log(
    `Your choice: ${humanChoice}\nComputer choice: ${computerChoice}`
  );
  if (humanChoice === computerChoice) {
    console.log("Round tied, no points given.");
    return;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer Wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  } else {
    if (computerChoice === "rock") {
      console.log("Computer Wins!");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  }
  console.log(`Current score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

function playGame() {
  while (humanScore + computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  const gameWin =
    humanScore > computerScore ? "You won the game!" : "You lost, gitgud.";
  console.log("Game ended. " + gameWin);
}

playGame();

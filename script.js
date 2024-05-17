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
    `Your choice: ${humanChoice}\nComputer Choice: ${computerChoice}`
  );
  if (humanChoice === computerChoice) {
    console.log("Round tied.");
    return;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer Wins!");
    } else {
      console.log("You win!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer Wins!");
    } else {
      console.log("You win!");
    }
  } else {
    if (computerChoice === "rock") {
      console.log("Computer Wins!");
    } else {
      console.log("You win!");
    }
  }
  console.log(`Current score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

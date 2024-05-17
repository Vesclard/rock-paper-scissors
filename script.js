let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  console.log(computerChoice);
}

function getHumanChoice() {
  let humanChoice = prompt("Quick, what's your choice!");
  console.log(humanChoice);
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("Please select between rock, paper, or scissors!");
  }
  console.log(humanChoice);
}

getComputerChoice();
getHumanChoice();

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
  switch (humanChoice) {
    case "rock":
      console.log("you chose " + humanChoice);
      break;
    case "paper":
      console.log("you chose " + humanChoice);
      break;
    case "scissors":
      console.log("you chose " + humanChoice);
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

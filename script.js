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
  const humanChoice = prompt("Quick, what's your choice!");
  console.log(humanChoice);
}

getComputerChoice();
getHumanChoice();

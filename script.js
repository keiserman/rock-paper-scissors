function getComputerChoice() {
    let num = Math.random();
    console.log (num);
    if (num <= 0.33) {
        return "rock";
    } else if (num > 0.33 && num <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    }

}

console.log(getComputerChoice());

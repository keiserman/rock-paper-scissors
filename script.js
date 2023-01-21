let playerScore = 0;
let computerScore = 0;
let playerSelection;
let roundCount = 10;

const message = document.getElementById("message");
const playerScoreContainer = document.getElementById("playerScore");
const computerScoreContainer = document.getElementById("computerScore");
const choices = document.querySelectorAll(".selection");

choices.forEach(choice => choice.addEventListener("click", () => {
    playerSelection = choice.id;
    playRound(playerSelection);
}));

function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) {
        return "rock";
    } else if (num > 0.33 && num <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    if (playerScore === roundCount || computerScore === roundCount) {
        return;
    }
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        message.textContent = "You tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        computerScoreContainer.textContent = computerScore;
        message.textContent = "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        playerScoreContainer.textContent = playerScore;
        message.textContent = "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        computerScoreContainer.textContent = computerScore;
        message.textContent = "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        playerScoreContainer.textContent = playerScore;
        message.textContent = "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        computerScoreContainer.textContent = computerScore;
        message.textContent = "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        playerScoreContainer.textContent = playerScore;
        message.textContent = "You win! Scissors beats Paper";
    }
}
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const message = document.getElementById("message");
const playerScoreContainer = document.getElementById("playerScore");
const computerScoreContainer = document.getElementById("computerScore");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => { playRound("rock") });
paper.addEventListener("click", () => { playRound("paper") });
scissors.addEventListener("click", () => { playRound("scissors") });

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
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        message.innerHTML = "You tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        computerScoreContainer.innerHTML = computerScore;
        message.innerHTML = "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        playerScoreContainer.innerHTML = playerScore;
        message.innerHTML = "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        computerScoreContainer.innerHTML = computerScore;
        message.innerHTML = "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        playerScoreContainer.innerHTML = playerScore;
        message.innerHTML = "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        computerScoreContainer.innerHTML = computerScore;
        message.innerHTML = "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        playerScoreContainer.innerHTML = playerScore;
        message.innerHTML = "You win! Scissors beats Paper";
    }
}
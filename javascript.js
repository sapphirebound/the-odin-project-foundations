// Initialise DOM constants for scripting
const menu = document.querySelector(".menu");
const scoreBoard = document.querySelector(".scoreboard");
const winner = document.querySelector("#winner");
const humanScoreCard = document.querySelector("#human-score");
const computerScoreCard = document.querySelector('#computer-score');

// Initialise variables to feed to below functions
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

// Play round function to get winner and track score
function playRound(humanChoice, computerChoice) {
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}`;
    let draw = "It's a draw";
    let result = ''; // This variable gets the string result
    if (humanChoice == computerChoice) {
        result = draw;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        result = humanWin;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        result = computerWin;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        result = computerWin;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        result = computerWin;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        result = computerWin;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        result = humanWin;
    }
    winner.textContent = result;
    humanScoreCard.textContent = `Human Score: ${humanScore}`;
    computerScoreCard.textContent = `Computer Score: ${computerScore}`;
}

// Randomised computer choice for the game
function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice <= 3) {
        return "rock";
    } else if (choice > 3 && choice < 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Event listener on menu
menu.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            console.log('rock');
            playRound('rock', getComputerChoice());
            break;
        case 'scissors':
            console.log('scissors');
            humanChoice = 'scissors';
            playRound('scissors', getComputerChoice());
            break;
        case 'paper':
            console.log('paper');
            humanChoice = 'paper';
            playRound('scissors', getComputerChoice());
            break;
    }

    // Winner announcement
    if (humanScore == 5) {
        alert("Human Wins!");
    } else if (computerScore == 5) {
        alert("Computer Wins!");
    }
});
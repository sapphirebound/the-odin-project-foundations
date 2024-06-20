let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?", "");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}`;
    if (humanChoice == computerChoice) {
        return "It's a draw";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return humanWin;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return computerWin;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore += 1;
        return computerWin;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore += 1;
        return humanWin;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore += 1;
        return computerWin;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return humanWin;
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
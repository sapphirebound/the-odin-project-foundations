const menu = document.querySelector(".menu");
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}`;
    if (humanChoice == computerChoice) {
        console.log("It's a draw");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        console.log(humanWin);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log(computerWin);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        console.log(computerWin);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log(humanWin);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log(computerWin);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        console.log(humanWin);
    }
}

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
});




menu.onclick;

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//    
//     while (humanScore < 5 || computerScore < 5) {
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`com: ${computerScore} hum: ${humanScore}`);
//     }
// }

// playGame();
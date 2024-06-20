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

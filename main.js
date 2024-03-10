playGame();

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    console.log("COMP CHOICE:" + compChoice);

    if (compChoice == 0) {
        return "ROCK"
    } else if (compChoice == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) {

    let gameOverMessage = "";
    console.log("PLAYER: " + playerSelection + " COMPUTER: " + computerSelection);

    if (playerSelection.toUpperCase() == computerSelection) {
        gameOverMessage = 0
    } else if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "PAPER") {
            gameOverMessage = 2
        } else {
            gameOverMessage = 1
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "SCISSORS") {
            gameOverMessage = 2
        } else {
            gameOverMessage = 1
        }
    } else {
        if (computerSelection == "ROCK") {
            gameOverMessage = 2
        } else {
            gameOverMessage = 1
        }
    }
    return gameOverMessage;

}

function playGame() {

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
        let computerSelection = getComputerChoice();
        let roundScore = playRound(playerSelection, computerSelection);
        if (roundScore == 1) {
            console.log("PLAYER WINS");
            playerWins++;
        } else if (roundScore == 2) {
            console.log("COMPUTER WINS");
            computerWins++;
        } else {
            console.log("TIE");
        }

    }

    if (playerWins > computerWins) {
        console.log(`PLAYER IS THE WINNER WITH ${playerWins} WINS`);
    } else if (computerWins > playerWins) {
        console.log(`COMPUTER IS THE WINNER WITH ${computerWins} WINS`);
    }


}


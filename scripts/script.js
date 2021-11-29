game()

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tiesCount = 0;
    let gamesToPlay = 5;

    for (let i = 1; i <= gamesToPlay; i++) {
        let playerSelection = prompt("What's your play? (Rock/Paper/Scissors)");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        let roundText = `Round ${i}: `
        if (result === 0) {
            tiesCount++;
            console.log(`${roundText}Tie. Both players played ${computerSelection}`);
        }
        else if (result === 1) {
            playerWinCount++;
            console.log(`${roundText}You won! ${playerSelection} beats ${computerSelection}`);

        }
        else if (result === -1) {
            computerWinCount++;
            console.log(`${roundText}You lost! ${computerSelection} beats ${playerSelection}`)
        }
    }

    console.log(`Results:\nYou: ${playerWinCount}\tComputer: ${computerWinCount}\tTies: ${tiesCount}`)
    if (playerWinCount > computerWinCount) {
        console.log("Winner: YOU! :)");
    }
    else if (playerWinCount < computerWinCount) {
        console.log("Winner: CPU :(");
    }
    else {
        console.log("Nobody!!! :/");
    }
}

function playRound(playerSelection, computerSelection) {

    /* 0 = tie, 1 = win, -1 = loss */
    let result;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 0;
    }
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
             (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ||
             (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {

        return 1;
    }
    else {
        return -1;
    }

}

function computerPlay() {
    /* Create random number 0 to 2 */
    let randomNum = Math.floor(Math.random() * 3);
    
    /* Convert number into result */
    if (randomNum === 0) {
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else if (randomNum === 2) {
        return "Scissors";
    }
}
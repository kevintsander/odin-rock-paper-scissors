let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let roundResult = getRoundResult(playerSelection, computerSelection)
    if (roundResult === 1) {
        playerScore++;
    }
    else if (roundResult === -1) {
        computerScore++;
    }
    
    displayResult(playerSelection, computerSelection, roundResult);
    //console.log(roundResult);
}

function getRoundResult(playerSelection, computerSelection) {
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

function capitalizeFirstLetterOnly(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getResultText(playerSelection, computerSelection, result) {
    if (result === 1) {
        return `${playerSelection} beats ${computerSelection}! You won the round! :)`
    }
    else if (result === -1) {
        return `${computerSelection} beats ${playerSelection}! You lost the round! :(`
    }
    else {
        return `Both played ${playerSelection}. This round is a tie. :/`
    }
}

function getWinnerText() {
    if (playerScore >= 5) {
        return 'Wow! You won the game!'
    }
    else if (computerScore >= 5) {
        return 'Ouch. You let the computer win!'
    }
    else {
        return;
    }
}

function displayResult(playerSelection, computerSelection, lastResult) {
    let pLastResult = document.querySelector("#last-result > p");
    let pScore = document.querySelector("#score > p");
    let pWinner = document.querySelector("#winner > p");

    playerSelection = capitalizeFirstLetterOnly(playerSelection);
    computerSelection = capitalizeFirstLetterOnly(computerSelection);

    pLastResult.textContent = getResultText(playerSelection, computerSelection, lastResult);
    pScore.textContent = playerScore + " - " + computerScore;
    pWinner.textContent = getWinnerText();
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

const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(playButton => playButton.addEventListener('click', e => {
    playRound(e.target.getAttribute('data-sel'));
}));

//game()
const rock = document.querySelector('#btnRock');
const scissors = document.querySelector('#btnScissors');
const paper = document.querySelector('#btnPaper');

const playerScoreElement = document.querySelector('#playerScore');
const computerScoreElement = document.querySelector('#computerScore');
const announcementElement = document.querySelector('#announcement');

let playerScore = 0;
let computerScore = 0;

let computerSelection;

rock.addEventListener('click', () => {
    computerSelection = computerPlay();
    playRound('rock', computerSelection);
    checkWinner(playerScore, computerScore);
});

scissors.addEventListener('click', () => {
    computerSelection = computerPlay();
    playRound('scissors', computerSelection);
    checkWinner(playerScore, computerScore);
});

paper.addEventListener('click', () => {
    computerSelection = computerPlay();
    playRound('paper', computerSelection);
    checkWinner(playerScore, computerScore);
});

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        announcementElement.textContent = "Human wins!";
        resetScores();
    }
    else if (computerScore == 5) {
        announcementElement.textContent = "Computer wins!";
        resetScores();
    }
}

function resetScores() {
    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    playerScore = 0;
    computerScore = 0;
}

// randomly generates one of Rock, Paper or Scissors
function computerPlay() {
    var selections = ["Rock", "Paper", "Scissors"];
    var randIndex = Math.floor(Math.random() * 3);
    return selections[randIndex];
}

// Returns 1 if player wins round, -1 if player loses round, 0 if it's a tie
function playRound(playerSelection, computerSelection) {
    // Winning condition
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == "Scissors"
        || playerSelection.toLowerCase() == 'paper' && computerSelection == "Rock"
        || playerSelection.toLowerCase() == 'scissors' && computerSelection == "Paper") {
            playerScore++;
            playerScoreElement.textContent = playerScore;
            return 1;
    }   
    // Losing condition
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "Paper"
        || playerSelection.toLowerCase() == 'paper' && computerSelection == "Scissors"
        || playerSelection.toLowerCase() == 'scissors' && computerSelection == "Rock") {
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return -1;
    }   
}

// helper function for neater result printing
function toTitleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
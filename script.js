/// Pseudo Code to be found in the Readme.md !!!
let userScore = 0;
let pcScore = 0;

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const currentRound = document.querySelector('#currentRound');
const winnerAnnounce = document.querySelector('#winnerAnnounce');

btnRock.addEventListener("click", () => {
        playGame("Rock");
})

btnPaper.addEventListener("click", () => {
        playGame("Paper");
})

btnScissors.addEventListener("click", () => {
        playGame("Scissors");
})

function generatePcChoice() {

    let numChoice = Math.floor(Math.random() * 3) + 1;

    switch(numChoice) {
        case 1: return strChoice = "Rock"
        break;
        case 2: return strChoice = "Paper";
        break;
        case 3: return strChoice = "Scissors";
    }

}

function playGame(userChoice) {
    const roundOutcome = document.createElement('p');
    const roundScore = document.createElement('p');
    const pcChoice = generatePcChoice();

    currentRound.innerHTML = "";

    if (userChoice === pcChoice) {
        roundOutcome.textContent = `It's a tie! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);
    } else if (
        (userChoice === "Rock" && pcChoice === "Scissors") ||
        (userChoice === "Paper" && pcChoice === "Rock") ||
        (userChoice === "Scissors" && pcChoice === "Paper")
    ) {
        roundOutcome.textContent = `You win! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);
        userScore++;
        if (userScore === 3) {
            announceWinner();
        }
    } else {
        roundOutcome.textContent = `Computer wins! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);
        pcScore++;
        if (pcScore === 3) {
            announceWinner();
        }
    }

    roundScore.textContent = `Your score: ${userScore} | Computer Score: ${pcScore}`;
    currentRound.appendChild(roundScore);
}

function announceWinner() {
    const winner = document.createElement('p');
    if (userScore === 3) {
        winner.textContent = "User Wins! You had a score of " + userScore + " and the Computer had a score of " + pcScore
        currentRound.innerHTML = "";
        winnerAnnounce.appendChild(winner);
    } else {
        winner.textContent = "Computer Wins! You had a score of " + userScore + " and the Computer had a score of " + pcScore
        currentRound.innerHTML = "";
        winnerAnnounce.appendChild(winner);
    }
    playAgain();
}

function playAgain() {

    let answer = prompt("Do you want to play again? [Y/N]");
    if (answer === "Y") {
        userScore = 0;
        pcScore = 0;
        winnerAnnounce.innerHTML = "";
    } else {
        return;
    }
}



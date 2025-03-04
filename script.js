/// Pseudo Code to be found in the Readme.md !!!
let userScore = 0;
let pcScore = 0;

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const currentRound = document.querySelector('#currentRound');
const winnerAnnounce = document.querySelector('#winnerAnnounce');
const buttons = document.querySelector('#buttons');

btnRock.addEventListener("click", () => {
    currentRound.innerHTML = "";
        playGame("Rock");
})

btnPaper.addEventListener("click", () => {
    currentRound.innerHTML = "";
        playGame("Paper");
})

btnScissors.addEventListener("click", () => {
    currentRound.innerHTML = "";
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



    if (userChoice === pcChoice) {
        roundOutcome.textContent = `It's a tie! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);

        roundScore.textContent = `Your score: ${userScore} | Computer Score: ${pcScore}`;
        currentRound.appendChild(roundScore);
    } else if (
        (userChoice === "Rock" && pcChoice === "Scissors") ||
        (userChoice === "Paper" && pcChoice === "Rock") ||
        (userChoice === "Scissors" && pcChoice === "Paper")
    ) {
        roundOutcome.textContent = `You win! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);
        userScore++;
        if (userScore === 3) {
            currentRound.innerHTML = "";
            announceWinner();
        } else {
            roundScore.textContent = `Your score: ${userScore} | Computer Score: ${pcScore}`;
            currentRound.appendChild(roundScore);
        }
    } else {
        roundOutcome.textContent = `Computer wins! | Computer chose: ${pcChoice} - You chose: ${userChoice}!`;
        currentRound.appendChild(roundOutcome);
        pcScore++;
        if (pcScore === 3) {
            currentRound.innerHTML = "";
            announceWinner();
        } else {
            roundScore.textContent = `Your score: ${userScore} | Computer Score: ${pcScore}`;
            currentRound.appendChild(roundScore);
        }
    }


}

function announceWinner() {
    const winner = document.createElement('p');
    if (userScore === 3) {
        winner.textContent = `Player Wins! > Player Score: ${userScore} | Computer Score: ${pcScore}`;
        currentRound.innerHTML = "";
        winnerAnnounce.appendChild(winner);
    } else {
        winner.textContent = `Computer Wins! > Computer Score: ${pcScore} | Player Score: ${userScore}`;
        currentRound.innerHTML = "";
        winnerAnnounce.appendChild(winner);
    }
    playAgain();
}

function playAgain() {

    buttons.style.display = "none";

    const playAgainBtn = document .createElement("button");
    playAgainBtn.textContent = "Play Again?";
    winnerAnnounce.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", () => {
        userScore = 0;
        pcScore = 0;
        winnerAnnounce.innerHTML = "";
        buttons.style.display = "block";
        playAgainBtn.remove();

    })

}



/// Pseudo Code to be found in the Readme.md !!!
let userScore = 0;
let pcScore = 0;


function generatePcChoice() {
    // Generates a Random number between 1 and 3.
    let numChoice = Math.floor(Math.random() * 3) + 1;

    switch(numChoice) {
        case 1: return strChoice = "Rock"
        break;
        case 2: return strChoice = "Paper";
        break;
        case 3: return strChoice = "Scissors";
    }

}

function getUserChoice() {
    let strChoice = prompt("Enter your choice [Rock/Paper/Scissors]");
    return strChoice;
}

function checkSpelling() {
    let strChoice = getUserChoice();
    if (strChoice != "Rock" || strChoice != "Paper" || strChoice != "Scissors") {
        strChoice.toLowerCase()
        const userChoice = strChoice.charAt(0).toUpperCase() + strChoice.slice(1);
        return userChoice;
    } else {
        return strChoice;

    }
}

function checkWinner() {
    const userChoice = checkSpelling();
    console.log("User: " + userChoice);
    const pcChoice = generatePcChoice();
    console.log("PC: " + pcChoice);

    if(userChoice === pcChoice){
        console.log("It's a tie!")
    } else if (
        (userChoice === "Rock" && pcChoice === "Scissors") ||
        (userChoice === "Paper" && pcChoice === "Rock") ||
        (userChoice === "Scissors" && pcChoice === "Paper")
    ) {
        console.log("You win!")
        userScore++;
    } else {
        console.log("Computer wins!")
        pcScore++;
    }
    return;
}

function announceWinner() {
    if (userScore === 3) {
        console.log("User Wins! You had a score of " + userScore + " and the PC had a score of " + pcScore);
    } else {
        console.log("You lost! You had a score of " + userScore + " and the PC had a score of " + pcScore);
    }
    playAgain();
}

function playAgain() {

    let answer = prompt("Do you want to play again? [Y/N]");
    if (answer === "Y") {
        userScore = 0;
        pcScore = 0;
        playGame();
    } else {
        return;
    }
}

function playGame() {
    while (userScore != 3 && pcScore != 3) {
        checkWinner();
        console.log("User Score: " + userScore + " Pc Score: " + pcScore);
    }
    announceWinner();
}

playGame();

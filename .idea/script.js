/// Pseudo Code to be found in the Readme.md !!!



function generateComputerChoice() {
    // Generates a Random number between 1 and 3.
    let numChoice = Math.floor(Math.random() * 3) + 1;

    switch(numChoice) {
        case 1: return strChoice = "Rock";
        break;
        case 2: return strChoice = "Paper";
        break;
        case 3: return strChoice = "Scissors";
    }
}
console.log(generateComputerChoice());

function getUserChoice() {
    let strChoice = prompt("Enter your choice [Rock/Paper/Scissors]");
    return strChoice;
}
console.log(getUserChoice());
/// Pseudo Code to be found in the Readme.md !!!



function generateComputerChoice() {
    // Generates a Random number between 0 and 3.
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
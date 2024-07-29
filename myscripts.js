let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.random();
    let scissorVal = "scissors";
    let rockVal = "rock";
    let paperVal = "paper";
    if (randNum < 0.33) {
        return scissorVal;
    }
    else if (randNum >= 0.33 && randNum < 0.66) {
        return rockVal;
    }
    else {
        return paperVal;
    }
}

function getHumanChoice() {
    let humanChoiceVal; 
    let choiceVal = ["rock", "paper", "scissors"];
    while (true) {
        humanChoiceVal = prompt("Enter rock, paper, or scissors");
        if (humanChoiceVal === null) {
            humanChoiceVal = prompt("Enter a correct value");
        } 
        humanChoiceVal = humanChoiceVal.toLowerCase();
        if (choiceVal.includes(humanChoiceVal)) {
            break;
        } else {
            humanChoiceVal = prompt("Enter a correct value");
        }
    }
    return humanChoiceVal;
}


function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    
        else {
            console.log("It was a tie");
        }
    }



    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("You tied!");
    }
}


playGame();





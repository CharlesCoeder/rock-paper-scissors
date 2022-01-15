function computerPlay(){
    let number = getRndInteger(0,2);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === computer) {
        return "Tie!";
    }

    else if (player === "rock"){
        if (computer == "paper"){
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }

    else if (player === "paper"){
        if (computer == "scissors"){
            return "You lose! Scissors beats paper!";
        }
        else {
            return "You win! Paper beats rock!";
        }
    }

    else if (player == "scissors"){
        if (computer == "rock"){
            return "You lose! Rock beats scissors!";
        }
        else {
            return "You win! Scissors beats paper!";
        }
    }
    else {
        return "Invalid input";
    }
}
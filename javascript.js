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

function game(rounds){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let finalscore;

    for (let i = 1; i < rounds + 1; i++){
        let result = playRound(prompt("Round " + i), computerPlay());
        console.log(result);
        if (result.includes("win")){
            wins += 1;
        }
        else if (result.includes("lose")){
            losses += 1;
        }
        else if (result.includes("Tie")){
            ties += 1;
        }
    }

    if (ties === 1){
        finalscore = wins + " to " + losses;
    }
    if (ties === 1){
        finalscore = wins + " to " + losses + " with 1 tie";
    }
    if (ties > 1){
        finalscore = wins + " to " + losses + " with " + ties + " ties";
    }


    if (wins > losses) {
        console.log("You win the series! Final score: "+finalscore);
    }
    else if (wins < losses) {
        console.log("You lose the series! Final score: "+finalscore);
    }
    else {
        console.log("You tied! Final score: " + finalscore);
    }
}

game(5);
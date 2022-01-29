function computerPlay(){
    let number = getRndInteger(0,2);
    if (number === 0) {
        return "Rock";
    }
    else if (number === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie!";
    }

    else if (playerSelection === "Rock"){
        if (computerSelection == "Paper"){
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }

    else if (playerSelection === "Paper"){
        if (computerSelection == "Scissors"){
            return "You lose! Scissors beats paper!";
        }
        else {
            return "You win! Paper beats rock!";
        }
    }

    else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
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
    let round = 0;
    let finalscore;
    let result;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            result = playRound(button.textContent,computerPlay());
            checkWin();
            updateText();
            round += 1;
            if (wins === rounds || losses === rounds){
                displayWinner();
            }
        });
    });

    function checkWin(){
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

    function updateText(){
        results.textContent = result;
        score.textContent = "Current score: " + wins + " to " + losses;
    }

    function getFinalScore(){
        if (ties === 0){
            return wins + " to " + losses;
        }
        if (ties === 1){
            return wins + " to " + losses + " with 1 tie";
        }
        if (ties > 1){
            return wins + " to " + losses + " with " + ties + " ties";
        }
    }

    function displayWinner(){
        finalscore = getFinalScore();
        if (wins === rounds) {
            score.textContent = "You win the series! Final score: "+finalscore;
        }
        else if (losses === rounds) {
            score.textContent = "You lose the series! Final score: "+finalscore;
        }
        container.appendChild(playAgain);
        buttons.forEach(button => {
            button.setAttribute('style', 'cursor: not-allowed;');
            button.disabled = true;
        });
    }

    playAgain.addEventListener('click', () => {
        wins = 0;
        losses = 0;
        score.textContent = "Current score: 0 to 0";
        results.textContent = "Choose!";
        buttons.forEach(button => {
            button.setAttribute('style', 'cursor: pointer;');
            button.disabled = false;
        });
        container.removeChild(playAgain);
    
    });

}

const container = document.querySelector('.container');
const playAgain = document.createElement('button');
playAgain.textContent = "Play Again";
playAgain.setAttribute('style', 'width: 300px; height: 150px; font-size: 50px;');

const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const site = document.querySelector('html');

site.addEventListener('load', game(5));
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

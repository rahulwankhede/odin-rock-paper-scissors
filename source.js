function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return randomNum === 0 ? 'Rock' : randomNum == 1 ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection){
    let myDict = {'Rock': 1, 'Paper': 2, 'Scissors': 3};

    let playerSelectionActual = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let winLoseDraw = (myDict[playerSelectionActual] - myDict[computerSelection] + 3) % 3;
    if (winLoseDraw == 0){
        return `It is a tie! You both selected ${computerSelection}`;
    }
    else if (winLoseDraw == 1){
        return `You win! ${playerSelectionActual} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelectionActual}`;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound("rock", getComputerChoice()));
    }
}

game();
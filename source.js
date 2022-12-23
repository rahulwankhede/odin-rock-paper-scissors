function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return randomNum === 0 ? 'Rock' : randomNum == 1 ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection){
    let myDict = {'Rock': 1, 'Paper': 2, 'Scissors': 3};
    let playerSelectionActual = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    return winLoseDraw = (myDict[playerSelectionActual] - myDict[computerSelection] + 3) % 3;
}

function game(){
    let winDict = {"player": 0, "computer": 0, "tie": 0};
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Make your choice. Type rock, paper, or scissors in this box");
        let computerSelection = getComputerChoice();
        let winLoseDraw = playRound(playerSelection, computerSelection);
        if (winLoseDraw == 0){
            console.log(`It is a tie! You both selected ${computerSelection}`);
            winDict["tie"] += 1;
        }
        else if (winLoseDraw == 1){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winDict["player"] += 1;
        }
        else{
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            winDict["computer"] += 1
        }
    }
    console.log(
    winDict["player"] > winDict["computer"] ? "You win!" :
    winDict["player"] < winDict["computer"] ? "You lose!" :
    "It's a tie!");
    console.log(`You: ${winDict["player"]}; Computer: ${winDict["computer"]}; Ties: ${winDict["tie"]}`);
}

const button = document.querySelector("#ready");

button.addEventListener('click', game);

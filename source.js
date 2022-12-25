function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return randomNum === 0 ? 'Rock' : randomNum == 1 ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection){
    let myDict = {'Rock': 1, 'Paper': 2, 'Scissors': 3};
    let playerSelectionActual = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    return drawWinLose = (myDict[playerSelectionActual] - myDict[computerSelection] + 3) % 3;
}

let winDict = {"player": 0, "computer": 0, "tie": 0};

const resultDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");
const finalDiv = document.querySelector(".final");

function playGame(e){
	const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();

	let drawWinLose = playRound(playerSelection, computerSelection);

    if (drawWinLose == 0){
        winDict["tie"] += 1;
        resultDiv.innerText =  `It is a tie! You both selected ${computerSelection}`;
	}
    else if (drawWinLose == 1){
		winDict["player"] += 1;
        resultDiv.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
	}
    else{
		winDict["computer"] += 1;
        resultDiv.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
	}
	scoreDiv.innerText = `You: ${winDict["player"]} Computer: ${winDict["computer"]}`

	if (winDict["player"] == 5 || winDict["computer"] == 5){
		finalDiv.innerText = `Game over. You ${winDict["player"] == 5 ? "win!" : "lose!"}\n Refresh page to play again`;
	}

}

const buttons = document.querySelectorAll(".choice");

for (button of buttons){
	button.addEventListener('click', playGame);
}

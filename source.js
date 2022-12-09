function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return randomNum === 0 ? 'Rock' : randomNum == 1 ? 'Paper' : 'Scissors';
}

console.log(getComputerChoice());
let playerWins = 0;
let computerWins = 0;

function computerPlay(){
    let move = (Math.floor(Math.random() * 3));
    if (move == 0){
        return 'ROCK';
    }
    else if (move == 1){
        return 'SCISSORS';
    }
    else if (move == 2){
        return 'PAPER';
    }
}
function playRound(computerSelection, playerSelection){
    if (playerSelection == computerSelection){
        return ('We tied.');
    }
    else if (computerSelection == 'ROCK'){
        if (playerSelection == 'SCISSORS'){
            computerWins++
            return ('I won, muhahaha!!');
        }
        else{
            playerWins++
            return ('You won this one.');
        }
    }
    else if (computerSelection == 'SCISSORS'){
        if (playerSelection == 'ROCK'){
            playerWins+=1
            return ('You won this one.');
        }
        else {
            computerWins+=1
            return ('I WON!!!');
        }
    }
    else {
        if (playerSelection == 'ROCK'){
            computerWins+=1
            return ('I WONNNNN');
        }
        else {
            playerWins+=1
            return ('I\'ll give you this one');
        }
    }
}

const buttons = document.querySelectorAll('button');
const results = document.createElement('div');
const selection = document.createElement('div');
const body = document.querySelector('body');
const winner = document.createElement('div');
body.appendChild(selection);
body.appendChild(results);
body.appendChild(winner);



buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        let playerSelection = e.target.id.toUpperCase();
        let computerSelection = computerPlay();
        selection.textContent = 'Computer Chose: ' + computerSelection;
        results.textContent = playRound(computerSelection, playerSelection);
        if (playerWins > 5){
            winner.textContent = 'Player has won 5.';
        }
    })
})




// function playGame(){
//     for (i=0;i<5; i++){
//         let computerSelection = computerPlay();
//         let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
//         console.log(playRound(computerSelection,playerSelection));
//         console.log(computerSelection);
//         console.log(playerSelection);
//     }
//     console.log("You won " + playerWins + " times.");
//     console.log ("I won " + computerWins + " times.");
//     if (playerWins > computerWins){
//         console.log('Player won more.');
//     }
//     if (computerWins > playerWins){
//         console.log('Computer won more.')
//     }
//     if (computerWins == playerWins){
//         console.log("We tied.");
//     }
// }

// playGame();


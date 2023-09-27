function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            return ["It's a tie! Rock cancels out Rock", 0];
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return ["You win! Rock crushes Scissors", 1];
        }
        else {
            return ["You lose! Paper covers Rock", 2];
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            return ["You lose! Rock crushes Scissors", 2];
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return ["It's a tie! Scissors cancels out Scissors", 0];
        }
        else {
            return ["You Win! Scissors cuts Paper", 1];
        }
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            return ["You win! Paper covers Rock", 1];
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            return ["You lose! Scissors cuts Paper", 2];
        }
        else{
            return ["It's a tie! Paper cancels out Paper", 0];
        }
    }
    else {
        return ["Invalid Option! Try Again!", -1];
    }
}

function ProcessRound(playerChoice) {
    const [msg, res] =  playRound(playerChoice, getComputerChoice());
    div.innerHTML = msg;

    if (res == 1){
        playerScore++;
    }

    if (res == 2){
        computerScore++;
    }

    div.innerHTML += `<br />Score: | Player - ${playerScore} | Computer - ${computerScore} |`

    if (playerScore == 5){
        div.innerHTML += `<br/>You win!! Congratulations`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        div.innerHTML += `<br/>You lose!! Better luck next time.`;
    }
    div.innerHTML


}

let playerScore = 0;
let computerScore = 0;
const div = document.createElement('div');

const btn1 = document.createElement('button');
btn1.textContent = 'Rock';
btn1.addEventListener('click', () => ProcessRound(btn1.textContent) );

const btn2 = document.createElement('button');
btn2.textContent = 'Paper';
btn2.addEventListener('click', () => ProcessRound(btn2.textContent));

const btn3 = document.createElement('button');
btn3.textContent = 'Scissors';-
btn3.addEventListener('click', () => ProcessRound(btn3.textContent));

const root = document.querySelector("body");
root.appendChild(btn1);
root.appendChild(btn2);
root.appendChild(btn3);
root.appendChild(div);

// function game() {

//     const numberOfGames = 5;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < numberOfGames; i++){
//         let result;
        
//         while(true){
//             result = playRound(prompt(), getComputerChoice());

//             if (result == 1){
//                 playerScore++;
//                 break;
//             }
//             else if (result == 2) {
//                 computerScore++;
//                 break;
//             } else if (result == 0) {
//                 break;
//             }

//         }

//         console.log(Math.max(playerScore, computerScore), Math.min(playerScore, computerScore), numberOfGames - i)
//         //check if losing player can win with remaining games. End early if not. 
//         if (Math.max(playerScore, computerScore) - Math.min(playerScore, computerScore) > numberOfGames - i)
//             break;
//     }

//     if (playerScore > computerScore)
//         alert(`Player wins! ${playerScore} to ${computerScore}`);
//     else 
//         alert(`Computer wins! ${computerScore} to ${playerScore}`);
// }


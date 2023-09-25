function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            alert("It's a tie! Rock cancels out Rock");
            return 0;
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            alert("You win! Rock crushes Scissors");
            return 1;
        }
        else {
            alert("You lose! Paper covers Rock");
            return 2;
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            alert("You lose! Rock crushes Scissors");
            return 2;
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            alert("It's a tie! Scissors cancels out Scissors");
            return 0;
        }
        else {
            alert("You Win! Scissors cuts Paper");
            return 1;
        }
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            alert("You win! Paper covers Rock");
            return 1;
        }
        else if (computerSelection.toLowerCase() == 'scissors') {
            alert("You lose! Scissors cuts Paper");
            return 2;
        }
        else{
            alert("It's a tie! Paper cancels out Paper");
            return 0;
        }
    }
    else {
        alert("Invalid Option! Try Again!");
        return -1;
    }
}

function game() {

    const numberOfGames = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numberOfGames; i++){
        let result;
        
        while(true){
            result = playRound(prompt(), getComputerChoice());

            if (result == 1){
                playerScore++;
                break;
            }
            else if (result == 2) {
                computerScore++;
                break;
            } else if (result == 0) {
                break;
            }

        }

        console.log(Math.max(playerScore, computerScore), Math.min(playerScore, computerScore), numberOfGames - i)
        //check if losing player can win with remaining games. End early if not. 
        if (Math.max(playerScore, computerScore) - Math.min(playerScore, computerScore) > numberOfGames - i)
            break;
    }

    if (playerScore > computerScore)
        alert(`Player wins! ${playerScore} to ${computerScore}`);
    else 
        alert(`Computer wins! ${computerScore} to ${playerScore}`);
}


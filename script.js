function getPlayersChoice() {
    let choice = prompt("Choose rock, paper or Scissors")
    return choice.toLowerCase()
}

function getComputersChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
        case 1:
            return "rock"
        
        case 2:
            return "paper"

        case 3:
            return "scissors"
    }
    
}

function playOneRound(playersChoice, computersChoice) {
    if (playersChoice == "rock") {
        if (computersChoice == "rock") {
            console.log("It's a tie!")

        } else if (computersChoice == "paper") {
            console.log("You lose! Paper beats rock!")
            return "lose"

        } else if (computersChoice == "scissors") {
            console.log("You Win! Rock beats scissors!")
            return "win"
        }
    }  else if (playersChoice == "paper") {
        if (computersChoice == "paper") {
            console.log("It's a tie!")

        } else if (computersChoice == "rock") {
            console.log("You Win! Paper beats rock!")
            return "win"

        } else if (computersChoice == "scissors") {
            console.log("You Lose! Scissors beats paper!")
            return "lose"

        }
    }  else if (playersChoice == "scissors") {
        if (computersChoice == "scissors") {
            console.log("It's a tie!")

        } else if (computersChoice == "rock") {
            console.log("You Lose! Rock beats scissors!")
            return "lose"

        } else if (computersChoice == "paper") {
            console.log("You Win! Scissors beats paper!")
            return "win"

        }
    } 
}

function game() {
    let playerPoints = 0
    let computerPoints = 0
    for (let i = 0; i < 5; i++) {
        let result = playOneRound(getPlayersChoice(), getComputersChoice())
        if (result == "win") {
            playerPoints ++
            

        } else if (result == "lose") {
            computerPoints ++
            
        }
        
    }
    console.log(`Final Scoreboard: ${playerPoints} - ${computerPoints}`)
    if (playerPoints > computerPoints) {
        console.log("You Won!")
    } else if (playerPoints < computerPoints) {
        console.log("You Lost!")
    } else if  (playerPoints == computerPoints) {
        console.log("You tied with the computer!")
    }
    
}

game()
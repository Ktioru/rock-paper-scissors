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

        } else if (computersChoice == "scissors") {
            console.log("You Win! Rock beats scissors!")

        }
    }  else if (playersChoice == "paper") {
        if (computersChoice == "paper") {
            console.log("It's a tie!")

        } else if (computersChoice == "rock") {
            console.log("You Win! Paper beats rock!")

        } else if (computersChoice == "scissors") {
            console.log("You Lose! Scissors beats paper!")

        }
    }  else if (playersChoice == "scissors") {
        if (computersChoice == "scissors") {
            console.log("It's a tie!")

        } else if (computersChoice == "rock") {
            console.log("You Lose! Rock beats scissors!")

        } else if (computersChoice == "paper") {
            console.log("You Win! Scissors beats paper!")

        }
    } 
}




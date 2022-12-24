const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const scoreboard = document.querySelector(".scoreboard")
const result = document.querySelector(".result")
let win = 0
let lose = 0

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

function playOneRound(playersChoice) {
    let computersChoice = getComputersChoice()
    if (playersChoice == "rock") {
        if (computersChoice == "rock") {
            result.textContent = "It's a tie!"
            scoreboard.textContent = `${win} - ${lose}`

        } else if (computersChoice == "paper") {
            result.textContent = `You lose! Paper beats rock!`
            lose += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "lose"

        } else if (computersChoice == "scissors") {
            result.textContent = "You Win! Rock beats scissors!"
            win += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "win"
        }
    }  else if (playersChoice == "paper") {
        if (computersChoice == "paper") {
            result.textContent = "It's a tie!"
            scoreboard.textContent = `${win} - ${lose}`

        } else if (computersChoice == "rock") {
            result.textContent = "You Win! Paper beats rock!"
            win += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "win"

        } else if (computersChoice == "scissors") {
            result.textContent = "You Lose! Scissors beats paper!"
            lose += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "lose"

        }
    }  else if (playersChoice == "scissors") {
        if (computersChoice == "scissors") {
            result.textContent = "It's a tie!"
            scoreboard.textContent = `${win} - ${lose}`

        } else if (computersChoice == "rock") {
            result.textContent = "You Lose! Rock beats scissors!"
            lose += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "lose"

        } else if (computersChoice == "paper") {
            result.textContent = "You Win! Scissors beats paper!"
            win += 1
            scoreboard.textContent = `${win} - ${lose}`
            return "win"

        }
    }
     
}


rock.addEventListener("click", () => playOneRound("rock"))
paper.addEventListener("click", () => playOneRound("paper"))
scissors.addEventListener("click", () => playOneRound("scissors"))
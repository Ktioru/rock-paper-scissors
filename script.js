const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const scoreboard = document.querySelector(".scoreboard")
const result = document.querySelector(".result")
const title = document.querySelector("h2")
const hidden_button = document.createElement("button")
const main = document.querySelector("main")
hidden_button.textContent = "Play Again"
hidden_button.className = "hidden-button"
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

function disableButtons() {

    if (win == 5 || lose == 5) {
        title.textContent = "Game finished!"
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        main.appendChild(hidden_button)
    }
    
    if (win == 5) {
        result.textContent = "You Win!"
        

    } else if (lose == 5) {
        result.textContent = "You Lose!"
        
    }
}

function enableButtons() {
    title.textContent = "Choose your weapon!"
    result.textContent = ""
    scoreboard.textContent = ""
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    main.removeChild(hidden_button)
    win = lose = 0
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

function game(playersChoice) {
    playOneRound(playersChoice)
    disableButtons()
}
rock.addEventListener("click", () => game("rock"))
paper.addEventListener("click", () => game("paper"))
scissors.addEventListener("click", () => game("scissors"))
hidden_button.addEventListener("click", () => enableButtons())
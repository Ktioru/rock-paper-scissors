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






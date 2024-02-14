
function getComputerChoice () {
    let number=Math.round(Math.random()*8);
    if (number < 3){return "rock"}
    else if (number < 6) {return "paper"}
    else return "scissors"

}

function playRound(player, computer) {
    player=player.toLowerCase()

    if (player != "rock" && player !="paper" && player !="scissors") {
        return "INVALID INPUT"
    }
    let result= `Player-${player} ; Computer-${computer}`
    
    if (player == "rock") {
        switch (computer) {
            case "rock":
                return ["TIE" , result]
            case "paper":
                return ["YOU LOSE" , result]
            case "scissors":
                return ["YOU WIN" , result]
        }
    }
    else if (player == "paper") {
        switch (computer) {
            case "paper":
                return ["TIE" , result]
            case "scissors":
                return ["YOU LOSE" , result]
            case "rock":
                return ["YOU WIN" , result]
        }
    }
    else     if (player == "scissors") {
        switch (computer) {
            case "scissors":
                return ["TIE" , result]
            case "rock":
                return ["YOU LOSE" , result]
            case "paper":
                return ["YOU WIN" , result]
        }
    }
}


function playGame() {
    let playerScore=0;
    let computerScore=0;

    while (playerScore < 3 && computerScore < 3){
        function currentScore(){return ` | You: ${playerScore} || CPU: ${computerScore} |`}

        let playerSelection= prompt(`Rock, Paper, Scissors!` + currentScore());
        
        if (playerSelection === null) {return}

        let computerSelection=getComputerChoice()

        let result=playRound(playerSelection,computerSelection)

        switch (result[0]) {
            case "YOU LOSE":
                computerScore++;
                alert(`${computerSelection} beats your ${playerSelection} :( ${currentScore()}`)
                break;
            case "YOU WIN":
                playerScore++;
                alert(` Your ${playerSelection} beats ${computerSelection}! ${currentScore()}`)
                break;
            case "TIE": 
                alert(`TIE! ${currentScore()}`)
                continue
            default: alert("INVALID INPUT")

        }

        if (playerScore > 2) {alert(`YOU WIN! Final Score:` + currentScore())}
        else if (computerScore >2) {alert(`YOU LOSE! Final Score:` + currentScore())}
    }
}
playGame();
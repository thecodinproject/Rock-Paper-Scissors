
function GetComputerChoice () {
    let number=Math.round(Math.random()*8);
    if (number < 3){return "rock"}
    else if (number < 6) {return "paper"}
    else return "scissors"

}

function playRound(player, computer) {
    if (player != "rock" && player !="paper" && player !="scissors") {
        return "INVALID INPUT"
    }
    let result= `: Player-${player} ; Computer-${computer}`
    if (player == "rock") {
        switch (computer) {
            case "rock":
                return "TIE" + result
            case "paper":
                return "YOU LOSE" + result
            case "scissors":
                return "YOU WIN" + result
        }
    }
    else if (player == "paper") {
        switch (computer) {
            case "paper":
                return "TIE" + result
            case "scissors":
                return "YOU LOSE" + result
            case "rock":
                return "YOU WIN" + result
        }
    }
    else     if (player == "scissors") {
        switch (computer) {
            case "scissors":
                return "TIE" + result
            case "rock":
                return "YOU LOSE" + result
            case "paper":
                return "YOU WIN" + result
        }
    }
}

const playerSelection ="rock"
const computerSelection=GetComputerChoice();
console.log(playRound(playerSelection,computerSelection))
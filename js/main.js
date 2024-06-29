function rockPaperScissors() {
    let randomValue = Math.random();
    if (randomValue < .33) {
        return "Scissors";
    }
    else if (randomValue < .66) {
        return "Rock";
    }
    else {
        return "paper";
    }
}
console.log(rockPaperScissors());

function checkWin(playerChoice) {
    let machineChoice = rockPaperScissors();

    if ((playerChoice === "Rock" && machineChoice === "Scissors") || (playerChoice === "Paper" || machineChoice === "Rock") || (playerChoice === "Scissors" || machineChoice === "Paper")) {
        console.log("You win!!!");
    }
    else if (playerChoice === machineChoice) {
        console.log("You are tied!!!");
    }
    else {
        console.log("You lose");
    }
}
//checkWin("Paper");

function playGamesXTimes(arr) {
    arr.forEach(choice => checkWin(choice))

}
playGamesXTimes(["Rock", "Paper", "Scissors"]);
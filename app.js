const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#p1Button");
const playerTwoButton = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const gameLength = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let gameLimit = 0;
let isGameOver = false;

playerOneButton.addEventListener("click", function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === gameLimit) {
            isGameOver = true;
            playerOneScore.classList.add('has-text-success');
            playerTwoScore.classList.add('has-text-danger');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        playerOneScore.innerText = p1Score;
    }
})

playerTwoButton.addEventListener("click", function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === gameLimit) {
            isGameOver = true;
            playerTwoScore.classList.add('has-text-success');
            playerOneScore.classList.add('has-text-danger');
            playerTwoButton.disabled = true;
            playerOneButton.disabled = true;
        }
        playerTwoScore.innerText = p2Score;
    }
})

resetButton.addEventListener("click", reset)

gameLength.addEventListener("change", function (e) {
    gameLimit = parseInt(this.value);
    reset();

})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playerOneScore.classList.remove('has-text-success', 'has-text-danger');
    playerTwoScore.classList.remove('has-text-success', 'has-text-danger');
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;

}



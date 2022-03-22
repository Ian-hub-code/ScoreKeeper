const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#playerOneScore")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#playerTwoScore")
}

const resetButton = document.querySelector("#reset");
const gameLength = document.querySelector("#playTo");

let gameLimit = 0;
let isGameOver = false;

/* refactored function that is generic */
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === gameLimit) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener("click", function (e) {
    updateScore(p1, p2)
})

p2.button.addEventListener("click", function (e) {
    updateScore(p2, p1)
})

resetButton.addEventListener("click", reset)

gameLength.addEventListener("change", function (e) {
    gameLimit = parseInt(this.value);
    reset();
})

/* reset function refactored for multiple players */
function reset() {
    isGameOver = false;
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}



var i=2;

resetGame();

function resetGame() {
    // Reset game variables

}

// Reset game on click of New Game
document.querySelector('.newGame-box').addEventListener('click', resetGame);

// Commence game when die is rolled
document.querySelector('.rollDice-box').addEventListener('click', rollDice);

function rollDice() {
    let dice = Math.ceil(Math.random() * 6);
    document.querySelector('.diceImage').src = './media/dice-' + dice + '.png';
};
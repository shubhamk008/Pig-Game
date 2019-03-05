var activePlayer, playerCurrent, playerMaster;

function resetGame() {
    // First player active by default
    activePlayer = 1;
    
    // Reset player current scores
    playerCurrent = [0, 0];
    document.querySelector('.player-1-currentScore').innerHTML = 0;
    document.querySelector('.player-2-currentScore').innerHTML = 0;
    
    // Reset player master scores
    playerMaster = [0, 0];
    document.querySelector('.player-1-masterScore').innerHTML = 0;
    document.querySelector('.player-2-masterScore').innerHTML = 0;

    // Remove Winner! tag from the last game winner
    document.querySelector('.player-1-title').innerHTML = 'Player 1';
    document.querySelector('.player-2-title').innerHTML = 'Player 2';

    // Unhide Roll Dice and Hold buttons
    document.querySelector('.rollDice-box').classList.remove('hideMe');
    document.querySelector('.hold-box').classList.remove('hideMe');
};

resetGame();

// Reset game on click of New Game
document.querySelector('.newGame-box').addEventListener('click', resetGame);

// Commence game when die is rolled
document.querySelector('.rollDice-box').addEventListener('click', rollDice);

// Hold cuurent sround score
document.querySelector('.hold-box').addEventListener('click', hold);

function rollDice() {

    let dice = Math.ceil(Math.random() * 6);
    document.querySelector('.diceImage').src = './media/dice-' + dice + '.png';

    if (dice != 1) {
        playerCurrent[activePlayer - 1] += dice;
        document.querySelector('.player-' + activePlayer + '-currentScore').innerHTML = playerCurrent[activePlayer - 1];
    }
    else {
        playerSwitch();
    }
};

function hold() {
    playerMaster[activePlayer - 1] += playerCurrent[activePlayer - 1];
    document.querySelector('.player-' + activePlayer + '-masterScore').innerHTML = playerMaster[activePlayer - 1];

    if (playerMaster[activePlayer - 1] >= 100) {
        document.querySelector('.player-' + activePlayer + '-title').innerHTML = 'Winner!';
        document.querySelector('.rollDice-box').classList.add('hideMe');
        document.querySelector('.hold-box').classList.add('hideMe');
    }
    else {
        playerSwitch();
    }
};

function playerSwitch() {
    playerCurrent[activePlayer - 1] = 0;
    document.querySelector('.player-' + activePlayer + '-currentScore').innerHTML = 0;
    activePlayer == 1 ? activePlayer = 2 : activePlayer = 1;
    document.querySelector('.player-leftBox').classList.toggle('active-player');
    document.querySelector('.player-rightBox').classList.toggle('active-player');
    document.querySelector('.playerOneDot').classList.toggle('activePlayer-dot');
    document.querySelector('.playerTwoDot').classList.toggle('activePlayer-dot');
};

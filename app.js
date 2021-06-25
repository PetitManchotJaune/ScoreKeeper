const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

// (Arrow function don't bind to 'this' keyword)
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}
const p1Btn = document.querySelector('#p1Btn');
const p1Display = document.querySelector('#p1Display');

let p1Score = 0;
let winningScore = 5;

p1Btn.addEventListener('click', () => {
    if (p1Score !== winningScore) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
})

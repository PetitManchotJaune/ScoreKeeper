const p1Btn = document.querySelector('#p1Btn');
const p1Display = document.querySelector('#p1Display');

let p1Score = 0;

p1Btn.addEventListener('click', () => {
    p1Score += 1;
    p1Display.textContent = p1Score;
})

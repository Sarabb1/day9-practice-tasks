const inputTimer = document.getElementById('time');
const setButton = document.getElementById('btn1');
const resetButton = document.getElementById('btn2');
const timerDisplay = document.getElementById('timer-display');

let countdownInterval;
let remainingTime = 0;

function startTimer(seconds) {
    clearInterval(countdownInterval);
    remainingTime = seconds;
    updateDisplay();

    countdownInterval = setInterval(() => {
        remainingTime--;
        if (remainingTime < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Time's up!";
        } else {
            updateDisplay();
        }
    }, 1000);
}

function updateDisplay() {
    timerDisplay.textContent = `${remainingTime} seconds`;
}

setButton.addEventListener('click', () => {
    const timeValue = parseInt(inputTimer.value, 10);
    console.log('Set button clicked, time value:', timeValue);
    if (isNaN(timeValue) || timeValue <= 0) {
        timerDisplay.textContent = "Please enter a valid number";
    } else {
        startTimer(timeValue);
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    timerDisplay.textContent = '';
    inputTimer.value = '';
    console.log('Reset button clicked');
});

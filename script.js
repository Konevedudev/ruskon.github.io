const secretNumber = Math.floor(Math.random() * 100) + 1; // случайное число от 1 до 100

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');

    if (guess < secretNumber) {
        feedback.textContent = "Число больше, попробуйте снова.";
    } else if (guess > secretNumber) {
        feedback.textContent = "Число меньше, попробуйте снова.";
    } else {
        feedback.textContent = "Поздравляем! Вы угадали число!";
    }
}

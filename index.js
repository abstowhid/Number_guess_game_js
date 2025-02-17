let randomNum;
let attempts = 0;
let maxAttempts;
let difficulty;

function startGame() {
    // Get selected difficulty
    difficulty = document.getElementById('difficulty').value;

    // Set maxAttempts based on difficulty
    if (difficulty === 'easy') {
        maxAttempts = 15;
    } else if (difficulty === 'medium') {
        maxAttempts = 2;
    } else {
        maxAttempts = 1;
    }

    // Generate random number between 1 and 100
    randomNum = Math.ceil(Math.random() * 100);
    attempts = 0;

    // Hide difficulty and start button, show game area
    document.getElementById('difficulty').disabled = true;
    document.getElementById('startGameBtn').disabled = true;
    document.getElementById('gameArea').style.display = 'block';

    // Enable the guess input and button
    document.getElementById('submitGuessBtn').disabled = false;
}

function makeGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('feedback').textContent =
            'Please enter a valid number between 1 and 100!';
        return;
    }

    attempts++;
    guessInput.value = '';
    if (guess === randomNum) {
        document.getElementById(
            'feedback'
        ).textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('submitGuessBtn').disabled = true; // Disable submit guess button
        document.getElementById('restartBtn').style.display = 'block'; // Show restart button
    } else if (guess > randomNum) {
        document.getElementById('feedback').textContent =
            'Your guess is too high!';
    } else {
        document.getElementById('feedback').textContent =
            'Your guess is too low!';
    }

    document.getElementById(
        'attempts'
    ).textContent = `Attempts: ${attempts}/${maxAttempts}`;

    if (attempts >= maxAttempts) {
        document.getElementById(
            'feedback'
        ).textContent = `Game Over! The correct number was ${randomNum}.`;
        document.getElementById('submitGuessBtn').disabled = true; // Disable submit guess button
        document.getElementById('restartBtn').style.display = 'block'; // Show restart button
    }
}

function restartGame() {
    // Reset the game and show initial state
    document.getElementById('difficulty').disabled = false;
    document.getElementById('startGameBtn').disabled = false;
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('submitGuessBtn').disabled = true; // Disable submit guess button
    document.getElementById('restartBtn').style.display = 'none'; // Hide restart button
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
}

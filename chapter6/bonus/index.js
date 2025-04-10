// Game variables
let correctColor = '';
let score = 0;
let lives = 3;

// Start or reset the game
function startGame() {
    score = 0;
    lives = 3;
    document.getElementById("score").innerText = score;
    document.getElementById("lives").innerText = lives;
    document.getElementById("message").innerText = '';
    document.getElementById("replayBtn").style.display = "none";
    generateColors();
}

// Generate random colors and set one as the correct answer
function generateColors() {
    const options = document.getElementById("options");
    options.innerHTML = '';

    // Create 3 random colors
    const colors = [];
    for (let i = 0; i < 3; i++) {
        const color = randomRGB();
        colors.push(color);
    }

    // Choose a correct one
    const correctIndex = Math.floor(Math.random() * 3);
    correctColor = colors[correctIndex];

    // Display RGB to guess
    document.getElementById("rgbValue").innerText = correctColor;

    // Render the color boxes
    colors.forEach(color => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        box.onclick = () => checkAnswer(color);
        options.appendChild(box);
    });
}

// Check if user guessed correctly
function checkAnswer(selectedColor) {
    if (selectedColor === correctColor) {
        score++;
        document.getElementById("message").innerText = "Correct!";
    } else {
        lives--;
        document.getElementById("message").innerText = "Wrong!";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("lives").innerText = lives;

    if (lives <= 0) {
        endGame();
    } else {
        setTimeout(generateColors, 1000);
    }
}

// When game is over
function endGame() {
    document.getElementById("message").innerText = `Game Over! Your final score was ${score}.`;
    document.getElementById("replayBtn").style.display = "inline-block";
}

// Create a random RGB string
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Initialize game on load
window.onload = startGame;

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let snake = [];
let food = {};
let direction = 'right';
let score = 0;
let highScore = 0;
let gameLoop;
let gameStarted = false;

// settings
canvas.width = 400;
canvas.height = 400;
const gridSize = 20;
const speed = 100;

function initSnake() {
    snake = [
        {x: 200, y: 200},
        {x: 180, y: 200},
        {x: 160, y: 200}
    ];
}

function createFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    };
}

function drawSnake() {
    ctx.fillStyle = '#4CAF50';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, gridSize - 2, gridSize - 2);
    });
}

function drawFood() {
    ctx.fillStyle = '#FF5722';
    ctx.fillRect(food.x, food.y, gridSize - 2, gridSize - 2);
}

function moveSnake() {
    const head = {x: snake[0].x, y: snake[0].y};

    switch(direction) {
        case 'right': head.x += gridSize; break;
        case 'left': head.x -= gridSize; break;
        case 'up': head.y -= gridSize; break;
        case 'down': head.y += gridSize; break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('score').textContent = score;
        if (score > highScore) {
            highScore = score;
            document.getElementById('highScore').textContent = highScore;
        }
        createFood();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];

    // wall
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    // itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

function update() {
    moveSnake();
    if (checkCollision()) {
        gameOver();
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        initSnake();
        createFood();
        gameLoop = setInterval(update, speed);
        document.getElementById('startBtn').disabled = true;
    }
}

function resetGame() {
    clearInterval(gameLoop);
    gameStarted = false;
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('startBtn').disabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameOver() {
    clearInterval(gameLoop);
    gameStarted = false;
    alert('Oyun Bitti! Puanın: ' + score);
    document.getElementById('startBtn').disabled = false;
}

document.addEventListener('keydown', (e) => {
    if (!gameStarted) return;
    
    switch(e.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('resetBtn').addEventListener('click', resetGame); 

---
layout: page
title: Snake Game
permalink: /snake-game/
---

<div class="game-container">
    <!-- puan göstergesi -->
    <div class="score-board">
        <span>Puan: <span id="score">0</span></span>
        <span>En Yüksek Puan: <span id="highScore">0</span></span>
    </div>

    <!-- game space -->
    <div id="game">
        <canvas id="gameCanvas"></canvas>
    </div>

    <!-- buttons -->
    <div class="controls">
        <button id="startBtn">Oyunu Başlat</button>
        <button id="resetBtn">Yeniden Başlat</button>
    </div>

    <!-- nasıl oynanır -->
    <div class="instructions">
        tipik nokia yılan oyunu
    </div>
</div>

<style>
.game-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

.score-board {
    margin-bottom: 20px;
    font-size: 1.2em;
    font-weight: bold;
}

.score-board span {
    margin: 0 15px;
}

#game {
    width: 100%;
    height: 400px;
    border: 2px solid #333;
    position: relative;
    background: #f0f0f0;
    overflow: hidden;
}

#gameCanvas {
    background: #000;
    display: block;
    margin: 0 auto;
}

.controls {
    margin-top: 20px;
}

.instructions {
    margin-top: 10px;
    color: #666;
    font-style: italic;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1.1em;
    cursor: pointer;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background: #1976D2;
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
}
</style>

<script src="/assets/js/snake.js"></script> 

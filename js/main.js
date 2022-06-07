import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');



let lastTime = null;
function update(time){
    if(time != null){
        const delta = time - lastTime;
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);
    }

    if(isLose()) handleLose();


    lastTime = time;
    window.requestAnimationFrame(update);
}


document.addEventListener('mousemove', e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})

function isLose(){
    const rect  = ball.rect();
    return rect.left <= 0 || rect.right >= window.innerWidth;
}

function handleLose(){
    const rect = ball.rect();
    if(rect.right >= window.innerWidth){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }else{
        computerScore.textContent = parseInt(computerScore.textContent) + 1
    }

    ball.reset();
    computerPaddle.reset();
}

window.requestAnimationFrame(update);

const gameContainer = document.getElementById("gameContainer");
const scoreContainer = document.getElementById("scoreContainer");
const onScreenController = document.getElementById("onScreenController");
const pointEarned = document.getElementById("pointEarned");
const leftButton = document.getElementById("leftButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const rightButton = document.getElementById("rightButton");


const gamePixal = 40;
const squareOfGamePixal = Math.pow(gamePixal, 2);

let changeTheDirOnce = false;
let totalFoodAte = 0;
let totalDistanceTravelled = 0;


// GAME BOARD
const createGameBoardPixels = () => {
    let a = "";
    for (let i = 1; i <= squareOfGamePixal; i++) {
        a += `<div class="gameBoardPixal" id="pixel${i}"></div>`;
    }

    gameContainer.innerHTML = a;
};

const gameBoardPixal = document.getElementsByClassName("gameBoardPixal");

// FOOD
let currentFoddPosition = 0;
const createFood = () => {
    gameBoardPixal[currentFoddPosition].classList.remove("food");
    currentFoddPosition = Math.random();
    currentFoddPosition = Math.floor(currentFoddPosition + squareOfGamePixal);

    gameBoardPixal[currentFoddPosition].classList.add("food");
}


// SNAKE

const leftDir = 37;
const upDir = 38;
const rightDir = 39;
const downDir = 40;

let positionArray = [];

let snakeCurrentDirection = rightDir;

const changeDirection = (newDirectionCode) => {
    if (newDirectionCode == snakeCurrentDirection || changeTheDirOnce) return;

    if (newDirectionCode == leftDir && snakeCurrentDirection != rightDir) {
        snakeCurrentDirection = newDirectionCode;
    }
    else if (newDirectionCode == upDir && snakeCurrentDirection != downDir) {
        snakeCurrentDirection = newDirectionCode;
    }
    else if (newDirectionCode == rightDir && snakeCurrentDirection != leftDir) {
        snakeCurrentDirection = newDirectionCode;
    }
    else if (newDirectionCode == downDir && snakeCurrentDirection != upDir) {
        snakeCurrentDirection = newDirectionCode;
    }
    changeTheDirOnce = true;
};


// SNAKE HEAD
const currentSnakeHeadPosition = squareOfGamePixal / 2 - 1;

let snakeLength = 100;

const moveSnake = () => {
    switch (snakeCurrentDirection) {
        case leftDir:
            --currentSnakeHeadPosition;
            const isSnakeAtLastPixelLeft = currentSnakeHeadPosition % gamePixal == gamePixal - 1 || currentSnakeHeadPosition < 0;
            if (isSnakeAtLastPixelLeft) {
                currentSnakeHeadPosition = currentSnakeHeadPosition + gamePixal;
            }
            break;

        case upDir:
            currentSnakeHeadPosition = currentSnakeHeadPosition - gamePixal;
            const isSnakeAtLastPixelUp = currentSnakeHeadPosition < 0;
            if (isSnakeAtLastPixelUp) {
                currentSnakeHeadPosition = currentSnakeHeadPosition + squareOfGamePixal;
            }
            break;

        case rightDir:
            ++currentSnakeHeadPosition;
            const isSnakeAtLastPixelRight = currentSnakeHeadPosition % gamePixal == 0;
            if (isSnakeAtLastPixelRight) {
                currentSnakeHeadPosition = currentSnakeHeadPosition - gamePixal;
            }
            break;

        case downDir:
            currentSnakeHeadPosition = currentSnakeHeadPosition + gamePixal;
            const isSnakeAtLastPixelDown = currentSnakeHeadPosition > squareOfGamePixal - 1;
            if (isSnakeAtLastPixelDown) {
                currentSnakeHeadPosition = currentSnakeHeadPosition - squareOfGamePixal;
            }
            break;

        default:
            break;

    }


    // KILL SNAKE IF IT BITE ITSELF

    let nextSnakeHeadPixel = gameBoardPixal[currentSnakeHeadPosition];

    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
        clearInterval(moveSnakeInterval);
        if (!alert(`Your Score is ${totalFoodAte}`)) {
            window.location.reload();
        }
    }

    nextSnakeHeadPixel.classList.add("snakeBodyPixel");

    if (positionArray.length > totalFoodAte) {
        let removeMe = positionArray[0];
        positionArray.shift(1);
        removeMe.classList.remove("snakeBodyPixel");
    }

    positionArray.push(nextSnakeHeadPixel);

    changeTheDirOnce = false;
    if (currentSnakeHeadPosition == currentFoddPosition) {
        totalFoodAte++;
        document.getElementById("pointsEarned").innerHTML = totalFoodAte;

        snakeLength = snakeLength + 100;
        createFood();
    }
};



createGameBoardPixels();
createFood();

var moveSnakeInterval = setInterval(moveSnake, 100);

addEventListener("keydown", (e) => changeDirection(e.keyCode));

leftButton.onclick = () => changeDirection(leftDir);
rightButton.onclick = () => changeDirection(rightDir);
upButton.onclick = () => changeDirection(upDir);
downButton.onclick = () => changeDirection(downDir);






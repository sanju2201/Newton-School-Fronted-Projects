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

const createGameBoardPixels = () => {
    let a = "";
    for (let i = 1; i <= squareOfGamePixal; i++) {
        a += `<div class="gameBoardPixal" id="pixel${i}"></div>`;
    }

    gameContainer.innerHTML = a;
};

const gameBoardPixal = document.getElementsByClassName("gameBoardPixal");
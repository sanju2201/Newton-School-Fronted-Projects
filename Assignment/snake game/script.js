const gameContainer = document.getElementById("gameContainer");

for (let i = 1; i <= 1600; i++) {
    let onePixel = document.createElement("div");
    onePixel.id = `pixel${i}`;
    onePixel.style.height = "10px";
    onePixel.style.width = "10px";
    onePixel.style.backgroundColor = "white";
    gameContainer.appendChild(onePixel);
}

let food = document.createElement("div");
// food.id =

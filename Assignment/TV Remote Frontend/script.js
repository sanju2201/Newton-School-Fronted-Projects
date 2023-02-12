const display = document.getElementById("container");
const power = document.getElementById("power-off");
const signel = document.getElementById("signel");
console.log(power)
power.addEventListener("click", () => {
    if (power.value == "off") {
        display.textContent = "";
        power.value = "";
    }
    else {
        power.value = "off";
        display.textContent = "Power Off"
    }
    glow();
});

function func(value) {
    if (power.value != "off") {
        display.textContent = value;
    }
    glow();
}

function glow() {
    signel.classList.add("blink");

    setTimeout(function () {
        signel.classList.remove("blink");
    }, 500);
}
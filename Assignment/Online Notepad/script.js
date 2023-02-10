const checkBox = document.getElementById("feature-flag");
const textArea = document.getElementById("textarea");
let key = "content", value = "";

window.addEventListener("load", () => {
    checkBox.checked = false;
    textArea.textContent = localStorage.getItem(key)
});

// textArea.addEventListener("input", autoSave);

checkBox.addEventListener("click", autoSave)


function autoSave() {
    setInterval(() => {
        if (checkBox.checked) {
            value = textArea.value;
            localStorage.setItem(key, value);
            console.log(key + " ==> " + value);
        }
    }, 1000)
}

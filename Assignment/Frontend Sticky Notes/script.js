const addButton = document.getElementById("add_note");
let textArea;
let hideButton;
let modal;
// const allNotes = document.getElementById("all_notes");


textArea = document.getElementById("user_input");
hideButton = document.getElementById("hide");

addButton.addEventListener("click", () => {
    modal = document.getElementById("modal");
    modal.style.display = "block";
})


textArea.addEventListener("keydown", function (event) {
    // console.log(event.key);
    if (event.key === "Enter") {
        let textEntered = textArea.value;
        const note = document.createElement("div");
        note.className = "note";
        note.innerHTML = `<div class="details">
        <h1>${textEntered}</h1>
    </div>`;

        document.getElementById("all_notes").appendChild(note);
        // modal = document.getElementById("modal");
        console.log("yes")
        textArea.value = "";
        modal.style.display = "none";

    }
});

hideButton.addEventListener("click", () => {
    // modal = document.getElementById("modal");
    textArea.value = "";
    modal.style.display = "none";
});

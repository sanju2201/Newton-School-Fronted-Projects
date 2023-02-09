// Storing Elements
const pageNumber = document.getElementById("pageNumber");
const container = document.getElementById("container")
const orderedList = document.getElementById("orderedList")
const prev = document.getElementById("load_prev")
const next = document.getElementById("load_next")
prev.disabled = false;
next.disabled = false;

let counter = 1;
window.addEventListener("load", fetchData)

async function fetchData(pageNumberHere = 1) {
    const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
    const data = await res.json();
    console.log(res);
    console.log(data);

}

prev.addEventListener("click", () => {
    counter--;
    if (counter <= 1) {
        counter = 1;
        prev.disabled = true;
    }
    else {
        prev.disabled = false;
    }
    next.disabled = false;
    pageNumber.textContent = `Page number ${counter}`;
    console.log(counter);
    // fetchData(counter);
});

next.addEventListener("click", () => {
    counter++;
    if (counter >= 5) {
        counter = 5;
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }
    prev.disabled = false;
    pageNumber.textContent = `Page number ${counter}`;
    console.log(counter);
    // fetchData(counter);
});

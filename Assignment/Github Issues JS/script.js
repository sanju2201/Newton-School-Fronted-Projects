// Storing Elements
const number = document.getElementById("number");
const container = document.getElementById("container")
const orderedList = document.getElementById("orderedList")
const prev = document.getElementById("load_prev")
const next = document.getElementById("load_next")
// prev.disabled = false;
// next.disabled = false;

let pageNumberr = 0;
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
        // prev.disabled = true;
    }
    else {
        // prev.disabled = false;
    }
    // next.disabled = false;
    pageNumber.textContent = `Page number ${counter}`;
    // console.log(counter);
    // fetchData(counter);
});

next.addEventListener("click", () => {
    counter++;
    if (counter >= 5) {
        counter = 5;
        // next.disabled = true;
    }
    else {
        // next.disabled = false;
    }
    // prev.disabled = false;
    pageNumber.textContent = `Page number ${counter}`;
    // console.log(counter);
    // fetchData(counter);
});


async function fetchIssues(page) {
    const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`);
    const issues = await res.json();
    return issues;
}

async function fetchPage() {
    pageNumber++;
    document.getElementById("number").innerHTML = pageNumber
    const ol = document.getElementById("issueNames");
    ol.innerHTML = "";
    var datas = await fetchIssues(pageNumber)
    for (var data of datas) {
        var li = document.createElement("li");
        li.textContent = data.title;
        ol.append(li);
    }
}

function prevPage() {
    pageNumber = pageNumber - 2;
    if (pageNumber == -1)
        return;
    fetchPage();
}

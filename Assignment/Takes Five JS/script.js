const prev = document.getElementById("back-button");
const next = document.getElementById("next-button");

let page = 1;
prev.disabled = true;

next.addEventListener("click", () => {
    page++;
    console.log(page)
    prev.disabled = false;
    giveValue(page);
});

prev.addEventListener("click", () => {
    page--;
    console.log(page)

    giveValue(page);
    if (page === 1) {
        prev.disabled = true;
    }
});

function giveValue(pageNo) {
    let val = (5 * (pageNo - 1) + 1);
    document.querySelectorAll("#number-display").forEach((item) => {
        item.textContent = val++;
    })

}






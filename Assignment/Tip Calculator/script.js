const billAmount = document.getElementById("billamt");
const peopleAmount = document.getElementById("peopleamt");
const calButton = document.getElementById("calculate");
const option = document.getElementById("serviceQual");
const show = document.getElementById("show");
let amount = billAmount.value;
let people = peopleAmount.value;
let tip = option.value;
let totalTip;
calButton.addEventListener("click", calculateAmount);
function calculateAmount() {
    let amount = billAmount.value;
    let people = peopleAmount.value;
    let tip = option.value;

    if (amount == "") {
        alert("Please Enter Bill Amount");
    }
    else {
        if (people == "") {
            people = 1;
            totalTip = (amount * tip).toFixed(2);
            // totalTip.toFixed(2);
            show.textContent = `Tip - ${totalTip}`;
        }
        else {
            totalTip = ((amount * tip) / people).toFixed(2);
            // totalTip.toFixed(2);
            show.textContent = `Tip - ${totalTip} Each`;
        }
    }

}



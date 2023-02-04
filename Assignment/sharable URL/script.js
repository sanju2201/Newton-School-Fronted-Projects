// console.log("Hello World");

const inputName = document.getElementById("name");
const inputYear = document.getElementById("year");
const button = document.getElementById("button");
const url = document.getElementById("url");

button.addEventListener("click",(event)=>{
    event.preventDefault();
    
 let textPlace = url.textContent;
 let namePlace = inputName.value;
 let yearPlace = inputYear.value;

 url.innerText = `${textPlace}?name=${namePlace}&year=${yearPlace}`;

})

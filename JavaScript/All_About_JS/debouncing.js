const inputElement = document.getElementById("searchBox");
// console.log(inputElement);
inputElement.addEventListener("keyup", debouncingFunction);

let timer;
function debouncingFunction() {
  console.log("KeyPressed");

  clearInterval(timer);

  timer = setTimeout(async () => {
    const data = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const res = await data.json();
    console.log(res);
  }, 1000);
}

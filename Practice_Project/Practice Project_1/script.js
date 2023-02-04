let btn = document.querySelector("#new-quote");
let quotation = document.querySelector(".quotation");
let author = document.querySelector(".author");

const qoutes = [{quote :`xys`,author:`mjhmaha`},
    {quote :`xynngnns`,author:`grmaha`},
    {quote :`xynvnnns`,author:`dggmaha`},
    {quote :`xbcgsfys`,author:`vbcvbmaha`},
    {quote :`xghhhfzvys`,author:`thmaha`},
    {quote :`bfbdhthxys`,author:`tsmaha`},
    {quote :`gkkfyikddhxys`,author:`gdgmaha`},
    {quote :`xyfhggbzbs`,author:`mahggda`},
    {quote :`xysfgzgbvxfgh`,author:`mghrtaha`},
    {quote :`xyshrftyhrhb`,author:`mhrftshsraha`},];

    btn.addEventListener("click",function(e){
        e.preventDefault();
        let random = Math.floor(Math.random()*qoutes.length);
        quotation.innerText = qoutes[random].quote;
        author.innerText = qoutes[random].author;

    })
// console.log("SANJU")

function getApi(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res)=>res.json())
    .then(data =>{
        console.log(data);


        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(result => result.json())
        .then(nextData =>{
            console.log(nextData);
        })
         .catch(()=>{})
    })
    .catch(()=>{})
}

// getApi();

// here we write callback inside callback which will create problem of callback hell
// .. to avoid that we use async await

// async / await

async function newFun(){
try{
const res = await fetch("https://jkjkjsonplaceholder.typicode.com/todos/");
const result = await res.json();
console.log(result);

const newFetch = await fetch("https://jkjjsonplaceholder.typicode.com/todos/")
const newRes = await newFetch.json();
console.log(newRes);

console.log("c")

  } catch(error){
    console.log("ERROR")
  }
  console.log("d")
}

console.log("a")
newFun();
console.log("b")


// Try-Catch



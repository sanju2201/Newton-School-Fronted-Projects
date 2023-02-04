// Promises in js

// there are three stages in promises
// 1) pending -- 2) fulfilled(resolve()) -- 3) rejected(reject())
// if resolve()--> then() will run
// if reject() --> catch() will run

// const promise = new Promise(callback function(resolve, reject));

let age = prompt("Enter your age");
let prom = new Promise(function(resolve,reject){
    setTimeout(()=>{
if(age>18){
    resolve("You can Vote");
}
else{
    reject("You cant Vote");
}
    },5000)

});

// console.log(prom);

let onFulfillment = (result) => {
    console.log(result);
}

let onRejection = (error)=>{
    console.log(error);
}

prom.then(onFulfillment);
prom.catch(onRejection);




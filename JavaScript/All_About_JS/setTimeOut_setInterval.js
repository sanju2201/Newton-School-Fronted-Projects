// setTime out will take 2 parameters 1st as a function and 2nd is a time in miliseconds

// const id = setTimeout(()=>{
//     console.log("Print after 3 sec")
// },3000);


// const id = setTimeout(()=>{
//    const box = document.querySelector("#test");
//    box.style.backgroundColor = "yellow";
//    box.style.height = "500px";
//    box.style.width = "500px";
// },5000);

// function stopAnimation(){
//     clearTimeout(id);
// }

// setInterval  
let a=0;
const interval = setInterval(()=>{
const box = document.querySelector("#test");
if(a>=562){
    clearInterval(interval);
    alert("Timer Over");
}
a += 1;
box.style.marginLeft = a +'px';
},5);


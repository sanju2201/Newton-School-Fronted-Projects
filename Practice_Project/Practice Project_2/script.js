let openBtn = document.querySelector("#open-btn");
let closeBtn = document.querySelector("#close-btn");
let modelContainer = document.querySelector("#model-container");

openBtn.addEventListener("click",function(){
    modelContainer.style.display = "block";

});

closeBtn.addEventListener("click", function(){
    modelContainer.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target === modelContainer){
        modelContainer.style.display = "none";
    }
})

// let x =0;
// openBtn.addEventListener("click",function(){
//     modelContainer.style.display = "block";

//     if(x%2 === 0){
//         console.log("even")
//         x++;
//     }
//     else{
//         console.log("odd");
//         x++;
//     }

// });
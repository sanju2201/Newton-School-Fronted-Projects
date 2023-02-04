document.querySelector("#apply").addEventListener("click",function(){
// document.body.style.backgroundColor = "red";
let wallId = document.querySelector("#wall_id");
let wallColor = document.querySelector("#wall_color");
if(wallId.value && wallColor.value){
    let selectedDiv = document.getElementById(wallId.value);
   let color = giveMeColor(selectedDiv);
   if(color === wallColor.value){
    selectedDiv.style.backgroundColor = color;
    

   }
}



});
 document.querySelector("#reset").addEventListener("click",function(){
    // document.body.style.backgroundColor = "blue";

 });

 function giveMeColor(selectedDiv){ 
    let option = parseInt(selectedDiv.id);
    switch(option){
        case 1:
            return "red";

        case 2:
           return "blue";
          
        case 3:
            return "green";
           
        case 4:
            return "yellow";
          
        case 5:
            return "cyan";
          
        case 6:
            return "orange";
           
        case 7:
            return "brown";
         
        case 8:
            return "purple";
            
        case 9:
            return "grey";
          
    }

 }
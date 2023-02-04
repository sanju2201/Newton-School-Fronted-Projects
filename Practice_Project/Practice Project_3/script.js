let accordian =  document.querySelector(".content-container");

for(let i=0;i<accordian.clientHeight;i++){
    accordian[i].addEventListener("click",function(){
        this.classList.toggle('active');
    });
}
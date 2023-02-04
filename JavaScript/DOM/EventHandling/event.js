// <<<<--------Event in DOM---------->>>>
// mouse event + keyboard Event
// https://developer.mozilla.org/en-US/docs/Web/Events
// click
// button press
// hover

// const btn = document.querySelector("#one");
// btn.addEventListener("click",function(){
//     console.log(this)
// })
// when we write normal anonymous function so the value of (this) will be current element for which that function has been called, here it is btn

// const btn = document.querySelector("#two");
// btn.addEventListener("click",()=>{
//     console.log(this)
// })
// when we write Arrow function in that case the value of (this) will be 1 level up of that perticular element where it was called, here itwill be window object

// selects multiple buttons inside a div

// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let btn of allButtons){
//     btn.addEventListener("click",function(){
//         // console.dir(this);
//         console.log(this.textContent);
//     });
// }
// console.log(allButtons);

// <<<<--------event object---------->>>>

// when ever any event performed by the user, the browser listen that event and pass a event object to callback function as argument to perform the action

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(event){
// console.log(event); // PointerEvent{} this objct is passes to the function as getting output
// });

// const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }

// for(let button of allButtons){
//     button.addEventListener("click",function(event){
//         console.log(event);  // this will print the event triggerd
//     })
// }
// here two properties are imp 1) target 2) current target 

// for(let button of allButtons){
//     button.addEventListener("click",function(event){
//         console.log(this)
//         console.log(event.target); 
//         console.log(event.currentTarget);  // all the 3 console will print the same output
//     })
// }

// target ==> defines from where the event was fired
// currentTarget ==> defines where from the event was listened

// <<<<--------Callback Queue Working ---------->>>>

// console.log("script start");
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click",(event)=>{
//         let num =0;
//         for(let i=0;i<=1000000000;i++){
//             num +=i;
//         }
//         console.log(event.currentTarget.textContent,num);
//     })
// });

// let outNum =0;
// for(let i=0;i<=1000000000;i++){
//     outNum+=i;
// }
// console.log("value of outer loop",outNum);
// console.log("script end");


// <<<<--------on button clicked change the backgroundColor and color ---------->>>>

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.style.color = "#333";
//     })
// })

// <<<<--------for Random Color Generator---------->>>>

// const mainButton = document.querySelector("button");
// // console.log(mainButton);
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// // console.log(currentColor);

// function randomColorGenerator(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const randomColor =`rgb(${red},${green},${blue})`;
//     return randomColor;
// }
// mainButton.addEventListener("click",()=>{
//     // console.log("clikc me")
//     const randomColor = randomColorGenerator();
//     // console.log(randomColor);
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })

// <<<<--------keyPress Event and Mouseover Event---------->>>>
// file event2.html

// keyPress Event
// const body = document.body;
// body.addEventListener("keypress",(event)=>{
// // console.log(event);// print the object pressed key
// console.log(event.key);// key gives the actual character
// })


// Mouseover/ mouseleave Event

// const mainButton = document.querySelector(".btn-headline");
// // console.log(mainButton);
// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouseover effect")
// });
// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouseleave effect")
// });

// <<<<--------event bubbling, capturing, delegation---------->>>>
// event3.html

// event bubbling / event propogation
// event capturing
// event delegation 

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click",()=>{
//     console.log("you Clicked on Child");
// });

// parent.addEventListener("click",()=>{
//     console.log("you Clicked on parent");
// });
// grandparent.addEventListener("click",()=>{
//     console.log("you Clicked on grandparent");
// });

// document.body.addEventListener("click",()=>{
//     console.log("you Clicked on body");
// });
// As we click on the child element its automatically call the parent event also as they overlap
// this is call event bubbling or event propogation

// Capturing event
// here we also pass true as 3rd argument of addEventListener that means we need to capture event
// child.addEventListener("click",()=>{
//     console.log("capture Child");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("capture parent");
// },true);

// grandparent.addEventListener("click",()=>{
//     console.log("capture grandparent");
// },true);

// document.body.addEventListener("click",()=>{
//     console.log("capture body");
// },true);

// when we clicked 1st capturing happen then bubbling happen


// event Deligation

// const grandparent = document.querySelector(".grandparent");

// grandparent.addEventListener("click",(eventObject)=>{
// //  console.log(eventObject);
//  console.log(eventObject.target);
// });
// when we pass event object its gives the actual element which we have click==> we can check it as target property of the object


// <<<<--------Adding functionality to Done and Remove Button of event2.html---------->>>>

// submit event apply on form element (here todo-form)
// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput)

// to print the value entered and refresh the input field
// todoForm.addEventListener("submit",(event)=>{
//     event.preventDefault(); // this will stop refreshing page
//     console.log(todoInput.value); // this will print the enter value
//     todoInput.value =""; // this will clear the input field as we clicked or enter
// });

// to add the todo in the list item
// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");
// todoForm.addEventListener("submit",(event)=>{
//     event.preventDefault(); // this will stop refreshing page
//     const newTodoText = todoInput.value; 
//     const newLi = document.createElement("li");
//     const newLiInnerHtml = `
//     <span class="text">${newTodoText}</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>`;
//   newLi.innerHTML = newLiInnerHtml;
// //   console.log(newLi);
// todoList.append(newLi);
//     todoInput.value =""; 
// });

// todoList.addEventListener("click",(event)=>{
//     // console.log(event.target);
//     // check if user click on done button
//     // console.log(event.target.classList);
//     if(event.target.classList.contains("done")){
//         // console.log("Done");
//         const liSpan = event.target.parentNode.previousElementSibling;
//         // console.log(liSpan);
//         liSpan.style.textDecoration = "line-through";
//     }
//     if(event.target.classList.contains("remove")){
//         // console.log("remove")
//         const targetedLi = event.target.parentNode.parentNode;
//         // console.log(targetedLi);
//         targetedLi.remove();
//     }
// })
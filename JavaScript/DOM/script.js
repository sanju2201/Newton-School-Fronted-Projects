// <<<<--------DOM (Document object Model)---------->>>>

// Note ==> getElementsBySomthing ==> HTMLCollection ==> live list of item
//          querySelector ==> return NodeList ==> static list of item

// console.log(window); // this will print window object
// console.log(window.document); // this will print human readable format of Document Object
// console.dir(document); // This will print autual Document object which appears in web

// <<<<--------selecting Element---------->>>>

// console.log(document.getElementById("main-heading")); // return human readable object
// console.dir(document.getElementById("main-heading"));   //return actual Object 

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// <<<<--------selecting Element by querySelecetor---------->>>>

// const mainHeading = document.querySelector("#main-heading");  // selecting ID
// console.log(mainHeading);

// const headerClass = document.querySelector(".header"); // Selecting class
// console.log(headerClass);

// const navItem = document.querySelector(".nav-item");  // this will only select the 1st element which ever come and return from their
// console.log(navItem);

// const navItem = document.querySelectorAll(".nav-item");  // to select all item with same class
// console.log(navItem);
// this .querySelectorAll method will return a Nodelist

// <<<<--------Change Text---------->>>>
// innerText , textContent

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent); // .textContent will return all the content present inside the perticular tag they might be visible or hide in the web                                                                                                                                                                                                  

// to change the value of any perticular thing 1st we have to select the item and assign it value using =.

// mainHeading.textContent = "my name is Sanju"; // this change the actual content on the web page
// console.log(mainHeading.textContent);

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.innerText); // innerText will return what ever shown to website

// <<<<--------Change style of Element---------->>>>

// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor = "red"; // property that we write in HTML using abc-def ==> in JS we have to use camelCase abcDef = "xyz"

// <<<<--------Get and Set Attribute---------->>>>

// const link1 = document.querySelector("a");
// console.log(link1.getAttribute("href"));

// link1.setAttribute("href","https://google.com");
// console.log(link1.getAttribute("href"));

// <<<<--------get multiple element using getElements by className---------->>>>

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);// this will give HTML collection of all elementwith same class
// console.log(navItems[0]);// to get 1st Element
// console.log(navItems[1]); // to get 2nd Element
// console.log(typeof navItems);

// <<<<--------get multiple element using querySelectorAll---------->>>>

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem); // return NodeList
// console.log(navItem[0]); // return 1st element


// <<<<--------convert an HTML Collections into Array---------->>>>

// let navItem = document.getElementsByClassName(".nav-item");
// navItem = Array.from(navItem);
// console.log(navItem);

// <<<<--------innerHTML---------->>>>

// const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML); // whatever present inside(tags,content) this will print
// headLine.innerHTML = "<h1>Inner html changed</h1>" // this will set the new innerHTML
// headLine.innerHTML += "<p> this is a paragraph tag</p>"; // this will append new element to the previoue one
// console.log(headLine.innerHTML);

// <<<<--------classList---------->>>>

// 1st Exmaple
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList); // classlist will return what are the classes available in that perticular section

// adding a new Class to a element
// sectionTodo.classList.add("bg-dark");

// remove Class to a element
// sectionTodo.classList.remove("container"); // This will remove the container class and change the property

// checking a perticular Class is present or not
// const checkContains = sectionTodo.classList.contains("container");
// console.log(checkContains); // return true as present

// toggle (on/off) a class in a element
// sectionTodo.classList.toggle("bg-dark");

// 2nd Exmaple
// const header = document.querySelector(".header");
// console.log(header);// this wil print the header Element  
// console.log(header.classList); // only 1 class present
// header.classList.add("bg-dark"); // this will change the property, class property seqence in CSS file should be maintained
// console.log(header.classList);
// console.log(header); // here if we check both classes are available

// <<<<--------Creating HTML element using JS---------->>>>

// document.createElement();
// append
// prepend
// remove

//1st Way
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("This is New Item");
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// 2nd way
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "this is a new Item";
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem);// append always add at the end
// todoList.prepend(newTodoItem); // prepend add element at the top
// console.log(newTodoItem);

// remove element

// const todo1 = document.querySelector(".todo-list li");
// console.log(todo1)
// todo1.remove(); 

// before / after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "This is New Item";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);  // add element before the selected element
// todoList.after(newTodoItem); add element after the selected element

// <<<<--------.insertAdjacentHTML(where,html)---------->>>>

// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforebegin","<li> this is new text</li>");
// todoList.insertAdjacentHTML("afterbegin","<li> this is new text</li>");
// todoList.insertAdjacentHTML("beforeend","<li> this is new text</li>");
// todoList.insertAdjacentHTML("afterend","<li> this is new text</li>");
// console.log(todoList);

// <<<<--------clone nodes---------->>>>

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "This is 1st Item";
// const li2 = li.cloneNode(true); // true will deep clone the Node so the content will also coppied
// ul.prepend(li);
// ul.append(li2);

// <<<<--------Some old method to support poor Internet Explorer---------->>>>
// appendChild
// insertBefore
// replaceChild
// removeChild

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.appendChild(li);

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// // for insertBeofre we need a reference node before that we need to add
// const ref = document.querySelector(".todo-list li");
// li.textContent = "new todo";
// ul.insertBefore(li,ref);

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// // for replaceChild we need a reference node with that we replace the new node
// const ref = document.querySelector(".todo-list li");
// li.textContent = "new todo";
// ul.replaceChild(li,ref);

// const ul = document.querySelector(".todo-list");
// const ref = document.querySelector(".todo-list li");
// ul.removeChild(ref);

// <<<<--------Static list and live list---------->>>>

// querySelector ==> returns NodeList
// getElementBySomething ==> returns HTML Collections

// <<<<--------how to get dimension of the element---------->>>>
// height width

// const todoSection = document.querySelector(".section-todo");
// const info = todoSection.getBoundingClientRect(); // this will return all dimension details
// console.log(info);
// const height = todoSection.getBoundingClientRect().height; // return height
// console.log(height);
// const width = todoSection.getBoundingClientRect().width; // return width
// console.log(width)

// <<<<--------  ---------->>>>


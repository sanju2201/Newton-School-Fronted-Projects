// <<<<--------array---------->>>>
// array is referance type object
// arrays are mutable can be change at any instense

// let fruits = ["apple","mango", "grapes"];
// console.log(fruits);  // output ==>  ['apple', 'mango', 'grapes']
// console.log(fruits[0]); // output ==> apple

// fruits[1] ="banana"; // mango will replaced by Banana in the actual array
// console.log(fruits);

// let mixed = [1,"sanju",1.25, {firstName : "sanju", lastName : "manna"}, null, undefined]
// console.log(mixed);

// console.log(typeof mixed); // output ==> object


// <<<<--------Array.isArray() Methods---------->>>>

// console.log(Array.isArray(mixed));  // to check the object is an array or not

// let obj = {};  // this is an object literals
// console.log(typeof obj); // output ==> object
// console.log(Array.isArray(obj)); // output ==> false

// <<<<--------.push() .pop() .shift() .unshift() Method---------->>>>

// let fruits = ["apple","mango", "grapes"];

// fruits.push("potato"); // to add at the end
// console.log(fruits);

// fruits.pop(); // to remove from the last and return the value
// console.log(fruits);

// fruits.unshift("tomato","man"); // to add at the start
// console.log(fruits);

// fruits.shift(); // to remove from the start and return the value
// console.log(fruits);

// <<<<-------- Cloning Array Method---------->>>>

// let fruits = ["apple","mango", "grapes"];

// .slice(start index, end index(excluded) Method
// let clonedArray1 = fruits.slice(0); // slice(start index) // slice method will clone a array from the starting index to till the end.
// console.log(clonedArray1);

// .concat(fruits) Method
// let clonedArray2 = [].concat(fruits);
// console.log(clonedArray2);

// Spread operator
// let clonedArray3 = [...fruits];
// console.log(clonedArray3);

// Create a new Array that should contains elements of old array and two more elements to be add
// 1st way
// let newArray1 = fruits.slice(0).concat(["banana","pineapple"]);
// console.log(newArray1);

// //2nd way
// let newArray2 = [].concat(fruits,["banana","pineapple"]);
// console.log(newArray2);

// // 3rd way
// let newArray3 = [...fruits,"banana","pineapple"];
// console.log(newArray3);

// Create a new Array Element same as previous with All Element UpperCase
// let fruits2 = [];
// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);

// <<<<--------Constant array---------->>>>

//Prefer to make an array always const, So that its reference can't be change

// const fruits = ["apple", "banana", "grapes"];
// console.log(fruits);
// fruits.push("orange", "pineapple","lichy");
// console.log(fruits);

// <<<<--------Array Destructure---------->>>>

// const myArray = ["item1", "item2", "Item3", "Item4", "Item5"];

// let [myItem1 ,myItem2] = myArray; // Elements of the array can be use as normal Variables
// console.log(myItem1);
// console.log(myItem2);

// myItem1 = "sanju";
// myItem2 = "manna";
// console.log(myItem1);
// console.log(myItem2);
// in case there are less elements in the array as compare to the number of variables then remaining variables will show undefined
// in case there is more element are present in the array which are not been used by variable during destructuring so they will leave as it is in the array

// if we want to skip any value from the array we can do it by mentioning commas

// let [myItem1, ,myItem2] = myArray; // the middle element will skipped

// let [myItem1,myItem2,...myNewArray] = myArray;
// console.log(myNewArray);

// <<<<--------imp Array Methods---------->>>>

// forEach
// map()
// filter()
// reduce()

// <<<<--------forEach()---------->>>>

// 1st example
// const numbers = [2,4,6,8,10];

// function myFunc(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// normal traversal using for loop
// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }

// using forEach() ==> forEach function take aa callback function and call by itself
// numbers.forEach(myFunc); // forEach always pass 1st parameter as number and 2nd parameter as index

// we can also directly write the function in forEach directly

// numbers.forEach(function(number,index){
// console.log(`index is ${index} and number is ${number*2}`);
// });

// 2nd example  ==> there is array of objects

// const users = [
// {firstName :"sanju",age : 25,gender :"male"},
// {firstName :"nikki",age : 24,gender :"female"},
// {firstName :"manna",age : 23,gender :"male"},
// ];

// users.forEach((user,index)=>{
// console.log(`User at index ${index} having details as ${user.firstName}, age ${user.age} and Gender ${user.gender}.`);
// });

// <<<<--------map()---------->>>>

// map function will take a callback function as argument and return a answer array

// 1st Example
// const numbers  = [1,2,3,4,5];

// const square = function(number){
//     return number*number;
// }
// const result = numbers.map(square);
// console.log(result);

// we can also create arrow functions
// const result = numbers.map((number,index)=>{
//     return `index: ${index} - value ${number**2}`;
// });
// console.log(result);
// map function will return an Array
// So the requirement is that the callback function should return some values otherwise map function will return an array of undefined.

// 2nd Example

// const users = [
// {firstName :"sanju",age : 25,gender :"male"},
// {firstName :"nikki",age : 24,gender :"female"},
// {firstName :"manna",age : 23,gender :"male"},
// ];

// const fistNameArray = users.map((user)=>{
//     return user.firstName;
// });
// console.log(fistNameArray);

// <<<<--------filter()---------->>>>

// filter function will return an Array on boolean value true or false



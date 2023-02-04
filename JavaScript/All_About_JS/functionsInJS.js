// <<<<--------functions---------->>>>

// Function Declaration
// function isEvenDeclaration(num){
//     return num % 2 === 0;
// }
// console.log(isEvenDeclaration(4));

// Function Expression
// const isEvenExpression = function(num){
//     return num % 2 === 0;
// }
// console.log(isEvenExpression(5));

// Arrow Function 
// Rule to Write a Arrow Functions
// 1. if there is 0 or more then 1 parameter paranthesis are required. For 1 parameter only its optional.
// 2. if there is one line of code in literal or body, curly braces are not required.
// 3. if there is only 1 line of code in body and that also return statement than the return keyword is also optional.

// const functionName = ()=>{}; 

// 1st way
// const isEvenArrow1 = (num) => {
//     return num % 2 === 0;
// };
// console.log(isEvenArrow1(9));

// 2nd way
// const isEvenArrow2 = num => num % 2 === 0;
// console.log(isEvenArrow2(2));

// 3rd way
// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(9,5));

// <<<<--------Functions inside Function---------->>>>

// function app(a,b){
//     const twoSum = (num1,num2)=>{
//         console.log(num1+num2);
//     }

//     const miltiply = function(x,y){
//         return x*y;
//     }
//     twoSum(a,b);
//     console.log(miltiply(a,b));
// console.log("Inside function");
// };
// app(5,2);

// <<<<--------LEXICAL SCOPE---------->>>>

// const myVar = "value1";
// function myApp(){
//     function myFun(){
//         // const myVar = "value23";
//         console.log("inside mFunc" ,myVar);
//     }
//     console.log(myVar);
//     myFun();
// }
// myApp();

// result at start
// value1
// inside mFunc value23

// as line 58 comment out result will be
// value1
// inside mFunc value1
// beacuse functions are tring to find the value for the variable 
// if they dont get value at there own level, they will search it on lexical parent


// <<<<--------block Scope and  Function Scope---------->>>>

// let and const ==> block Scope { block scope, variable created inside block spaces cannot be access outside the block scope}
//    {
//     let x ="sdsd";
//     console.log("Only access inside this block",x);
//    }

// var ==> function Scope
// variable created with var can be access anywhere and can be modified anywhere

// <<<<--------Defalut Parameters---------->>>>

// function myName(firstName ="sanju",lastName ="manna"){
//     console.log(firstName +" "+lastName);
// }
// myName("nikki","sanju");

// <<<<--------Rest Parameters---------->>>>

// function myFun(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myFun(1,2,3,4,5,6,7,8,9);

// here ...c is the rest parameter, 1 assign to a, 2 assign to b, rest values are assign to c as an array.

// function addAll(...restParameter){
//     let sum =0;
//     for(let parameter of restParameter){
//         sum += parameter;
//     }
//     console.log(sum);
// }
// addAll(1,2,3,4,5,6,7,8,9);

// ...restParameter will store all values as Array

// <<<<--------Parameter Destructuring ---------->>>>

// const obj = {
//     firstName : "sanju",
//     lastName : "manna",
//     gender : "male"
// }

// 1st Way
// function myDetails(object){
//     console.log(object.firstName);
//     console.log(object.lastName);
//     console.log(object.gender);
// }
// myDetails(obj);

// 2nd way using destructing
// function myDetails({firstName:fName,lastName,gender}){
//     console.log(fName);
//     console.log(lastName);
//     console.log(gender);
// }
// myDetails(obj);

// <<<<--------Callback Function ---------->>>>

// function myFunc(name){
//     console.log("this function is callback inside final Function",name);
// }

// function newFunc(callback){
//   console.log("inside final Function")
//   callback("sanju");
// }
// newFunc(myFunc);

// Callback functions are used in real world project - like a function take input some data that is fetched from data base
// so first we can store it in some variable than we can call the callback function and pass the data to it.

// <<<<--------Function returning Function ---------->>>>

// 1st Way
// function thisFunCReeturnFunc(){
//     console.log("please return a function");
//     function returningFunc(){
//         console.log("this is returned function");
//     }
//     return returningFunc;

// }
// const ans = thisFunCReeturnFunc();
// // console.log(ans);
// ans();

// 2nd Way

// function myFunc(){
//     console.log("pahle isko print kr");
//     return ()=> console.log("return hoke isko print kar");
// }
// const returnedFunc = myFunc();
// // console.log(returnedFunc);
// returnedFunc();

// <<<<--------Higher Order Function ---------->>>>

// if any function taking input parameter as function or returning a function or doing both together is called higher order functions.


// <<<<--------Map().filter().reduce() ---------->>>>


// let arr =[2,4,9,7,6,1,3,5,8,9,1];

//map()
// let multiplyByTwo = (arrayElement)=>{
//     return arrayElement*2;
// }

// let mapFuntion = arr.map(multiplyByTwo);
// console.log(mapFuntion);

//filter()

// let returnEven = (arrayElement)=>{
//     return arrayElement%2===0;
// }
// let filterFunction = arr.filter(returnEven);
// console.log(filterFunction);

// reduce()

// let reducedArray = (total,accumulator)=>{
//     return total+accumulator;
// }
// let reduceFunction = arr.reduce(reducedArray,0);
// console.log(reduceFunction)

// let ans = arr.map(multiplyByTwo).filter(returnEven).reduce(reducedArray,0);
// console.log(ans);
// <<<<--------hoisting---------->>>>

//var
// console.log(firstName);  // If we access variable with var before initiating its value it will give undefined.
// //output ==> undefined
// var firstName = "sanju";

// let and const
// console.log(lastName); //output ==> Cannot access 'lastName' before initialization
// const lastName = "manna";

// with Functions
// function Declaration

// console.log(power(3)); // Output ==> 9 // hoisting will work in case of function Declaration
// function power(num){
//     return num ** 2;
// }

// function Expression and Arrow Function (In these cases hoisting will not work)

// printName("sanju"); //output ==> Cannot access 'printName' before initialization
// const printName = function(name){
//     console.log(name);
// }

// print(); // Cannot access 'printName' before initialization
// const print = () => console.log("javaScript");


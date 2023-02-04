// <<<<--------String---------->>>>

// string indexing 
//  let firstName = "sanju";

 // s  a  n  j  u
 // 0  1  2  3  4

//  console.log(firstName[2]);
 // output==> n

 // String length
//  console.log(firstName.length);
 // outpurt==> 5

//  console.log(firstName[firstName.length-1]);
 // output==> u  ( to print last character)

 // <<<<--------String Methods---------->>>>

// <<<<--------String Methods(.length)---------->>>>

//  let myName = "   Sanju Manna   ";
//  console.log(myName.length); // output==> 17

 // .trim(); as we know string is immutable so trim method will not change the existing string.
 // trim method will return a new string by removing extra spaces form start and last.

// <<<<--------String Methods(.trim())---------->>>>

//  let trimName = myName.trim();  // or we can also assign the new valve to itself
// myName = myName.trim();
//  console.log(trimName); // output ==> sanju manna
//  console.log(trimName.length); // output==> 11

// <<<<--------String Methods(.toUpperCase / .toLowerCase)---------->>>>

// myName = myName.toUpperCase();
// console.log(myName);

// myName = myName.toLowerCase();
// console.log(myName);

//   <<<<--------String Methods(.slice)---------->>>>

// let myName = "SanjuManna";
// slice method work like subString it takes startIndex(inclding) endIndex(Excluding) and return the subString between the Indexs
// let newName = myName.slice(0,6);  // output ==> SanjuM
// let newName = myName.slice(2); // if we pass only 1 index it will take it as start index and go till the end.
// console.log(newName);


// <<<<--------String Concatination---------->>>>

// let firstName = "Sanju";
// let lastName = "Manna";

// let fullName = firstName + lastName;
// let fullName = firstName +" "+ lastName;
// console.log(fullName);  // output ==> Sanju Manna

// let str1 =  "10";
// let str2 = "17";

// let newStr = str1 + str2;
// console.log(newStr);  // output ==> 1017

// let newStr = +str1 + +str2;
// console.log(newStr); // output ==> 27
// console.log(typeof(newStr)); // output ==> number

// <<<<--------template String---------->>>>

let firstName = "sanju";
let city = "bhilai";

let sentence1 = "my name is " + firstName + " I live in " + city;
console.log(sentence1);  // 1st way to write

// using template String
let sentence2 = `my name is ${firstName} I live in ${city}`;
console.log(sentence2); // 2nd way using backtick dollerSign{variable}







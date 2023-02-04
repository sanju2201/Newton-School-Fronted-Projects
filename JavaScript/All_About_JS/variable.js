// For vaariable name we can start with character , $ (doller) and _(underscore)
// Space are not allowed in between name (ex: first name, it should be firstName or first_name)
// camelCase  and snake_case allowed ex:firstName and first_name.
// var has block scope
// let has function scope

// <<<<--------var ---------->>>>

// Variables in js
// var name = "sanju";
// console.log(name);

// firstName = "mohit";
// console.log(firstName);

// var lasrName = "sanju";
// var lastName = "manna";
// same variable name defined twice its allow with var
// console.log(lasrName);

// <<<<--------let---------->>>>

// let name = "sanju";
// let name = "manna";
// repeating same variable name is not alloowed with let
//Uncaught SyntaxError: Identifier 'name' has already been declared
// console.log(name);


// let num1 = 10;
// console.log(num1);
// console.log(num1 +10);
// console.log(num1 ** 2);    **2 give power
// console.log(num1 ** 0.5);  **0.5 give root of a number


// <<<<--------const---------->>>>

// fixed value that cannot be change

// const PI = 3.14;
// PI = 4; variable.js:42 Uncaught TypeError: Assignment to constant variable.
// console.log(PI);
// console.log(PI*5*5);

// <<<<--------Undefined---------->>>>

// let str;
// console.log(typeof str); // output ==> undefined

// str = "sanju";
// console.log(typeof str ); // output ==>  string

// <<<<--------null---------->>>>

// let variable = null;
// console.log(variable); // output ==> null
// console.log(typeof variable); // output ==> object

// <<<<--------BigInt---------->>>>

// let num = 54564413616144641444145511411646464; //output ==> 5.456441361614464e+34
//   num = BigInt(num);
// num = 125n; // as we add (n) here this is also converted into bigint
// let num = BigInt(646414964617431464619414464644);
// console.log(num);
// console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991 max value that can be stored as number
// for number more than .MAX_SAFE_INTEGER we have to use BigInt.
// we can't add other variable with BigInt










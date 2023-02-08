// --------------------------------//
// Curring


// Make a function which give sum of 3 numbers
// General way of Writing
function fun(num1, num2, num3) {
    return num1 + num2 + num3;
}
// console.log(fun(1, 2, 3));// this will give me 6 as output

// Write a function which can only take single parameter as input
function funC(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}
const res1 = funC(2);
const res2 = res1(3);
const res3 = res2(4);
// console.log(res3);  // Here this will return as 9 
// ----------OR----------
const res4 = funC(2)(3)(4); // the above 3lines of code converted into the one liner
// console.log(res4); // here this will also return the result as 9


// Now Optimise the above Code using Arrow functions
// Make a Curried function which can only take 1 parameter
const funD = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3;
        }
    }
}

const res5 = funD(2)(3)(4);
// console.log(res5) // this will also return the result as 9

// Lets reduce the Above code more
const funE = num1 => num2 => num3 => num1 + num2 + num3;
const res6 = funE(2)(3)(4);
// console.log(res6); // This will also give the same result as 9;
//  So the 1st Huge Code now converted into one line of Code

// Lets take an example we need to sum 3 numbers 10000 times for that fisrt 2 numbers never changes
// On that situation we will use curried function which will only takes the 3rd parameter and do the calculations

const curriedFuc = funE(2)(3); // here we set the 1st and 2nd function for the function and store that as a function which will only takes 1 parameter
// const ans = curriedFuc(4); // output ==> 9
// const ans = curriedFuc(5); // output ==> 10
// const ans = curriedFuc(6); // output ==> 11
// const ans = curriedFuc(7); // output ==> 12
// console.log(ans)
// Here as we give the 3rd parameter the function no need to calculate value for 1st two parameter again and again




// ------------- CALL / APPLY / BIND ------------------//

// BIND
const obj1 = {
    fName: "sanju",
    lName: "manna"
}
const obj2 = {
    fName: "nikki",
    lName: "manna"
}
function myBind() {
    console.log(
        `This is ${this.fName} and ${this.lName}`
    );
}
const bind1 = myBind.bind(obj1); // bind return a function so we have to store and call it
// bind1();
const bind2 = myBind.bind(obj2);
// bind2();




// CALL
function myCall() {
    console.log(
        `This is ${this.fName} and ${this.lName}`
    );
}
// myCall.call(obj1);  // this will call the function with the object pass to it
// myCall.call(obj2);





// APPLY
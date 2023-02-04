// class Human {
//     #surname; // private property only aaccessibble inside class
//     constructor(){
//         this.name = "sanju";
//         this.age = 25;
//         this.legs = 2;
//         this.#surname = "Manna";
//     }

//     sayName(){  // normal function
//         console.log(`Name of the person is ${this.name} ${this.#surname}`);
//     }

//     #giveDetails (){  // private function
//         console.log(`Name of the person is ${this.name} ${this.#surname}`);
//     }

//     static liveIn(city){  // static function
//         Human.#giveDetails();
//      console.log(`This Human is live in ${city}`);
//     }
// }

// const person = new Human();
// console.log(person.name); // public property accessible out side from the class

// console.log(person.#surname);  //Property '#surname' is not accessible outside class 'Human' because it has a private identifier.

// person.sayName(); // this will give result as "Name of the person is sanju Manna"

// static methods can not be accessible with Objects they can only use with Class Name

// person.liveIn("bhilai"); //Uncaught TypeError: person.liveIn is not a function

// Human.liveIn("bhilai"); // static funsctions only accessbile with calss name

// person.#giveDetails(); // Property '#giveDetails' is not accessible outside class 'Human' because it has a private identifier.

// Human.liveIn("bhilai");

// console.log(typeof Human);  // Class is a kind of function

// console.log(Human.toString()); // this will print the complete class as String

/////////////////////// We can Achieve the same thing using Function also ///////////////////


// function User(name){
//  this.name = name;
// }

// User.prototype.sayHi = function(){
//     console.log(`User name is ${this.name}`);
// }

// let newUser = new User("sanju");
// newUser.sayHi();


///////////////  class an be define as a expression //////////

// let Man = class {
//     constructor(){
//         this.name = "sanju";
//         this.age = 25;
//     }

//     sayHi(){
//         console.log("Hi Man");
//     }
// }

// let person = new Man();
// person.sayHi();


//////////////  we can create class Dynamically  ///////////////
// here this function returns a class

// function makeClass(name){
//     return class {
//         constructor(){
//             this.name = name;
//             this.age = 25;
//         }

//         sayBye(){
//             console.log("Bye Bye");
//         }
//     }
// }

// let returnedClass = makeClass("sanju");

// let newInstance = new returnedClass();
// newInstance.sayBye();
// console.log(newInstance.name , newInstance.age);


////////////// MIXIN //////////////

// MixIn to add something which is not present inside the class we ca add it saperatly with affeting the actual class
// we can use mixin use as inferitance but without creating new class

// class User{
//     constructor(){
//         this.fName = "John";
//         this.lName = "Doe";
//         this.game = "Cricket";
//     }

//     // getInfo(){
//     //     console.log(`The user is ${this.fName} ${this.lName} plays ${this.game}.`);
//     // }
// }

// const user = new User();
// console.log(user)
// user.getInfo(); // here we will get the output.

// lets assume getInfo() method is not present inside the class 
// like the User class is coming from diff file and the code inside class we can't change
// we can achieve with mixin without modifing the actual class
// we can add multiple methods or property that we want to add in our current object by created a mixin object which attached 
// to the prototype of the class

////////////////////////////////////////////////
// This part of thr code also give the same code
// const myMixin = {
//     getInfo(){
//         console.log(`The user is ${this.fName} ${this.lName} plays ${this.game}.`);
//     }
// }

// const user = new User();
// user.__proto__ = myMixin;
// user.getInfo();


// const user2 = new User();
// user2.getInfo();
// // this instance of the class can't access the getInfo Method as it is not added to the actual class
// // it was only to the perticular instance 

// ///////////////////////////////////////////////////

// const user = new User();

// 1st way in this we can't see the method as property of the object
// user.__proto__ = myMixin;
// console.log(user);

// 2nd way in this we can see the method as property of the object
// Object.assign(user,myMixin);
// console.log(user);

////////////////////


/////////////////////GETTER and SETTER////////////////////////Start

class User{
    constructor(){
        this.fName = "John";
        this.lName = "Doe";
        this.game = "Cricket";
    }

    getInfo(){
        console.log(`The user is ${this.fName} ${this.lName} plays ${this.game}.`);
    }
      
    // getName(){
    //     return this.fName;
    // }

    // setName(name){
    //     this.fName = name;
    // }

    get fullName(){
        return `${this.fName} ${this.lName}`;
    }

    // set fullName(name){
    //     console.log("print " + name);
    // }

    set fullName(name){
        // console.log("print " + name);
        // to set the fName and lName we can split the value coming parameter
        this.fName = name.split(" ")[0];
        this.lName = name.split(" ")[1];
    }


}

// from outside from the class we can not edit the constructor, but we can set the values of variabls
// const user = new User();
// console.log(user.getName());
// user.setName("sanju");
// console.log(user.fName);

// const user = new User();
// getter and setter are the keys to retrieve and update the properties of a class,
// where the functions acts as property name, we can access without write () while calling

// console.log(user.fullName);  // this will give us the  
// user.fullName = "nikki manna";  // setting 

// console.log(user.fName); // output ==> nikki
// console.log(user.lName);
// console.log(user);

/////////////////////GETTER and SETTER////////////////////////Ends

/////////////////////PROPERTY Descriptors//////////////////////// this can be control by defined property methods

const user1 = {
    fName : "sanju",
    lName : "manna"
}

// console.log(user1);
// console.log(user1.hasOwnProperty("fName")); // true ==> Exist
// console.log(user1.hasOwnProperty("address")); // false ==> Not Exist

const fnameDes = Object.getOwnPropertyDescriptor(user1,"fName");
// console.log(fnameDes);  // Output ==>

// {value: 'sanju', writable: true, enumerable: true, configurable: true}
// configurable: true
// enumerable: true
// value: "sanju"
// writable: true

// these details will coming as the properties of the variable 
// writable ==> means we can update the value for that key

// user1.fName = "nikki";  // first name will updatd
// console.log(user1); 

// if we add a new property address we can also update the value
// user1.address = "new Property Aded";
// console.log(user1); // here we can see he address property is added into the user1
// we can also update the value means (Editable)
// user1.address = "updated address";
// console.log(user1);

// but if we can to create something which can not be change

// syntax ==> Object.defineProperty(<object name>,<property-key>,{configuration-object})
Object.defineProperty(user1,"address",{
    value: "123 ABC Street",
    writable : false, // this will prevent the property value to be same
});

// console.log(user1); // here we can see address property is added to user1 Object
// if we want to update the value of the address property can't be modified
// user1.address = "New Address"; // we cant update 
// console.log(user1)
const addressDes = Object.getOwnPropertyDescriptor(user1,"address");
// console.log(addressDes); // here if we check writable it shows writable : false
// console.log(user1);

// configurable: false        //
// enumerable: false          // if false ==> loop cant be apply in this property
// value: "123 ABC Street"    //
// writable: false            // if false ==> to make data Read-Only

/////////////////////PROPERTY Descriptors//////////////////////// Ends







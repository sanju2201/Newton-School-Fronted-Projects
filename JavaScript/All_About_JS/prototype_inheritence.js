// prototype_inheritence.js

let parent = {fatherName : "Asit Manna",
              motherName : "Sharmila Manna",
              giveMoney : function(a){
                console.log("give him  " + a +" Rupees");
              }
};

let child = { name : "Sanju Manna",
              age : 25,
              job : "No job"
};

child.__proto__ = parent;

console.log(child.fatherName);
child.giveMoney(100);
function A(){};
function B(){};
function C(){};

B.prototype = Object.create(A.prototype);
// here we will lose the constructor for B

// to retain That we can do

const b = new B();
console.log(b);
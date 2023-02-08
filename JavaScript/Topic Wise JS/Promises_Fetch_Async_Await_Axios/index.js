// console.log("Hello World")

// how can we create a promises
// 1st Way

/*
const prom = new Promise((resolve, reject) => {
    let res = true;
    if (res) {
        resolve("solved");
    } else {
        reject("Not solved");
    }
});

// console.log(prom);

prom.then((res) => {
    console.log(res);

}).catch((res) => {
    console.log(res);
});
*/

// 2nd Way
/*
const callBackFun = (resolve, reject) => {
    let x = 1;
    if (x) {
        resolve("Solved");
    } else {
        reject("Not Solved");
    }
};

const prom2 = new Promise(callBackFun);
console.log(prom2);
*/


//-------------------------------------------------//
// setTimeout

/*
const timeOut = setTimeout(() => {
    console.log("login");
}, 5000);

console.log(timeOut);
*/

// -----------------------------------------------//
// promises with setTimeout
/*
const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Pass");
        reject("Fail");
    }, 2000);
})

// console.log(prom3)
prom3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
*/

// ---------------------------------------------//
// Promise.all();
/*
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("Promise 1 Fulfilled")
        } else {
            reject("Promise 1 Rejected");
        }
    }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve("Promise 2 is fulfilled")
        } else {
            reject("Promise 2 is Rejected");
        }
    }, 5000);
});


const promiseArray = [prom1, prom2];

Promise.all(promiseArray).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
}).catch((error) => {
    console.log(error);
});

*/


// --------------------------------------//
// Avoiding nested Promise and .then()
/*
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("*");
    }, 1000);
});

const twoStar = (star) => {
    return (star + star);
};

const oneDot = (star) => {
    return (star + ".");
};

const print = (val) => {
    console.log(val);
};

const ifFaild = (err) => {
    console.log(err);
}

// Chaining them all together

prom.then(twoStar).then(oneDot).then(print).catch(ifFaild);

*/

// -------------------------------//

// JavaScript Async - Await
/*
function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Hello World")
            } else {
                reject("Bye Bye World")
            }
        }, 2000);
    });
}
const msg1 = async function () {
    const newMsg1 = await func();
    console.log("Message from msg1 ", newMsg1);
}
const msg2 = async () => {
    const newMsg2 = await func();
    console.log("Message from msg2 ", newMsg2);
}
msg1();
msg2();
*/

// -----------------------------------//

// Resolving Promises
/*
let prom1 = Promise.resolve(5);
let prom2 = 444;
let prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([prom1, prom2, prom3]).then((values) => {
    console.log(values);
})
*/

// --------------------------------------//

// Async Await Promises
/*
function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pass");
        }, 1000);
    });
}

async function callingFun() {
    const msg = await func();
    console.log(msg);
}

callingFun();
*/

// --------------------------------------//








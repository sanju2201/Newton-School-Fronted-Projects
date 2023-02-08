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

// fetch api
/*
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
    .then((res) => {
        return res.json();
    }).then((ans) => {
        console.log(ans);
    });
*/
// --------------------------------------//

// Fetch API Function

/*
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Request Failed");
    }, networkError => {
        console.log(networkError.message);
    }).then((res) => {
        console.log(res);
    })
*/
// --------------------------------------//

// Fetch API Function with Async Await
/*
async function func() {
    const fetching = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo");
    const response = await fetching.json();
    console.log(response);
}

function calling() {
    setTimeout(() => {
        func();
    }, 2000);
}

calling();
*/


// --------------------------------------//

// Axios
//  Axios used to make REST API calls in an efficient manner
// Axios is a promise-based HTTP Client for node.js and the browser.
// This is a library so 1st we need to add this to our file
// for now we are adding by script tag
/*
axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
    .then((res) => { console.log(res) })
    .catch((err) => {
        console.log(err);
    });
*/

// --------------------------------------//
// Using async await
/*
async function func() {
    try {
        const response = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

func();
*/

// --------------------------------------//
// In case API calling are not dependent on each other we no need to use async await

// const postApi = axios.get("https://jsonplaceholder.typicode.com/posts");
// const commentsApi = axios.get("https://jsonplaceholder.typicode.com/comments");
// const albumApi = axios.get("https://jsonplaceholder.typicode.com/albums");
// const todosApi = axios.get("https://jsonplaceholder.typicode.com/users");

// const arrayOfPromises = [postApi, commentsApi, albumApi, todosApi];

/*
// Promise all function will wait till all the API fulfilled or any of the API call Rejected then the Promise.all() method will executes

Promise.all(arrayOfPromises)
    .then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    .finally((data) => {
        console.log(data);
    })


    // So this way if one of the API call will fail, then we lost rest of the API called detailed also
    // so to overcome this there is one more method called Promise.allSettled();
 */

//  This method will return all the results wheather they are fulfilled or rejected
/*
Promise.allSettled(arrayOfPromises)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
*/


/*
//  Promise.race() method return the fastest return among them which ever will fulfilled first
Promise.race(arrayOfPromises)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

*/

// --------------------------------------//

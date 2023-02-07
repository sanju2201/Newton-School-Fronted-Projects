// Axios is a Library used to make REST API calls in an efficiant manner.
// https://axios-http.com/docs/intro
// Axios is a promise - based HTTP Client for node.js and the browser.It is isomorphic(= it can run in the browser and nodejs with the same codebase). On the server - side it uses the native node.js http module, while on the client(browser) it uses XMLHttpRequests.

// 1st Way
axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })


// 2nd Way
async function getComment() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        console.log(response.data);

    } catch (error) {
        console.log(error);

    }
}
// getComment();

//////////////////
const response = axios.get("https://jsonplaceholder.typicode.com/todos/");
console.log(response)


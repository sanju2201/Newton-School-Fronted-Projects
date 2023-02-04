//<<<<-------------DOM Tree/Traversal-------------->>>>

// const rootNode = document.getRootNode();
// console.log(rootNode); // this will return the rootNode i.e. #document

//<<<<-------------childNodes-------------->>>>

// to get child Nodes inside rootNode
// const htmlElementNode = rootNode.childNodes; // this will return Nodelist of childNodes i.e. NodeList(2) [<!DOCTYPE html>, html]
// const htmlElementNode = rootNode.childNodes[1];  // this will return the html element
// console.log(htmlElementNode.childNodes); // NodeList(4) [script, head, text, body]

// const scriptElement = htmlElementNode.childNodes[0]; 
// console.log(scriptElement);

// const headElement = htmlElementNode.childNodes[1];
// console.log(headElement);

// const textNode =  htmlElementNode.childNodes[2];
// console.log(textNode);

// const bodyElement = htmlElementNode.childNodes[3];
// console.log(bodyElement);

//<<<<-------------parentNode-------------->>>>

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[1];

// const bodyElement = htmlElementNode.childNodes[3];
// console.log(bodyElement.parentNode); // return html node which is parent of the body

//<<<<-------------Siblings Node-------------->>>>

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[1];

// const headElement = htmlElementNode.childNodes[1];
// console.log(headElement.nextSibling);  // return next Sibling node to the current node that might be a element or text Node
// console.log(headElement.nextElementSibling);

//<<<<-----------Select a Child and change its Parents property------------>>>>

// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// console.log(div);
// div.style.color = "#900";
// div.style.backgroundColor = "#999"

// const container = document.querySelector(".container");
// console.log(container.children); // children property will return collection of html Element

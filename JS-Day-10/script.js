const headd=document.getElementById("heading");

console.log(headd.innerText) // it will only show the visible text
console.log(headd.textContent) // it will show all the text including hidden text
console.log(headd.innerHTML) // it will show all the text with html tags

// DOM Modification
// create new element and its contnt
const newpara=document.createElement("p");
newpara.textContent="This is a new paragraph created by js";
console.log(newpara);

// append the new element to the DOM
const container=document.getElementById("container");
container.appendChild(newpara);

//remove an element from DOM
const con = document.querySelector("#container p").remove();

// Event Handeling
function clickhadeling(){
    document.getElementById("output").textContent="Button Clicked!";
}
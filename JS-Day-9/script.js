// query Selector
const query = document.querySelector("#heading p");
console.log(query);

query.textContent="Hello World from query selector"

// uery selector all
const queryAll = document.querySelectorAll("p");
console.log(queryAll);
for(let i=0; i<queryAll.length; i++){
    queryAll[i].textContent="jbubcdj uewf yb e" ;
}
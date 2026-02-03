// // query Selector
// const query = document.querySelector("#heading p");
// console.log(query);

// query.textContent="Hello World from query selector"

// // Query selector all
// const queryAll = document.querySelectorAll("p");
// console.log(queryAll);
// for(let i=0; i<queryAll.length; i++){
//     queryAll[i].textContent="jbubcdj uewf yb e" ;
// }

const query = document.getElementsByTagName("p");
for(let i = 0 ; i<query.length;i++){
    if(i%2==0){
        query[i].style.color="blue";
    }
    else{
        query[i].style.color="green";
    }
}
query[-1].style.fontweight="bold";
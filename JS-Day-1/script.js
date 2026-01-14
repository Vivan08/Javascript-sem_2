var a = 10;
console.log(a);

function demo (){
    console.log(a);
    var b= 20;
    console.log(b);
}
demo();
// Regular Function
function sum(){
let a=10;
let b=20;
console.log(a+b)
}

const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,10)

// Call Back Function 
function demo(a){
    return a;
}
console.log(demo(5))

const demo=(a)=>a;

// arrow function is itself a callback function


// syncronus function
function sample(){
    console.log("sample")
}
sample()

function demo(){
    console.log("demo")
}
demo()
//

// syncronus you cannot move to another task before one is completed , asyncronus you can move to another task before one is completed 


// asyncronus function
function sample(callback){
    console.log("sample");
    callback()
}
function demo(){
    console.log("demo")
}
sample(demo)
//

// map
let numbers = [1,2,3];
let doubled = numbers.map((x)=>x*2);
console.log(doubled);
//
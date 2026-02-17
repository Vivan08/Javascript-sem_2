// console.log("start..")
// function myfunction (){
//     setTimeout(()=>{
//         return "my function"
//     },2000)
// }
// console.log(myfunction());

// console.log("end..")

//asyncronous programming
console.log("start..")
function myfunction (){
    setTimeout(()=>{
        console.log("my function");
    },2000);
}
myfunction((data) => {
    console.log(data);
});
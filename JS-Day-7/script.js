let user = {
    name : "Vivan",
    Address:{
        city:"gurugram",
        state:"Haryana",
    },
    mobileno : 123456789,
    favcolr : ["Red","green","blue"],
    demo: function(){
        return "demo function"
    }

}
console.log(user)

console.log(user.name,user.mobileno,user.favcolr)

console.log("my name is "+user.name+" and my favourate colour is "+user.favcolr[1]);


// string literals
console.log(`My name is ${user.name} and my favourate colour is ${user.favcolr[0]}`);

console.log(`My name is ${user.name} and my favourate colour is ${user.favcolr[2]} and i live in ${user.Address.city}`);
console.log(user.demo())
//object methods

// syntax Object.keys(variable name)
console.log(Object.keys(user))
//synatx Object.values(variable name)
console.log(Object.values(user))
//syntax Object.values(variable name)
console.log(Object.entries(user))



const car = {
    maker : "mahindra",
    model : "Thar"
}
//object.freeze cannot add new key or change the values of an existing key
//object.seal cannot add new keya but can change the values of a key
car.color = "black"
Object.seal(car)
car.color = "blue"
console.log(car)
Object.freeze(car)
car.maker="toyota"
console.log(car)
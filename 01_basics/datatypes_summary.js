// Two types of data types

// 1) Primitive (7 types)
// -> String , number , boolean , null , undefined , Symbol , BigInt

const big_number=9999999999999999999999n
// n at the end to make it a bigint




// 2) reference (Non primitive)
// -> Array , object , functions

const colors=["red","green","blue"]

// objects are in curly brackets { }

// let my_obj={
//     name : "tanish",
//     age : 21,
// }

const my_func=function(){
    console.log("function called")
}


// console.log(typeof function);


// ******************************************************************


// Types of memory
// Stack (Primitive) -> a copy is passed
// and 
// Heap (Non-Primitive) -> a reference of original value is passed


// Here a copy is passed in Primitive data type
let name="tanish"
let another_name=name
another_name="aarush"
console.log(name)
console.log(another_name)


// Here a reference is passed in Non-Primitive data type
let userOne={
    email : "tanish@gmail.com",
    upi : "tanish@upi"
}

let userTwo=userOne

userTwo.email="email@changed"
console.log(userOne.email)




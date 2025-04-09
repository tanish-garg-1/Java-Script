// singleton -> constructed by constructor
// object.create

// symbol daat type
const mysym=Symbol("Key1")

// object literals
const jsuser={
    name:"tanish",
    age:20,
    location:"Patiala",
    isloggedin:false,
    [mysym]:"mykey1"
}

// to access the objects
console.log(jsuser.name)

// to make any object unchangeable
//Object.freeze(jsuser)
// after this if we change like jsuser.name="..."

// declaring a function
// it is same as declaring a function
jsuser.greetings=function(){
    console.log("hello jsuser")
}
jsuser.greetings()

jsuser.greetingstwo=function(){
    console.log(`hello jsuser , ${this.age}`)
}
jsuser.greetingstwo()
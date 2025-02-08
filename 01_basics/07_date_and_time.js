// Dates are recocorded from january 1 1970

let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())

 let new_date=new Date(2023,2,23)  
// console.log(new_date.toString())
 
// Month start from 0 in java

let MyTimeStamp = Date.now()
console.log(MyTimeStamp)   // give the answer in milisecond
console.log(new_date.getTime())  // the ans is in milliseconds

console.log(Date.now())
console.log(Math.floor(Date.now()/1000)) // to get in seconds

console.log(mydate.getMonth()+1)
console.log(mydate.getDate())
console.log(mydate.getDay())

const score=10
console.log(score)

const balance =new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(typeof balance)

// Precesion
const otherNummber=21.3456
console.log(otherNummber.toPrecision(3))

// to put commas in indian and us format
const hundreds=1000000000000
console.log(hundreds.toLocaleString('en-IN'))


// ***********     Maths   ************

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(2.3))
// console.log(Math.floor(5.5))
// console.log(Math.ceil(5.5))
// console.log(Math.max(2,3,5,6,7,9))

console.log(Math.random())  // it always gives val bw 0 and 1
console.log((Math.random()*10)+1)

const min=10
const max=100
console.log(Math.random(min,max))

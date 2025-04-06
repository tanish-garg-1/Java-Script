// array
// ARRAYS IN JS ARE RESIZEABLE
// THE INDEXING START FROM 0
// ARRAYS IN JS MAKE A SHALLOW COPY ie. share the same reference
const myarr=[0,1,2,3,4,5,6]
const myheroes=["comando","heroo"]

myarr.push(7)
console.log(myarr)
myarr.pop()

// TO INSERTAT THE BEGINNING
myarr.unshift(10)
console.log(myarr)

console.log(myarr.includes(0))
console.log(myarr.indexOf(100))

// TO BIND AND CONVERT INTO STRING
const newarr=myarr.join()
console.log(myarr)
console.log(newarr)

// SLICE 
console.log("A ",myarr)
const my1=myarr.slice(1,3) // includes 1 to 2
console.log(my1)
console.log("B ",myarr)

// SPLICE
console.log("A ",myarr)
const my2=myarr.splice(1,3) //includes 1 to 3 and remove them from the orriginal array
console.log(my2)
console.log("B ",myarr)
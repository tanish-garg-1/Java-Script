const name="tanish"
const roll=1234
console.log(name)

// Backticks are used ``
console.log(`Hello my name is ${name} and my roll no is ${roll}`)

// declaration of string can also be doe like this
// this methods help us to use all the inbuilt functions of string
const my_name=new String('Tanish garg')
console.log(my_name)
console.log(my_name.length)
console.log(my_name[0])
console.log(my_name.charAt(2))
console.log(my_name.indexOf('a'))

// to get a sub string
// .substring does work for -ve indexes but .slice does
const new_string=my_name.substring(0,5)
console.log(new_string)

// trim and replace function
const newStringOne="       tanish        "
console.log(newStringOne)
console.log(newStringOne.trim())

const temp="a cbd dff f ff g gw g"
console.log(temp.replaceAll(' ','_'))

console.log(temp.includes('dff'))


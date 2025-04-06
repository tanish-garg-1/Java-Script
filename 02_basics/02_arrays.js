const colors=["red","blue","green"]
const num=["1","2","3"]

// push
num.push(colors)
console.log(num)

// concatnation  (stores the result in a diff array)
const neww=num.concat(colors)
console.log(neww)

// spread
const aLL_new=[...colors,...num]

// flatten an array
const other_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr=other_arr.flat()
console.log(real_another_arr)



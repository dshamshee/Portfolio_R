let a = 10
let b = 20

if(++a || b++)
    a++

// console.log(a,b)

const add = a=>b=>a+b
const rs = add(4)(5)
console.log(rs)
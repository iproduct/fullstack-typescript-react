console.log(Symbol("foo") !== Symbol("foo"))
const foo = Symbol('foo')
const bar = Symbol('bar')
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log(JSON.stringify(obj)) // {}
console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []
console.log(Object.getOwnPropertySymbols(obj)) // [ foo, bar ]


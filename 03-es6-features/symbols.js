console.log(Symbol("foo") === Symbol("foo"))
console.log("foo" === "foo")
const foo = Symbol('foo')
const bar = Symbol('bar')
console.log(typeof foo)
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log(JSON.stringify(obj)) // {}
console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []
console.log(Object.getOwnPropertySymbols(obj)) // [ foo, bar ]
console.log(Object.getOwnPropertySymbols(obj).map(symbol => obj[symbol]))
for(prop in obj){
    console.log(`${prop} = ${obj[prop]}`)
}

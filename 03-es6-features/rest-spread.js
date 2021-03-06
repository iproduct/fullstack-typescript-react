// let a, b, rest;
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

// [a, b, , , ...rest] = [1, 2, 3, 4, 5, 6, 7]; //rest - lval
function f() {
    console.log(arguments);
}
// f(...rest); //spread - rval
// crest = [...rest, 10];
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]
// console.log(crest, rest, crest === rest);

// ({a, c} = {a:1, b:2, c:3});
// console.log(a); // 1
// console.log(c); // 2

// ES7 - not implemented in Firefox 47a01
// ({a, b, ...rest} = {a:1, b:2, c:3, d:4});
{/* <child ...rest />  */}
a = [[1], [2], [3]];
// b = [ ...a, [4]];
b = [...JSON.parse(JSON.stringify(a)), [4]];
[, c] = a;
console.log(c.shift());

console.log(b.shift().shift());

console.log('a=', a);
console.log('b=', b);
// console.log('c=', c);


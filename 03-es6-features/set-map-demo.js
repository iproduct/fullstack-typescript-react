// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));
for(e of s){
    console.log(e);
}

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
for(e of m.entries()){
    console.log(`${e}`)
}
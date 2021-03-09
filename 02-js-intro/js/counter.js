var counter = function countWithClosure() { //IIFE - Module pattern
  var count = 0; //private state
  function _inc() {
    return count++;
  }
  return { //public API
    increment: function () {
      return _inc();
    },
    decrement: function () {
      return --count;
    }
  };
}();

console.log(counter.increment());
// console.log(counter.count)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
       
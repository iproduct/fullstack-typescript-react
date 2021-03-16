// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   console.log(value);
// }

// let iterable = "boo";

// for (let value of iterable) {
//   console.log(value);
// }

class Fibonacci {
  constructor(number) {
    this.number = number;
  } 
  [Symbol.iterator]() {
    let pre = 0, cur = 1, index = 0, number = this.number;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        index++;
        return { done: index > number, value: cur };
      }
    }
  }
}

for (let n of new Fibonacci(10) ) {
  console.log(n);
}
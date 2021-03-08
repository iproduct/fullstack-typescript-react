for (var i = 0; i < 10; i++) {
  setTimeout(function (x) {
    return function () {
      console.log(x);
    }
  }(i), i * 1000);
}

function test() {
  for (var i = 0; i < 10; i++) {
    setTimeout((x => () => console.log(x))(i), i * 1000);
  }
}

function test() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}

test()
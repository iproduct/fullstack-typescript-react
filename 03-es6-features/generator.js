var fibonacci = {
    [Symbol.iterator]: function*() {
      var pre = 0, cur = 1;
      for (;;) {
        var temp = pre;
        pre = cur;
        cur += temp;
        if(cur > 10000) break;
        yield cur;
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 10000
    console.log(n);
  }
async function f() {
  let promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("Sample result."), 5000);
    setTimeout(() => reject("Error found."), 5000);
  });

  let result;
  try{
    result = await promise; // <=> promise.then(result => console.log(result); return result;).catch(err => {result = 'Error processed successfully.'; return result;})
    console.log(result);
  } catch(err) {
    result = 'Error processed successfully.';
    throw err;
  }
  return result;
}

( async () => {
  try{
    const result = await f();
    console.log(`Demo finished: ${result}`);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
})(); //IIFE

console.log("Demo completed.")
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task completed."), 2000);
  });

  let result = await promise; // <=> promise.then(result => console.log(result); )
  console.log(result); // "done!"
}

(async () => {
  try{
    await f();
    console.log('Demo finished.');
  }catch(err){
    console.log(err);
  }
})() //IIFE


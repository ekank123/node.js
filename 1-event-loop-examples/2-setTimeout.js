// starting operation system process
console.log("first");

// second task will get offloaded
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// exited the operating system

// file module
// This is a synchronous approach

const { readFileSync, writeFileSync } = require("fs");
// OR
// const fs = require('fs');
// fs.readFileSync();

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is te result : ${first} , ${second}`,
  { flag: "a" },
);

console.log("Done with the task");
console.log("Starting the next one");

// If we want to append then only we will use flag otherwise in the ifrst pass the file will be created

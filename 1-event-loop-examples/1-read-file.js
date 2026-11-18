const { readFile } = require("fs");

console.log("starting a first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log("completed the first task");
});

console.log("Stating next task");

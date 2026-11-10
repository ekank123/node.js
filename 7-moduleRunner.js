// Modules
// CommonJS, every file is module(by default)
// Modules - Encapsulation Code(only share minimum)

// Here we have used modules.js and utils.js

const modules = require("./4-modules.js");
const sayHi = require("./5-utils.js");
// console.log(names);
const data = require('./6-genericData.js');
// console.log(data);
require('./8-mind-gerenade.js');

sayHi("sujan");
sayHi(modules.john);
sayHi(modules.peter);

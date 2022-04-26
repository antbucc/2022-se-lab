/*
* files-async.js
* Example of asynchronous access to files
*/

// Loading the file system library
var fs = require("fs");

// File name from the common line params
var fileName = process.argv[2];

// Accessing the content of the file asynchnously  
fs.readFile(fileName, "utf8", function(error, data) {
  console.log(data);
});
console.log("hi");

console.log("Program ended.");
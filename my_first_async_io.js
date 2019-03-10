var fs = require("fs");

var buff = Buffer.from(fs.readFileSync(process.argv[2]))
	.toString("utf8").split("\n").length - 1;

console.log(buff);


// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

var fs = require("fs");

var answer = fs.readFile(process.argv[2], function (err, data) {
	var dataRead = data.toString("utf8").split("\n").length - 1;
	return dataRead;
}


console.log(answer);

// not sure why this isn't working, I would think it would 

// my solution to my_first_io.js
// var fs = require("fs");
//
// var buff = Buffer.from(fs.readFileSync(process.argv[2]))
// 	.toString("utf8").split("\n").length - 1;
//
// console.log(buff);

//official solution for reference
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

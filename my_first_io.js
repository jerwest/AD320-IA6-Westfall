var fs = require("fs");

var buff = Buffer.from(fs.readFileSync(process.argv[2]))
	.toString("utf8").split("\n").length - 1;

console.log(buff);

var userInput = process.argv;
var sum = 0;

for (var i = 2; i < userInput.length; i++) {
	sum += Number(userInput[i]);
}

console.log(sum);

//official solution for reference
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
//
// console.log(result)

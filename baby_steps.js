var userInput = process.argv;
var sum = 0;

for (var i = 2; i < userInput.length; i++) {
	sum += Number(userInput[i]);
}

console.log(sum);

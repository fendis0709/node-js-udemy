console.log('Starting app.js');

const fs	= require('fs');	// https://nodejs.org/api/fs.html
const os	= require('os');	// https://nodejs.org/api/os.html
const calc	= require('./calc.js');	// Requiring file from outside

function randomInteger(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = randomInteger(0, 9);
var y = randomInteger(11, 19);

var resultCalculation	= calc.calculateMultiplyNumber(x, y);

var textToEcho	= `Result : ${resultCalculation}`;

console.log(textToEcho);
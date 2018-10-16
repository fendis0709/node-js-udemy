console.log('Starting app');

const fs	= require('fs');	// https://nodejs.org/api/fs.html
const os	= require('os');	// https://nodejs.org/api/os.html

var textToEcho	= `Hello ${os.userInfo().username}! You're using ${os.type()} OS, right?${os.EOL}`;

fs.appendFile('testing.txt', textToEcho, function (error) {
	if(error){
		console.log('Unable to write to file');
	}
});
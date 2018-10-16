console.log('Starting calc.js');

module.exports.hello	= 'Hello world';

module.exports.calculateMultiplyNumber	= (x, y) => {
	console.log('Calculate : ' + x + ' * ' + y);
	return (x * y);
};

// console.log(module.exports);
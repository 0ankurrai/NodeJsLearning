// currentFolder - ./fileName
// parentFolder - ../filePath
// subFolder - ./subFolder/fileName
const logger = require('./logger');		// or ./logger.js
console.log(logger);

function sayHello(name) {
	console.log('Hello ' + name);
}

sayHello('Ankur');

var message = 'Yo Yo Ankur!!!';

/* Below message retuns undefined, 
as message is not defined in global scope,
It's only defined in this file
*/
console.log(global.message);
console.log(message)


/*	
	Every file is a module, 
	and every variable or function defined in that file,
	are in scope to that module
*/

console.log(module);	// module is not global

logger.log(message);
/* 
	If in logger log was added as - 
	module.exports = log;
	then only this will do - 
	logger(message);
*/
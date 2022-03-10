
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('loggerEvent', (arg) => {
	console.log('Data', arg);
});

var url = 'http://mylogger.io/log';

console.log(__filename);
console.log(__dirname);

function log(message) {
	// Send an HTTP request
	console.log(message);
	emitter.emit('loggerEvent', {data: message});
}

// module.exports.loggersLog = log;
module.exports.log = log;
// module.exports = log;  // Since only one function or variable is being added
// exports.log = log;
// exports = log     // this will set module.exports to log, so don't use this

/*  this is how the code actually works
(function (exports, require, module, __filename, __dirname) {
	// body...
})
*/

const path = require('path');

var filePath = path.parse(__filename);
console.log(filePath);

// Template string
// ES6 / ES2015 : ECMAScript 6

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
	if (err) console.log('Error', err);
	else console.log('Result', files);
});





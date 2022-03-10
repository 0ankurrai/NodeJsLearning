
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (eventArg) => {
	console.log('Listener Called', eventArg);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
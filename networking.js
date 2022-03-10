const http = require('http');

const server = http.createServer((request, response) => {
	if (request.url === '/') {
		response.write('Yo Everyone');
		response.end()
	}

	if (request.url === '/api/testing') {
		response.write(JSON.stringify([23, 2424,4, 2,3,2 ,3,2]));
		response.end();
	}
});

// server.on('connection', (socket) => {
// 	console.log('New Connection')
// })
server.listen(2200);

console.log('Listening on port 3000...');
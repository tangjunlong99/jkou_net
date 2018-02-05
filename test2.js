var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('you are so good\n');
}).listen(2000,"127.0.0.1");
console.log('http://127.0.0.1:2000/');
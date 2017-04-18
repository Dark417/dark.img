var server = require('http'); //http module



server.createServer(engine).listen(1477);

function engine(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('How');
}

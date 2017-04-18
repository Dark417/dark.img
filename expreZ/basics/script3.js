var http = require('http'); //http module

var server = http.createServer(engine);

server.listen(1447, function() {
  console.log('Server was hit by a request');
});


function engine(request, response) {
  
  //console.log(response);

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('How'+ ' Request from page:' + request.url);
}

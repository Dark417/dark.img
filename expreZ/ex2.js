var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));
//show cssFiles, but it's assets'folder
//the folder unavailable, but the files inside are

app.get('/hi', function(request, response) {
  response.send('nimahai');
});

app.listen(1337,function() {
  console.log('Llistening at Port 1337');
});

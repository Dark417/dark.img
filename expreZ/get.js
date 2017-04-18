var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(__dirname + '../express'));

app.get('/', function(req, resp) {
  //resp.sendFile('ui.html', {root: path.join(__dirname, '../')});
  var response = "Hi!" + req.query.firstName;
  resp.end(response);
});


app.listen(1337, function() {
  console.log('Llistening at Port 1337');
});














//

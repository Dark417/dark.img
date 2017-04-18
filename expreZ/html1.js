var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/', function(req, resp) {
  resp.sendFile('ui.html', {root: path.join(__dirname, '../')});
});

app.get(/^(.+)$/, function(req, resp) {
  console.log(req.params);
  if(fs.statSync(path.join(__dirname, '../', req.params[0], '.html')).isFile()) {
    resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, '../')});
  } else {
    resp.sendFile('1.txt', {root: path.join(__dirname, '../')});
  }

})



app.listen(1337,function() {
  console.log('Llistening at Port 1337');
});

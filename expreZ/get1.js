var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/css', express.static(__dirname + '../express'));

app.get('/', function(req,resp) {
  resp.sendFile('ui.html', {root: path.join(__dirname, '../')});
});

app.get(/^(.+)$/, function(req, resp) {

  try {

    if(fs.staticSync(path.join(__dirname, './files/', req.params[0]+'.html')).isFile()) {
      resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files')});

      } catch(err) {
      console.log(err);
      resp.sendFile('404.html', {root: path.join(__dirname, './files')});
      }
    }
});


app.listen(1337,function() {
  console.log('Llistening at Port 1337');
});














//

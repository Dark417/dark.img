console.log('yeah!');

var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'rBWFORux82jyPUnXIscOChEj-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'dsuykmSffJYGRd0YFbbFVUmi',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'BRylkErWzErfLHJ4cWJrqTMj'
});

var app = express();


app.use(AV.express());


app.use('/', function(req,res) {
  res.send('Hello World');
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('use');

});



app.get('/', function(req,res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('get');
});










app.listen(process.env.LEANCLOUD_APP_PORT);

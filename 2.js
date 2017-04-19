console.log('yeah!');

var express = require('express');
var AV = require('leanengine');
var path = require('path');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'rBWFORux82jyPUnXIscOChEj-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'dsuykmSffJYGRd0YFbbFVUmi',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'BRylkErWzErfLHJ4cWJrqTMj'
});

var app = express();


app.use(AV.express());


app.use(express.static('public'));
app.use('/pic', express.static('/img'));


app.use('/', function(req,res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('use');
});


app.get('/', function(req,res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('get');
});

function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

getClientIp();










app.listen(process.env.LEANCLOUD_APP_PORT);

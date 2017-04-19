/**
 * Created by dark on 17/4/5.
 */
console.log('oh yeah!');
console.log('oh yeah!');
console.log('oh yeah!');
console.log('oh yeah!');

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();




app.use('/', function(req,res) {
  res.sendFile('2.htm');
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('use');

});

app.get('/', function(req,res) {
  res.sendFile('2.htm');
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('get');
});

app.listen(8888);

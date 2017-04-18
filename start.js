/**
 * Created by dark on 17/4/5.
 */
console.log('oh yeah!');

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();




app.use('/', function(req,res) {
  res.sendFile('2.htm', {root: path.join(__dirname, '/')});
});

app.listen(8888);

/**
 * Created by dark on 17/4/5.
 */
console.log('oh yeah!');

var express = require('express');
var path = require('path');

var app = express();

// console.log(__dirname);

// app.use('/', function(req,res) {
//   res.send('Hello World');
//   // res.sendFile('index.html', {root: path.join(__dirname, '/')});
//   // res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log('use');
//
// });


//
// app.get('/', function(req,res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '/')});
//   // res.sendFile('2.htm', { root: __dirname + '/' } );
//   // res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log('get');
// });


//
// var staticPath = path.join(__dirname, '/public');
// app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});

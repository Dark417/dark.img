/**
 * Created by dark on 17/4/5.
 */
console.log('oh yeah!');

var express = require('express');
var path = require('path');

var app = express();
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

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

app.use(function(err, req, res, next) {
  console.log('app.use2');
  if (req.timedout && req.headers.upgrade === 'websocket') {
    console.log('app.use2.if');
    // 忽略 websocket 的超时
    return;
  }

  var statusCode = err.status || 500;

  if (statusCode === 500) {
    console.log('app15');
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.log('app16');
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  console.log('app17');
  // 默认不输出异常详情
  var error = {}
  console.log('app18');
  if (app.get('env') === 'development') {
    console.log('app19');
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  console.log('app20');
  res.render('error', {
    message: err.message,
    error: error
  });
});

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000);



console.log(PORT);



app.listen(PORT, function (err) {
  console.log('server8, Node app is running on port:', PORT);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.log('server-process.on()');
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.log('server-process.on()');
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});

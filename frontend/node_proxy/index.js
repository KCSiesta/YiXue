var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var HOST = 'http://119.23.79.230:8080/study';
/*
*CORS support
*/

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/user/getCascadedType', function(req,res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

//start a server
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('HTTP Server is running in http://127.0.0.1:8888');
});

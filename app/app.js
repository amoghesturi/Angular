var fs = require('fs');
var http = require('http');

var port = 3000;


var server = http.createServer(function (request, response) {

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.write(fs.readFileSync("../test.json"));
  response.end();

}).listen(port);

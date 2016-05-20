var fs = require('fs');
var http = require('http');

var port = 3000;


var server = http.createServer(function (request, response) {

  // response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // response.header('Access-Control-Allow-Headers', 'Content-Type');
  // response.header('Access-Control-Allow-Credentials', 'true');
  // response.write(fs.readFileSync("../test.json"));
  // response.end();



}).listen(port);

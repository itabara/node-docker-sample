var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container: ' + hostname + '<br>Port is: ' + port + '</body></html>');
});


app.set('port', port);
app.listen(port);
console.log('Running on http://' + hostname + ':' + port);

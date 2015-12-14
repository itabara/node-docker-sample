var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container: ' + hostname + '</body></html>');
});

var port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port);
console.log('Running on http://' + hostname + ':' + port);

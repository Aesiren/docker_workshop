var express = require('express');

var app = express();

var port = 8080;

app.get('/', function (res, req) {
  res.status(200).json({ message: 'My api is up and running' });
})

app.listen(port, () => {
  console.log('API Server listening on port ' + port);
})

module.exports = app;
require('use-strict');

const express = require('express');

var app = express();

var server = app.listen(process.env.PORT, function () {
  require('./app/routes');
});

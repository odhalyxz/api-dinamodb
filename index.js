const express = require('express');
const app = express();

const { config } = require('./config/index');
console.log(config.PORT);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.PORT, function() {
  console.log(`Listening http://localhost:${config.PORT}`);
});
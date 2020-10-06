const express = require('express');
const app = express();
const { PORT } = require('./config/index');



app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(PORT, function() {
  console.log(`Listening http://localhost:${PORT}`);
});
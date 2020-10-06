const express = require('express');
const app = express();
const { PORT } = require('./config/index');
const routes = require('./routes/users')

app.use(express.json());
app.use(routes);
app.listen(PORT, function() {
  console.log(`Listening http://localhost:${PORT}`);
});
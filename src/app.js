const express = require('express');
const router = require('./router');
const feeder = require('./feeder');
const config = require('./config');
const app = express();
const port = config.c.port;

app.set('port', (process.env.PORT || port))
app.use('/', feeder, router);

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
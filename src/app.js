const express = require('express');
const router = require('./router');
const feeder = require('./feeder');
const app = express();
const port = 3000;

app.set('port', (process.env.PORT || port))
app.use('/', feeder, router);

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
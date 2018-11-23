const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();
const port = 3001;

/**
 * SET THE API CONFIGS
 */
app.set('port', (process.env.PORT || port))


/**
 * SET THE MIDDLEWARE PIPE
 */

app.use('/', router);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**
 * LISTEN
 */
app.listen(app.get('port'), () => console.log(`Bleuet API listening on port ${port}!`));

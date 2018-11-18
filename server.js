const express = require("express");
const bodyParser = require("body-parser");
const MongoTDG = require("./persistence/mongoTDG");
const fetchHelper = require("./persistence/fetchHelper");
const app = express();
const port = 3001;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/api/login/", (req, res) => {
  console.log('catch!');
  console.log(req.body);
  res.cookie("user", req.body);
});

app.get("/api/:colName/:opName/:objId/", (req, res) => {
  // Log the request.

  MongoTDG.connect(
    req,
    res
  );
});

app.post("/api/:colName/:opName/", (req, res) => {
  // Log the request.
  console.log(req.body);
  MongoTDG.connect(
    req,
    res
  );
});

app.get("/api/post/many", (req, res) => {
  // fetchHelper.get

})

app.listen(port, () => console.log(`Bleuet API listening on port ${port}!`));

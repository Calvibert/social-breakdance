const express = require("express");
const bodyParser = require("body-parser");
const MongoTDG = require("./persistence/mongoTDG");
const helperTDG = require("./persistence/helperTDG");
const app = express();
const port = 3001;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/api/login/", (req, res) => {
  req.params.colName = "user";
  req.params.opName = "read";

  MongoTDG.connect(
    req,
    res
  );
  res.cookie("user", "user cookie value");
  res.send("cookie sent!");
});

app.get("/api/:colName/:opName/:obj/", (req, res) => {
  // Log the request.

  helperTDG.retrieveWithId(req, res, req.params.colName, req.params.opName);
});

app.post("/api/:colName/:opName/", (req, res) => {
  // Log the request.
  console.log(req.body);

  helperTDG.retrieve(req, res, req.params.colName, req.params.opName);
});

app.get("/api/post/many", (req, res) => {
  // fetchHelper.get
});

app.listen(port, () => console.log(`Bleuet API listening on port ${port}!`));

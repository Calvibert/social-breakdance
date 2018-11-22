const express = require("express");
const bodyParser = require("body-parser");
const MongoTDG = require("./persistence/mongoTDG");
const HelperTDG = require("./persistence/helperTDG");
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

  res.cookie("user", "user cookie value");

  HelperTDG.retrieve(req, res, "user", "read");
  res.send("cookie sent!");
});

app.get("/api/:colName/:opName/:obj/", (req, res) => {
  // Log the request.

  HelperTDG.retrieveWithId(req, res, req.params.colName, req.params.opName);
});

app.post("/api/:colName/:opName/", (req, res) => {
  // Log the request.
  console.log(req.body);

  HelperTDG.retrieve(req, res, req.params.colName, req.params.opName);
});

app.get("/api/post/many", (req, res) => {
  // fetchHelper.get
});

app.listen(port, () => console.log(`Bleuet API listening on port ${port}!`));

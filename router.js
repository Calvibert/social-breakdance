const express = require("express");
const bodyParser = require("body-parser");
const factoryTDG = require("./persistence/factoryTDG");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Routing at Time: " + Date.now());
  next();
});

router.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

router.get("/api/hello", (req, res) => {
  res.send("hello there.");
});

router.post("/api/signup", (req, res) => {
  req.params.colName = "user";
  req.params.opName = "create";
  console.log(req.body);

  helperTDG.retrieveWithBody(req, res, req.params.colName, req.params.opName);
});

router.post("/api/login/", (req, res) => {
  console.log(req.body);
  req.params.colName = "user";
  req.params.opName = "read";

  res.cookie("user", "user cookie value");

  const tdg = factoryTDG.factory();
  // tdg.connect(req, res, req.params.colName, req.params.opName);
  res.send("cookie sent!");
});

router.get("/api/:colName/:opName/:obj/", (req, res, next) => {
  // log the request
  next();
});

router.post("/api/:colName/:opName/", (req, res) => {
  // Log the request.
  console.log(req.body);

  // helperTDG.retrieve(req, res, req.params.colName, req.params.opName);
});

router.get("/api/post/many", (req, res) => {
  // fetchHelper.get
});

module.exports = router;

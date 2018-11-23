const express = require("express");
const helperTDG = require("./persistence/helperTDG");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Routing at Time: " + Date.now());
  next();
});

router.get("/api/hello", (req, res) => {
  res.send("hello there.");
});

router.post("/api/signup", (req, res) => {
  req.params.colName = "user";
  req.params.opName = "create";

  helperTDG.retrieveWithBody(req, res, req.params.colName, req.params.opName);
});

router.post("/api/login/", (req, res) => {
  req.params.colName = "user";
  req.params.opName = "read";

  res.cookie("user", "user cookie value");

  helperTDG.retrieve(req, res, req.params.colName, req.params.opName);
  res.send("cookie sent!");
});

router.get("/api/all/:colName/:opName/", (req, res) => {
  helperTDG.retrieve(req, res, req.params.colName, req.params.opName);
});

router.get("/api/:colName/:opName/:obj/", (req, res) => {
  // Log the request.

  helperTDG.retrieveWithId(req, res, req.params.colName, req.params.opName);
});

router.post("/api/:colName/:opName/", (req, res) => {
  // Log the request.
  console.log(req.body);

  helperTDG.retrieve(req, res, req.params.colName, req.params.opName);
});

router.get("/api/post/many", (req, res) => {
  // fetchHelper.get
});

module.exports = router;

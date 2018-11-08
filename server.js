const express = require("express");
const MongoTDG = require("./mongoTDG");
const objectID = require("mongodb").ObjectID;
const app = express();
const port = 3001;

app.get("/api/:colName/:reqType/:objId/", (req, res) => {
  const p = req.params;
  var r = MongoTDG.connect(
    p.colName,
    p.reqType,
    obj = { id: objectID(p.objId) }
  );

  console.log(r);
  res.send({ res: r });
});

app.get("/api/:colName/:reqType/", (req, res) => {
  const p = req.params;
  const r = MongoTDG.connect(
    p.colName,
    p.reqType
  );
  res.json({ res: r });
});

app.post("/api/:colName/:reqType/:objId", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

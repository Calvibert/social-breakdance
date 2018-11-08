const express = require("express");
const MongoTDG = require("./persistence/mongoTDG");
const app = express();
const port = 3001;

app.get("/api/:colName/:opName/:objId/", (req, res) => {
  MongoTDG.connect(
    req,
    res
  );
});

app.post("/api/:colName/:opName/", (req, res) => {
  MongoTDG.connect(req, res);
})

app.listen(port, () => console.log(`Bleuet API listening on port ${port}!`));

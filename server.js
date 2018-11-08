const express = require("express");
const MongoTDG = require("./mongoTDG");
const objectID = require("mongodb").ObjectID;
const app = express();
const port = 3001;

app.get("/api/:colName/:reqType/:objId/", async (req, res) => {
  const p = req.params;
  var r = MongoTDG.connect(
    res,
    p.colName,
    p.reqType,
    obj = { _id: objectID(p.objId) }
  );

  // res.json({ res: r });
  // var r;
  // await MongoClient.connect("mongodb://127.0.0.1:27017/", (err, client) => {
  //   if(err) {throw err;}

  //   var db = client.db("soc-plat");
  //   db.collection('post').find().toArray(async (err, result) => {
  //     if(err) {throw err;}
  //     r = await result;
  //     console.log(result);
  //     res.json({res: r});
  //   })
  // });
  // console.log(r);
  
});

// app.get("/api/:colName/:reqType/", (req, res) => {
//   const p = req.params;
//   const r = MongoTDG.connect(
//     p.colName,
//     p.reqType
//   );
//   res.json({ res: r });
// });

// app.post("/api/:colName/:reqType/:objId", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

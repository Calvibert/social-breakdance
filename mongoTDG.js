const MongoClient = require("mongodb").MongoClient;
const visitor = require("./visitorTDG");
const url = "mongodb://127.0.0.1:27017/";
const dbName = "soc-plat";

exports.connect = function(req, res) {
  var col;
  const colName = req.params.colName;
  const opName = req.params.opName;

  MongoClient.connect(
    url,
    (err, client) => {
      if (err) throw err;

      col = client.db(dbName).collection(colName);
      var result = visitor.dispatch(req, res, col, opName);

      client.close();

      return result;
    }
  );
};

const MongoClient = require("mongodb").MongoClient;
const visitor = require("./visitorTDG");
const url = "mongodb://127.0.0.1:27017/";
const dbName = "soc-plat";
var col;

exports.connect = function(res, colName, opName, obj = 0, newObj = 0) {
  MongoClient.connect(
    url, 
    (err, client) => {
      if (err) throw err;

      col = client.db(dbName).collection(colName);
      var result = visitor.dispatch(res, col, opName, obj, newObj);

      client.close();

      return result;
    }
  );
};

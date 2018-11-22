const MongoClient = require("mongodb").MongoClient;
const visitor = require("./visitorTDG");
const url = "mongodb://127.0.0.1:27017/";
const dbName = "soc-plat";

exports.connect = (response, params) => {
  var colName = params.colName;

  MongoClient.connect(
    url,
    (err, client) => {
      if (err) throw err;

      var collection = client.db(dbName).collection(colName);
      var result = visitor.dispatch(response, collection, params);

      client.close();

      return result;
    }
  );
};

const MongoClient = require("mongodb").MongoClient;
const visitor = require("./strategyTDG");
const url = "mongodb://127.0.0.1:27017/";
const dbName = "soc-plat";

exports.connect = (collectionName, operation, object, newObject = 0) => {
  MongoClient.connect(
    url,
    (err, client) => {
      if (err) throw err;

      var collection = client.db(dbName).collection(collectionName);
      var result = visitor.dispatch(collection, operation, object, newObject);

      client.close();

      return result;
    }
  );
};

const MongoClient = require("mongodb").MongoClient;
const strategy = require("./strategyTDG");
const url = "mongodb://127.0.0.1:27017/";
const dbName = "soc-plat";

exports.operate = function(collectionName, operation, object, newObject = 0) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, client) => {
      if (err) throw err;

      var collection = client.db(dbName).collection(collectionName);
      var result = strategy.dispatch(collection, operation, object, newObject);

      client.close();

      return result;
    }
  );
};

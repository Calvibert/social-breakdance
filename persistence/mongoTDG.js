const MongoClient = require("mongodb").MongoClient;
const strategy = require("./strategyTDG");
const url = "mongodb://127.0.0.1:27017/";
const test = require("assert");
const dbName = "soc-plat";

exports.operate = function(
  collectionName,
  operation,
  object,
  newObject = 0,
  callback
) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, client) => {
      if (err) throw err;

      var collection = client.db(dbName).collection(collectionName);
      var result = strategy.dispatch(collection, operation, object, newObject);

      client.close();

      result
        .then(result => {
          callback(result.ops);
        })
        .catch(error => {});
    }
  );
};

exports.count = function(collectionName, filter = 0, callback) {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;

    var collection = client.db(dbName).collection(collectionName);
    collection.countDocuments(filter).then(function(count) {
      client.close();
      callback(count);
    });
  })
}
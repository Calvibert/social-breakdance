const MongoClient = require('mongodb').MongoClient;
const visitor = require('./visitorTDG');
const config = require('./config');
const url = config.c.dbUrl;
const dbName = config.c.dbName;
var col;

exports.connect = function(opName, colName, obj = 0, newObj = 0) {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;

        col = client.db(dbName).collection(colName);
        visitor.dispatch(opName, col, object=obj, newObject=newObj);

        client.close();
    });
};

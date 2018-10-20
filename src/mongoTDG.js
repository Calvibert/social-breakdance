const MongoClient = require('mongodb').MongoClient;
const visitor = require('./visitorTDG');
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'test';
var conn;
var col;

exports.connect = function(op) {
    if (!conn) connect();
    console.log('Operation: ' + op);

    return visitor.dispatch(op, col);
};

function connect() {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;

        conn = true;
        col = client.db(dbName).collection('post');
    });
}
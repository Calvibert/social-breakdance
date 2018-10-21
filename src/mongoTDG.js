const MongoClient = require('mongodb').MongoClient;
const visitor = require('./visitorTDG');
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'soc-plat';
var col;

exports.connect = function(op) {
    connect();

    return visitor.dispatch(op, col);
};

function connect() {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;

        col = client.db(dbName).collection('user');
        console.log(col.find().count().then(function(value) {
            console.log(value);
        }));
    });
}
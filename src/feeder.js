const MongoClient = require('mongodb').MongoClient;
var conn;

var feeder = function(req, res, next) {
    if (!conn) connect();

    
    
    next();
}

function connect() {
    MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, client) => {
        if (err) throw err;
    
        var db = client.db('test');
    
        db.collection('test').find().toArray(function (err, result) {
            if (err) throw err
        
            console.log(result)
        });
    });
    conn = true;
}

module.exports = feeder;
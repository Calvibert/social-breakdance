var tdg = require('./mongoTDG');

var feeder = function(req, res, next) {
    var result = tdg.connect('create', 'user', {"name":"Kyle Lowry"});

    next();
}

module.exports = feeder;
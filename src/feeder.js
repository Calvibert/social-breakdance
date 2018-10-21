var tdg = require('./mongoTDG');

var feeder = function(req, res, next) {
    var result = tdg.connect('read');

    next();
}

module.exports = feeder;
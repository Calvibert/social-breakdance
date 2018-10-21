var tdg = require('./mongoTDG');

var feeder = function(req, res, next) {
    var result = tdg.connect('add');

    next();
}

module.exports = feeder;
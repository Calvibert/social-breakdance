var tdg = require('./mongoTDG');

var feeder = function(req, res, next) {
    var result = tdg.connect('remove');

    next();
}

module.exports = feeder;
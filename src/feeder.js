var tdg = require('./mongoTDG');

var feeder = function(req, res, next) {
    var result = tdg.connect('add');
    console.log(result);
    next();
}

module.exports = feeder;
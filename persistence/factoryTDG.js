const MongoTDG = require("./mongoTDG");

var exports = (module.exports = {});

exports.factory = function(name = 0) {
  switch (name) {
    case "mongoDB":
      return MongoTDG;
    default:
      return MongoTDG;
  }
};

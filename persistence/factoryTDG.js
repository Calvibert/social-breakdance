const MongoTDG = require("./mongoTDG");
const objectID = require("mongodb").ObjectID;
const noPosts = 5;

var exports = (module.exports = {});

exports.factory = function(name = 0) {
  switch (name) {
    case "mongoDB":
      return MongoTDG;
    default:
      return MongoTDG;
  }
};

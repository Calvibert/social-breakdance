const MongoTDG = require("./mongoTDG");
const objectID = require("mongodb").ObjectID;
const noPosts = 5;

var exports = module.exports = {};

exports.getManyPosts = function(numberOfPosts = 0) {
  noPosts = numberOfPosts | noPosts;

  var posts = [];
}

exports.retrieve = function(request, response, colName, opName) {
  var params = {
    colName: colName,
    opName: opName,
    object: request.params.obj,
    newObject: request.body
  };
  MongoTDG.connect(
    response,
    params
  );
}

exports.retrieveWithId = function(request, response, colName, opName) {
  var params = {
    colName: colName,
    opName: opName,
    object: { _id: objectID(request.params.obj) }
  };
  MongoTDG.connect(
    response,
    params
  );
}

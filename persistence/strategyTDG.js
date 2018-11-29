const objectID = require("mongodb").ObjectID;
var col;
var op;
var obj;
var newObj;
var res;

exports.dispatch = async function(response, collection, params) {
  col = collection;
  op = params.opName;
  obj = params.object;
  newObj = params.newObject;
  res = response;

  switch (op) {
    case "create":
      return create();
    case "remove":
      return remove();
    case "read":
      return read();
    case "update":
      return update();
    default:
      return "Invalid operation";
  }
};

function create() {
  if (!newObj || Object.keys(newObj).length === 0) {
    return;
  }

  col.insertOne(newObj).then(value => {
    res.json({ result: value });
  });
}

function remove() {
  if (!obj) {
    return;
  }

  col.deleteOne(obj).then(value => {
    res.json({ result: value });
  });
}

function read() {
  if (!obj) {
    return;
  }

  col
    .find(obj)
    .toArray()
    .then(value => {
      res.json({ result: value });
    });
}

function update() {
  if (!obj && !newObj) {
    return;
  }

  col.updateOne(obj, { $set: newObj }).then(value => {
    res.json({ result: value });
  });
}

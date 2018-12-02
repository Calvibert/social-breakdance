const objectID = require("mongodb").ObjectID;
var col;
var obj;
var newObj;

exports.dispatch = async function(collection, operation, object, newObject) {
  col = collection;
  obj = object;
  newObj = newObject;

  switch (operation) {
    case "create":
      return create();
    case "read":
      return read();
    case "update":
      return update();
    case "remove":
      return remove();
    default:
      return "Invalid operation";
  }
};

function create() {
  if (!newObj || Object.keys(newObj).length === 0) {
    return;
  }

  col.insertOne(newObj).then(value => {
    return value;
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
      return value;
    });
}

function update() {
  if (!obj && !newObj) {
    return;
  }

  col.updateOne(obj, { $set: newObj }).then(value => {
    return value;
  });
}

function remove() {
  if (!obj) {
    return;
  }

  col.deleteOne(obj).then(value => {
    return value;
  });
}

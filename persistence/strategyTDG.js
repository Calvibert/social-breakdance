const objectID = require("mongodb").ObjectID;
var col;
var obj;
var newObj;

exports.dispatch = async function(collection, operation, object, newObject = 0) {
  console.log()
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
  if (!obj || Object.keys(obj).length === 0) {
    return "Create Error: Nothing to create";
  }

  return col.insertOne(obj);
}

function read() {
  if (!obj) {
    return "Read Error: Nothing to read";
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
    return "Update Error: Not enough information.";
  }

  col.updateOne(obj, { $set: newObj }).then(value => {
    return value;
  });
}

function remove() {
  if (!obj) {
    return;
  }

  return col.deleteOne(obj);
}

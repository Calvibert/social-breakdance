const objectID = require("mongodb").ObjectID;
var col;
var obj;
var newObj;
var res;

exports.dispatch = async function(request, response, collection, operation) {
  col = collection;
  obj = { _id: objectID(request.params.objId) };
  newObj = request.body;
  res = response;

  switch (operation) {
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
  if (!newObj) {
    console.log("Error creating");
    return;
  }

  if (Object.keys(newObj).length === 0) {
    console.log("Nothing to create");
    return;
  }

  col.insertOne(newObj).then(value => {
    res.json({ result: value });
  });
}

function remove() {
  if (!obj) {
    console.log("Error removing");
    return;
  }

  col.deleteOne(obj).then(value => {
    res.json({ result: value });
  });
}

function read() {
  if (!obj) {
    console.log("Error reading");
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
    console.log("Error updating");
    return;
  }

  col.updateOne(obj, { $set: newObj }).then(value => {
    res.json({ result: value });
  });
}

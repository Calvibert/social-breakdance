const objectID = require("mongodb").ObjectID;
var col;
var obj;
var newObj;
var res;

exports.dispatch = async function(request, response, collection, operation) {
  col = collection;
  obj = { _id: objectID(request.params.objId) };
  // newObj = request.params.newObj;
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
  if (!obj) {
    return;
  }
  return col.insert(obj);
}

function remove() {
  if (!obj) {
    return;
  }
  return col.deleteOne(obj);
}

function read() {
  if (!obj) {
    console.log("error reading");
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
  return col.updateOne(obj, { $set: newObj });
}

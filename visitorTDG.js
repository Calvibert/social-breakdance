var col;
var obj;
var newObj;
var res;

exports.dispatch = async function(response, collection, operation, object = 0, newObject = 0) {
  col = collection;
  obj = object;
  newObj = newObject;
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
    console.log('error');
    return;
  }

  col
    .find(obj)
    .toArray()
    .then((value) => {
      res.json({result: value})
    });
}

function update() {
  if (!obj && !newObj) {
    return;
  }
  return col.updateOne(obj, { $set: newObj });
}

var col;
var obj;
var newObj;

exports.dispatch = function(operation, collection, object = 0, newObject = 0) {
    col = collection;
    obj = object;
    newObj = newObject;

    switch(operation) {
        case 'add': return add();
        case 'remove': return remove();
        case 'read': return read();
        case 'update': return update();
        default: return 'Invalid operation';
    }
};

function add() {
    if (!obj) return;
    return col.insert(object);
}

function remove() {
    if (!obj) return;
    return col.deleteOne(obj);
}

function read() {
    if (!obj) return;
    col.find(obj).toArray().then((value) => {
        return value;
    });
}

function update() {
    if (!obj && !newObj) return;
    return col.updateOne(obj, {$set: newObj});
}

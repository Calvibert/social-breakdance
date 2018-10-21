var col;
var obj;

exports.dispatch = function(operation, collection, object = 0) {
    col = collection;
    obj = object;

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
    return 'Removed item';
}

function read() {
    if (!obj) return;
    col.find(obj).toArray().then((value) => {
        return value;
    });
}

function update() {
    return 'Updated item';
}

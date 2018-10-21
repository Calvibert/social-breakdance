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

    return 'Added item';
}

function remove() {
    return 'Removed item';
}

function read() {
    return 'Read item';
}

function update() {
    return 'Updated item';
}

const crypto = require('crypto');

function hash(key) {

}

function genSalt() {
    var buf = crypto.randomBytes(256);
    return buf.toString('base64');
}
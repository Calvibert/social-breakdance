const TDG = require("../persistence/helperTDG");
var exports = (module.exports = {});

exports.makePost(post) = function() {
    TDG.add(post);
}
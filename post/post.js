const TDG = require("../persistence/factoryTDG");
var exports = (module.exports = {});

exports.makePost(post) = function() {
    TDG.add(post);
}
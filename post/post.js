const factoryTDG = require("../persistence/factoryTDG");
var exports = (module.exports = {});

exports.makePost = function(post) {
    const tdg = factoryTDG.factory();
    var returnPost = tdg.connect("post", "create", post);
    return returnPost;
}
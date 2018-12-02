const factoryTDG = require("../persistence/factoryTDG");
var exports = (module.exports = {});

exports.makePost = function(post) {
  const tdg = factoryTDG.factory();
  tdg.operate("post", "create", post, result => {
    return result;
  });
};

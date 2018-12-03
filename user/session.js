var exports = (module.exports = {});

exports.startSession = function() {

}

exports.getSession = function(sessionId) {
    
}

function createSessionId() {
  var id = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++) {
    id.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }
    
  return id.join("");
}
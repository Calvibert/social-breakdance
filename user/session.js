var exports = (module.exports = {});

exports.startSession = function() {

}

exports.getSession = function(sessionId) {

}

function createSessionId() {
  var id = [];
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++) {
    id.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
    
  return id.join("");
}
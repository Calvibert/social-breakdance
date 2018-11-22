function dropCookie(name, content) {
  var str = name + "=" + content;
  document.cookie(str);
}

function checkSession() {
  if (document.cookie.indexOf("user=") >= 0) {
    window.location = "/";
  }
}

export default { dropCookie, checkSession };

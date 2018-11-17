function search(uri, cb) {
  return fetch(uri, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function post(uri, data) {
  var url = uri;
  var params = "content=" + data;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(params);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;

  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, post };
export default Client;

class Request {
  postData(url = ``, data = {}) {
    var d = {};
    d.push({
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    return fetch(url, d).then(response => {
        console.log(response);
        response.json();
    });
  }
}

export default Request;

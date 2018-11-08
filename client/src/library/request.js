function postData(url, data) {
  var d = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  };

  return fetch(url, d).then(response => {
    console.log("response:");
    console.log(response);
    response.json();
  });
}

const Request = { postData };
export default Request;

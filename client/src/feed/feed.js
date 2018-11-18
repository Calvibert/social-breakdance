import React, { Component } from "react";
import Publish from "./publish";
import Post from "./post";
import "./style/feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);

    if (document.cookie.indexOf("user=") < 0) {
      window.location = "/login/";
    }
  }

  render() {
    return (
      <div className="feed__background">
        <div className="feed__container">
          <Publish />
          <Post />
        </div>
      </div>
    );
  }
}

export default Feed;

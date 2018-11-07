import React, { Component } from "react";
import Publish from "./publish";
import Post from "./post";
import "./style/feed.css";

class Feed extends Component {
  render() {
    return (
      <div class="feed__background">
        <div class="feed__container">
          <Publish />
          <Post />
        </div>
      </div>
    );
  }
}

export default Feed;

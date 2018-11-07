import React, { Component } from "react";
import "./style/feed.css";

class Post extends Component {
  render() {
    return (
      <div class="post__container">
        <div class="post__content">
          <div class="post__title">
            <h1>Hello world</h1>
          </div>
          <div class="post__content">
            <h2>This is content</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

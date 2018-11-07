import React, { Component } from "react";
import "./style/feed.css";
import Client from "../client";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = [];

    this.state.title = Client.search();
  }

  render() {
    return (
      <div className="post__container">
        <div className="post__content">
          <h1 className="post__post-title">{this.state.title}</h1>
          <h2 className="post__post-content">This is content</h2>
        </div>
      </div>
    );
  }
}

export default Post;
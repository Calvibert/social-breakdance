import React, { Component } from "react";
import "./style/feed.css";
import Client from "../client";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = [];

    Client.search(`/api/post/read/5bcbc5bfdb02989250e06555/`, msg => {
      this.setState({
        title: msg.result[0].title,
        body: msg.result[0].content
      })
    });
  }

  parsePosts() {

  }

  render() {
    return (
      <div className="post__container">
        <div className="post__content">
          <h1 className="post__post-title">{this.state.title}</h1>
          <h2 className="post__post-content">{this.state.body}</h2>
        </div>
      </div>
    );
  }
}

export default Post;

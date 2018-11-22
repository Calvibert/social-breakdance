import React, { Component } from "react";
import Publish from "./publish";
import Post from "./post";
import "./style/feed.css";

export default class Feed extends Component {
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

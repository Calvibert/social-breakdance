import React, { Component } from "react";
import Publish from "./publish";
import Post from "./post";
import Session from "../session/session";
import "./style/feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);

    Session.checkSession();
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

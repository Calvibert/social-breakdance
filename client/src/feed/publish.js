import React, { Component } from "react";
import "./style/feed.css";
import Request from "../library/request";

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    const url = "/api/post/create";
    Request.postData(url, {content: this.state.content});
  }

  render() {
    return (
      <div className="publish__container">
        <div className="publish__content">
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="publish__textarea"
              onChange={this.handleChange}
            />
            <input className="publish__submit" type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;

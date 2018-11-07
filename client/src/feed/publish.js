import React, { Component } from "react";
import "./style/feed.css";

class Publish extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="publish__container">
        <div className="publish__content">
          <form onSubmit={this.handleSubmit}>
          <textarea className="publish__textarea" />
          <input className="publish__submit" type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;

import React, { Component } from "react";
import Client from "../client";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const url = "/api/login/";
    const data = { email: this.state.email, password: this.state.password };

    Client.post(url, data);
    document.cookie = "user=samuel dufresne";
    window.location = "/";
  }

  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" onChange={this.handlePasswordChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

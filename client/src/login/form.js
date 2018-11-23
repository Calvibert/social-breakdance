import React, { Component } from "react";
import Client from "../client";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, option = 0) {
    switch (option) {
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
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
      <div className="login-form__container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={e => this.handleChange(e, "email")}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={e => this.handleChange(e, "password")}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

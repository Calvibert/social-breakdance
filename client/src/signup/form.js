import React, { Component } from "react";

export default class Form extends Component {
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
            <input
              type="password"
              name="password"
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

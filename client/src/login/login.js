import React, { Component } from "react";
import Form from "./form";
import Session from "../session/session";
import "./style/login.css";

export default class Login extends Component {
  componentDidMount() {
    Session.checkSession();
  }

  render() {
    return (
      <div className="login__background">
        <div className="login__container">
          <Form />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Form from "./form";
import "./style/style.css";

class Login extends Component {
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

export default Login;
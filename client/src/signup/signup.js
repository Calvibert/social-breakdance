import React, { Component } from "react";
import Form from "./form";
import "./style/signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup__background">
        <div className="signup__container">
          <h1>Inscrivez vous à Bleuet</h1>
          <Form />
        </div>
      </div>
    );
  }
}

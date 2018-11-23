import React, { Component } from "react";
import Form from "./form";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup__background">
        <div className="signup__container">
          <Form />
        </div>
      </div>
    );
  }
}

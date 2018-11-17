import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form__container">
        <form>
          <label>
            Email: 
            <input type="text" name="email" />
          </label><br/>
          <label>
            Password: 
            <input type="password" name="password" />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
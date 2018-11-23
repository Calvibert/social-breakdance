import React, { Component } from "react";
import Client from "../client";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      birthdateDay: "",
      birthdateMonth: "",
      birthdateYear: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      country: "",
      zipCode: "",
      password: "",
      passwordConfirm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, option = 0) {
    switch (option) {
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "birthdateDay":
        this.setState({ birthdateDay: event.target.value });
        break;
      case "birthdateMonth":
        this.setState({ birthdateMonth: event.target.value });
        break;
      case "birthdateYear":
        this.setState({ birthdateYear: event.target.value });
        break;
      case "addressOne":
        this.setState({ addressOne: event.target.value });
        break;
      case "addressTwo":
        this.setState({ addressTwo: event.target.value });
        break;
      case "city":
        this.setState({ city: event.target.value });
        break;
      case "country":
        this.setState({ country: event.target.value });
        break;
      case "zipCode":
        this.setState({ zipCode: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      case "passwordConfirm":
        this.setState({ passwordConfirm: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    const url = "/api/signup/";
    const data = this.state;

    Client.post(url, data);
    window.location = "/";
  }

  render() {
    return (
      <div className="signup-form__container">
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
            Nom complet:
            <input
              type="text"
              name="name"
              onChange={e => this.handleChange(e, "name")}
            />
          </label>
          <br />
          <label>
            Date de naissance:
            <input
              type="text"
              name="birthdate-day"
              onChange={e => this.handleChange(e, "birthdateDay")}
            />
            <select
              onChange={e => this.handleChange(e, "birthdateDonth")}
            >
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value="Juillet">Juillet</option>
              <option value="Août">Août</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
            </select>
            <input
              type="text"
              name="birthdate-year"
              onChange={e => this.handleChange(e, "birthdateYear")}
            />
          </label>
          <br />
          <label>
            Addresse:
            <input
              type="text"
              name="addressOne"
              onChange={e => this.handleChange(e, "addressOne")}
            />
            <input
              type="text"
              name="addressTwo"
              onChange={e => this.handleChange(e, "addressTwo")}
            />
          </label>
          <br />
          <label>
            Ville:
            <input
              type="text"
              name="city"
              onChange={e => this.handleChange(e, "city")}
            />
          </label>
          <label>
            Pays:
            <input
              type="text"
              name="country"
              onChange={e => this.handleChange(e, "country")}
            />
          </label>
          <label>
            Code postal:
            <input
              type="text"
              name="zipCode"
              onChange={e => this.handleChange(e, "zipCode")}
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="password"
              name="password"
              onChange={e => this.handleChange(e, "password")}
            />
          </label>
          <br />
          <label>
            Confirmation du mot de passe:
            <input
              type="password"
              name="confirm-password"
              onChange={e => this.handleChange(e, "confirm-password")}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

import "./LoginForm.css";
import React, { Component } from "react";
import axios from "axios";

const apiUrl = `http://localhost:9000`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    const res = await axios.get(apiUrl + "/login", { email, password });
    alert("Found user !" + res.data.user);

    // store res in localstorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  render() {
    return (
      <div className="login-container">
        <img className="image" src="./laptop-new.jpg" alt="Hands on laptop" />
        <p>Les champs marqués d'une astérisque (*) sont obligatoires</p>
        <form onSubmit={this.handleSubmit} className="login_form">
          <div className="login_inputs">
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Adresse e-mail*"
              required
              className="login_input"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Mot de passe*"
              required
              className="login_input"
            />
          </div>
          <input className="btn" type="submit" value="Se connecter" />
        </form>
      </div>
    );
  }
}

export default LoginForm;

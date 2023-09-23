import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange =
      this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirmPasswordChange(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validate password and confirm password
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    // Add your code to create an account here
    // You can use the this.state.email and this.state.password values

    alert("Account created successfully!");
  }

  render() {
    return (
      <div className="login-container">
        <img className="image" src="./laptop-new.jpg" alt="Hands on laptop" />
        <form onSubmit={this.handleSubmit} className="login_form">
          <div className="login_inputs">
            <input
              type="text"
              id="surname"
              name="surname"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Nom"
              required
              className="login_input"
            />
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Prénom"
              required
              className="login_input"
            />
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Adresse e-mail"
              required
              className="login_input"
            />
            <input
              type="number"
              id="number"
              name="number"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Numéro"
              required
              className="login_input"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Mot de passe"
              required
              className="login_input"
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordChange}
              placeholder="Confirmer le mot de passe"
              required
              className="login_input"
            />
          </div>
          <Link to="/connection" className="text-btn">
            Déjà un compte
          </Link>
          <input className="btn" type="submit" value="Créer un compte" />
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;

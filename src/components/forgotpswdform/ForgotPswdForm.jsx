import "./ForgotPswdForm.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = `http://localhost:9000`;

class ForgotPswdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      number: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = this.state.email;
    const number = this.state.number;
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
              type="number"
              id="number"
              name="number"
              value={this.state.password}
              onChange={this.handleNumberChange}
              placeholder="Numéro de téléphone*"
              required
              className="login_input"
            />
          </div>
          <Link to="/home" className="text-btn">
            Retourner à l'accueil
          </Link>
          <input className="btn" type="submit" value="Recevoir le lien" />
        </form>
      </div>
    );
  }
}

export default ForgotPswdForm;

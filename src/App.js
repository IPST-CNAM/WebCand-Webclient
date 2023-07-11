import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            users: []
        };
    }

    callAPI() {
        fetch(`http://${process.env.REACT_APP_BACKEND_URL || 'localhost'}:9000/testAPI`)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    getUsers() {
        fetch(`http://${process.env.REACT_APP_BACKEND_URL || 'localhost'}:9000/users`)
            .then(res => res.json())
            .then(res => this.setState({ users: res }))
            .catch(err => console.log(err));
        console.log(`${process.env.REACT_APP_BACKEND_URL}`);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                {/* This button gets all users and displays them in a list that is reloaded every
                time you press the button */}
                <button onClick={() => this.getUsers()}>Get users</button>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.first_name} e-mail : {user.email}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form action="">
          <label htmlFor="signup-email">Email
            <input
              id="signup-email"
              type="text"
              onChange={this.handleInput('email')}
            />
          </label>
          <label htmlFor="signup-password">Password
            <input
              id="signup-password"
              type="password"
              onChange={this.handleInput('password')}
            />
          </label>
          <h3>Don’t have an account? <Link to="/login">Log in</Link>.</h3>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ' ',
      password: ' ',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form action="">
          <label htmlFor="login-email">Email
            <input
              id="login-email"
              type="text"
              onChange={this.handleChange('email')}
            />
          </label>
          <label htmlFor="login-password">Password
            <input
              id="login-password"
              type="text"
              onChange={this.handleChange('password')}
            />
          </label>
          <h3>Don’t have an account? <Link to='/signup'>Sign up</Link>.</h3>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

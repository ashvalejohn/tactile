import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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
      <Modal isOpen={true} className="modal" overlayClassName="overlay">
        <form className="auth-form" action="">
          <h2>Log In</h2>
          <fieldset className="auth-form__fieldset">
            <label className="auth-form__label" htmlFor="login-email">Email
              <input
                id="login-email"
                type="text"
                onChange={this.handleChange('email')}
              />
            </label>
            <label className="auth-form__label" htmlFor="login-password">Password
              <input
                id="login-password"
                type="password"
                onChange={this.handleChange('password')}
              />
            </label>
          </fieldset>
          <div className="modal-button">
            <h3>Don’t have an account? <Link to='/signup'>Sign up</Link>.</h3>
            <button onClick={this.handleSubmit}>Log In</button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default Login;

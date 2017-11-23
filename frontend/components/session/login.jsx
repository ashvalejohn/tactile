import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ' ',
      password: ' ',
      showModal: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.shiftModalFocus = this.shiftModalFocus.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.login(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'demo@email.com', password: 'password' };
    this.props.login(demoUser).then(() => this.props.history.push("/cart"));
  }

  handleCloseModal() {
    this.props.history.push("/");
  }


  shiftModalFocus() {
    document.getElementById('login-email').focus();
  }

  render() {
    return (
      <Modal isOpen={this.state.showModal} className="modal" overlayClassName="overlay" onRequestClose={this.handleCloseModal} onAfterOpen={this.shiftModalFocus} ariaHideApp={this.state.showModal}>
        <form className="auth-form" action="">
          <h2>Log In</h2>
          <p>You need to log in to see your cart.</p>
          <fieldset className="auth-form__fieldset">
            <label className="auth-form__label" htmlFor="login-email">Email
              <input
                id="login-email"
                type="text"
                onChange={this.handleChange('email')}
                required
              />
            </label>
            <label className="auth-form__label" htmlFor="login-password">Password
              <input
                id="login-password"
                type="password"
                onChange={this.handleChange('password')}
                minLength="6"
                required
              />
            </label>
          </fieldset>
          <ul className="auth-form__errors">
            {this.props.errors ? this.props.errors.map((error, idx) =>
              (<li key={idx}>{error}</li>))
              :
              (null)
            }
          </ul>
          <div className="modal-button">
            <h3>Don’t have an account? <Link to='/signup'>Sign up</Link>.</h3>
            <div>
              <button onClick={this.handleSubmit}>Log In</button>
              <button onClick={this.handleDemo}>Demo Log In</button>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default Login;

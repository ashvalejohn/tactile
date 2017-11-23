import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showModal: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(this.state);
  }

  handleCloseModal() {
    this.props.history.push("/");
  }

  shiftModalFocus() {
    document.getElementById('signup-email').focus();
  }

  render() {
    return (
      <Modal isOpen={this.state.showModal} className="modal" overlayClassName="overlay" onRequestClose={this.handleCloseModal} onAfterOpen={this.shiftModalFocus} ariaHideApp={this.state.showModal}>
        <form className="auth-form" action="">
          <h2>Sign Up</h2>
          <p>Sign up to create a cart</p>
          <fieldset className="auth-form__fieldset">
            <label className="auth-form__label" htmlFor="signup-email">Email
              <input
                id="signup-email"
                type="text"
                onChange={this.handleChange('email')}
                required
              />
            </label>
            <label className="auth-form__label" htmlFor="signup-password">Password
              <input
                id="signup-password"
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
            <h3>Don’t have an account? <Link to="/login">Log in</Link>.</h3>
            <div>
              <button onClick={this.handleSubmit}>Sign Up</button>
              <button onClick={this.handleDemo}>Demo Log In</button>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default Signup;

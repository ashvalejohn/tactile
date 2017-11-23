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
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push("/cart"));;
  }

  handleCloseModal() {
    this.props.history.push("/");
  }

  render() {
    return (
      <Modal isOpen={this.state.showModal} className="modal" overlayClassName="overlay" onRequestClose={this.handleCloseModal} shouldCloseOnOverlayClick={this.state.showModal}>
        <form className="auth-form" action="">
          <h2>Sign Up</h2>
          <ul>
            {this.props.errors ? this.props.errors.map((error, idx) =>
              (<li key={idx}>{error}</li>))
              :
              (null)
            }
          </ul>
          <fieldset className="auth-form__fieldset">
            <label className="auth-form__label" htmlFor="signup-email">Email
              <input
                id="signup-email"
                type="text"
                onChange={this.handleChange('email')}
              />
            </label>
            <label className="auth-form__label" htmlFor="signup-password">Password
              <input
                id="signup-password"
                type="password"
                onChange={this.handleChange('password')}
              />
            </label>
          </fieldset>
          <div className="modal-button">
            <h3>Don’t have an account? <Link to="/login">Log in</Link>.</h3>
            <button onClick={this.handleSubmit}>Sign Up</button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default Signup;

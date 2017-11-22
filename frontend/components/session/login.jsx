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
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form action="">
          <label htmlFor="">Email
            <input type="text"/>
          </label>
          <label htmlFor="">Password
            <input type="text"/>
          </label>
          <h3>Don’t have an account? <Link to=''>Sign up</Link></h3>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

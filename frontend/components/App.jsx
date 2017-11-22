import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Header from './header';

const app = () => (
  <div>
    <Header />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);


export default app;

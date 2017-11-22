import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login_container';
import Header from './header';

const app = () => (
  <div>
    <Header />
    <Route path="/login" component={LoginContainer} />
  </div>
);


export default app;

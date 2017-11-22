import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login_container';

const app = () => (
  <div>
    <h1>If you’re seeing this, the app component has rendered.</h1>
    <img alt="success-gif" src="https://media.giphy.com/media/fBZXu9v0qjjTq/giphy.gif" />
    <Route path="/login" component={LoginContainer} />
  </div>
);


export default app;

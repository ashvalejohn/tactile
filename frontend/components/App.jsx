import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../util/route_util';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import HeaderContainer from './header_container';
import CartContainer from './cart/cart_container';


const App = () => (
  <div>
    <Route path="/" component={HeaderContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <ProtectedRoute path="/cart" component={CartContainer} />
  </div>
);


export default App;

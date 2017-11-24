import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import CartContainer from './cart/cart_container';
import HeaderContainer from './header_container';
import LoginContainer from './session/login_container';
import ImageIndexContainer from './images/image_index_container';
import SignupContainer from './session/signup_container';


const App = () => (
  <div>
    <Route path="/" component={HeaderContainer} />
    <Route path="/" component={ImageIndexContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute path="/cart" component={CartContainer} />
  </div>
);


export default App;

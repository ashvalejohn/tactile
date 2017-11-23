import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const ProtectedRoute = ({component: Component, path, loggedIn}) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Component /> : <Redirect to="/login" />
    )}
  />
);

export default withRouter(connect(mapStateToProps, null)(ProtectedRoute));

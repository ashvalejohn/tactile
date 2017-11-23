import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const login = user => dispatch => (
  APIUtil.login(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))), error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(logoutCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))), error => dispatch(receiveErrors(error.responseJSON)))
);

export const clearErrors = () => dispatch => (
  dispatch(clearSessionErrors())
);
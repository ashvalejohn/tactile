import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup, login, clearErrors } from '../../actions/session_action';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  signup: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));

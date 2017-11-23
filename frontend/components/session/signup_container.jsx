import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup } from '../../actions/session_action';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));

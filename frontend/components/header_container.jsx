import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchImages } from '../actions/image_actions';
import { logout } from '../actions/session_action';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchImages: () => dispatch(fetchImages()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

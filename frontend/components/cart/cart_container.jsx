import { connect } from 'react-redux';
import { fetchCartItems } from '../../actions/cart_item_actions';
import CartIndex from './cart_index';

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => (dispatch(fetchCartItems())),
});

export default connect(null, mapDispatchToProps)(CartIndex);

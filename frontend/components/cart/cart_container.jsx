import { connect } from 'react-redux';
import { fetchCartItems } from '../../actions/cart_item_actions';
import CartIndex from './cart_index';

const mapStateToProps = state => ({
  cartItems: state.entities.cartItems,
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => (dispatch(fetchCartItems())),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);

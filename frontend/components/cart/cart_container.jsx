import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItemsForCart, removeItemFromCart } from '../../actions/cart_item_actions';
import CartIndex from './cart_index';

const mapStateToProps = state => ({
  cartItems: state.entities.cartItems,
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => (dispatch(fetchItemsForCart())),
  removeItemFromCart: itemId => dispatch(removeItemFromCart(itemId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIndex));

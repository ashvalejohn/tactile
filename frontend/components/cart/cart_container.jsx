import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItemsForCart, removeItemFromCart, updateItemInCart } from '../../actions/cart_item_actions';
import CartIndex from './cart_index';

const mapStateToProps = state => ({
  cartItems: state.entities.cartItems,
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => (dispatch(fetchItemsForCart())),
  removeCartItem: itemId => dispatch(removeItemFromCart(itemId)),
  updateCartItem: item => dispatch(updateItemInCart(item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIndex));

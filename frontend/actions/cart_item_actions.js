import { getCartItems, addCartItem } from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';

const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const fetchCartItems = () => dispatch => (
  getCartItems().then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

export const addItemToCart = item => dispatch => (
  addCartItem(item).then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

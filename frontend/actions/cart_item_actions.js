import getCartItems from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';

const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const fetchCartItems = () => dispatch => (
  getCartItems().then((cartItems) => {
    return dispatch(receiveCartItems(cartItems));
  })
);

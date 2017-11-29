import { getCartItems, addCartItem, removeCartItem } from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const fetchItemsForCart = () => dispatch => (
  getCartItems().then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

export const addItemToCart = item => dispatch => (
  addCartItem(item).then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

export const removeItemFromCart = id => dispatch => (
  removeCartItem(id).then(() => dispatch(fetchItemsForCart()))
);

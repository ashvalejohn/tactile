import { getCartItems, addCartItem, removeCartItem, updateCartItem } from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ERRORS = 'RECEIVE_CART_ERRORS';

const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

const receiveErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const fetchItemsForCart = () => dispatch => (
  getCartItems().then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

export const addItemToCart = item => dispatch => (
  addCartItem(item).then(
    cartItems => (
      dispatch(receiveCartItems(cartItems))),
    errors => dispatch(receiveErrors(errors.responseJSON)),
  )
);

export const removeItemFromCart = id => dispatch => (
  removeCartItem(id).then(() => dispatch(fetchItemsForCart()))
);

export const updateItemInCart = item => dispatch => (
  updateCartItem(item).then(() => dispatch(fetchItemsForCart()))
);

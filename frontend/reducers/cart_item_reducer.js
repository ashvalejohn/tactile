import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions';

const cartItemReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case REMOVE_CART_ITEM:
      return action;
    default:
      return state;
  }
};

export default cartItemReducer;

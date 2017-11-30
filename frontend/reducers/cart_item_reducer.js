import { RECEIVE_CART_ITEMS } from '../actions/cart_item_actions';

const cartItemReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    default:
      return state;
  }
};

export default cartItemReducer;

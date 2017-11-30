import { RECEIVE_CART_ERRORS } from '../actions/cart_item_actions';

const cartErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default cartErrorsReducer;

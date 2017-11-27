import merge from 'lodash/merge';
import { RECEIVE_ITEM, CLEAR_ITEM } from '../actions/item_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM:
      return action.item;
    case CLEAR_ITEM:
      return null;
    default:
      return state;
  }
};

export default itemReducer;

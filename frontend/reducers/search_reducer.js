import { RECEIVE_SEARCH_TERM } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_TERM:
      return action.term;
    default:
      return state;
  }
};

export default SearchReducer;

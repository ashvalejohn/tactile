import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const nullUser = {
  currentUser: null,
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);  Object.freeze(state);
  const currentUser = { currentUser: action.currentUser };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;

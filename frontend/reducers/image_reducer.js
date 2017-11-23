import merge from 'lodash/merge';
import { RECEIVE_IMAGE } from '../actions/image_actions';

const ImageReducer = (state = {}, action) => {
  console.log(action);
  Object.freeze(state);
  const image = { image: action.image };
  switch (action.type) {
    case RECEIVE_IMAGE:
      return merge({}, { image });
    default:
      return state;
  }
};

export default ImageReducer;

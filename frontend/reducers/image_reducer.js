import { RECEIVE_IMAGES } from '../actions/image_actions';

const ImageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export default ImageReducer;

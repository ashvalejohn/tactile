import { RECEIVE_IMAGES } from '../actions/image_actions';

const ImageReducer = (state = {}, action) => {
  Object.freeze(state);
  const images = {};
  switch (action.type) {
    case RECEIVE_IMAGES:
      action.images.forEach((image) => {
        images[image.id] = image;
      });
      return images;
    default:
      return state;
  }
};

export default ImageReducer;

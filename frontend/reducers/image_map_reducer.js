import { RECEIVE_IMAGE_MAPS } from '../actions/image_actions';

const imageMapReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGE_MAPS:
      return action.imageMaps;
    default:
      return state;
  }
};

export default imageMapReducer;

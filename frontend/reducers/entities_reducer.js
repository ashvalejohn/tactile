import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import imageMapReducer from './image_map_reducer';


const entitiesReducer = combineReducers({
  images: imageReducer,
  imageMaps: imageMapReducer,
});

export default entitiesReducer;

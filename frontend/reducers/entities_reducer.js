import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import itemReducer from './item_reducer';


const entitiesReducer = combineReducers({
  images: imageReducer,
  item: itemReducer,
});

export default entitiesReducer;

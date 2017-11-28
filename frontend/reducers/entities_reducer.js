import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import itemReducer from './item_reducer';
import cartItemReducer from './cart_item_reducer';

const entitiesReducer = combineReducers({
  images: imageReducer,
  item: itemReducer,
  cartItems: cartItemReducer,
});

export default entitiesReducer;

import { combineReducers } from 'redux';
import imageReducer from './image_reducer';
import itemReducer from './item_reducer';
import cartItemReducer from './cart_item_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  images: imageReducer,
  item: itemReducer,
  cartItems: cartItemReducer,
  search: searchReducer,
});

export default entitiesReducer;

import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import imageReducer from './image_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  images: imageReducer,
});

export default rootReducer;

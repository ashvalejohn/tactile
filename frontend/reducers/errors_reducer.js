import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import cartErrorsReducer from './cart_item_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  cartErrors: cartErrorsReducer,
});

export default errorsReducer;

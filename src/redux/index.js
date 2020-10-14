import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import cart from './cart/reducer';

export default combineReducers({
  user: userReducer,
  cart,
});

import { combineReducers } from 'redux';

import userReducer from './user/userReducer.js';
import cartReducer from './cart/cartReducer.js';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});

import { combineReducers } from 'redux';

import userReducer from './user/userReducer.js';

export default combineReducers({
  user: userReducer
});

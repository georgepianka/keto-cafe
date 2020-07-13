import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer.js';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(...middleware)
  )
);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(...middleware)
  )
);

export default store;

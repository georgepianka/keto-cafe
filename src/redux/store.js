import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger, thunk];

export const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);

export default { store, persistStore };

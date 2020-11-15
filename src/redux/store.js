import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './index';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger, thunk);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

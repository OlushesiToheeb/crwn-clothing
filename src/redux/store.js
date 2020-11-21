import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// imports sagas
import rootSaga from './root.saga';

import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger, sagaMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// this is used to run individual sagas
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

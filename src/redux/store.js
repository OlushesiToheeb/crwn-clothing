import { createStore, applyMiddlewear } from 'redux';

import logger from 'redux-logger';

import rootReducer from './index';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddlewear(...middlewares));

export default store;

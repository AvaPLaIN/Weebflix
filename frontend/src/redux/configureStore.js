//! IMPORTS
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { watcherSaga } from './sagas/rootSaga';
import createSagaMiddleware from '@redux-saga/core';

//! IMPORT REDUCERS
import userReducer from './ducks/user';
import animesReducer from './ducks/animes';
import moviesReducer from './ducks/movies';

//! MIDDLEWARE
const loggerMiddleware = createLogger({});
let middleware = [];
if (process.env.NODE_ENV !== 'production')
  middleware = [...middleware, loggerMiddleware];

const sagaMiddleware = createSagaMiddleware();
middleware = [...middleware, sagaMiddleware];

//! STATES
const reducer = combineReducers({
  user: userReducer,
  animes: animesReducer,
  movies: moviesReducer,
});

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

//! EXPORT
export default store;

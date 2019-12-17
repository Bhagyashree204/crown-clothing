//whenever the action gets triggered if it is directed to middleware it will catch and help to log those info.. redux-logger is such a middle ware component which helps to log the curent state,updated state,actions

import {createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
const middlewares=[logger];
const store=createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
//whenever the action gets triggered if it is directed to middleware it will catch and help to log those info.. redux-logger is such a middle ware component which helps to log the curent state,updated state,actions

import {createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
const middlewares=[logger];
 export const store=createStore(rootReducer,applyMiddleware(...middlewares));
export const  persistor = persistStore(store);
export default {store, persistor};

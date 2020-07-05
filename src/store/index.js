import {createStore, applyMiddleware, compose} from 'redux'
import promisse from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import history from '../main/history'
import { routerMiddleware } from 'react-router-redux';

import {persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {Reducers} from "../reducers"

const persistConfig = {
  key:'supermarket',
  storage,
  blacklist: 'form/registerProduct'
}
const persistedReducer = persistReducer(persistConfig, Reducers)
//const store = createStore(persistedReducer)

const middlewareRouter = routerMiddleware(history)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
? window.__REDUX_DEVTOOLS_EXTENSION__()
: f => f

const middleware = applyMiddleware(thunk, multi, promisse, middlewareRouter)

const Store = createStore(persistedReducer,compose(middleware, devTools))
const persistor = persistStore(Store)
export {Store, persistor}
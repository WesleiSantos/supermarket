import {createStore, applyMiddleware} from 'redux'
import {Reducers} from '../reducers'
import promisse from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import history from '../main/history'
import { routerMiddleware } from 'react-router-redux';

const middlewareRouter = routerMiddleware(history)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = applyMiddleware(thunk,multi,promisse, middlewareRouter)(createStore)(Reducers, devTools)
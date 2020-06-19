import {productReducer} from './productReducer'
import {loginReducer} from './loginReducer'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux';

export const Reducers = combineReducers({
    product: productReducer,
    login: loginReducer,
    form: formReducer,
    toastr: toastrReducer,
    routing: routerReducer
})


import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
//import "core-js"
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import {Store, persistor} from './store'
import Routes from "../src/main/Routes";
import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import 'modules/bootstrap';

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes/>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

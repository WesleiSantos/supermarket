import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Users from './main/Users'
import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import 'modules/bootstrap';
import { Provider } from 'react-redux';
import { Store, persistor } from './store'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router } from 'react-router'
import history from './main/history'


ReactDOM.render(
  <Provider store={Store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router history={history} >
      <Users/>
    </Router>
  </PersistGate>
  </Provider>,
  document.getElementById('user')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
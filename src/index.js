import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {Store} from './store'
import Routes from "../src/main/Routes";

ReactDOM.render(
  <Provider store={Store}>
      <Routes/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

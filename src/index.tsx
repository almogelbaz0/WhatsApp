import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './Store/store';

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  root
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

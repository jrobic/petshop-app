import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadAnimals } from './actions/animalActions';


import './styles/styles.css'; // webpack can import css file too!
// Vendors
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min.js';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadAnimals());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);


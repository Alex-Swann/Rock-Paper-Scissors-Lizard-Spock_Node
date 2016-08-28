// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import style from './sass/css/main.scss';

import Layout from './containers/Layout.jsx';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
    </Route>
  </Router>,
app);

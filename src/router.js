import React from 'react'
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import NavbarInstance from './components/NavbarInstance';
import Home from './components/Home';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route component={NavbarInstance} />
      <Route path="/" component={Home} />
      <Route path="photos" component={Home} />
    </Route>
  </Router>
)

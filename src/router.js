import React from 'react'
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/main-layout';
import Home from './components/home';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="photos" component={Home} />
    </Route>
  </Router>
)

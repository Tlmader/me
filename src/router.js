import React from 'react'
import { Router, Route, browserHistory } from 'react-router';

import NavbarInstance from './components/NavbarInstance';
import MainLayout from './views/MainLayout';
import Home from './views/Home';
import Projects from './views/Projects';
import Photos from './views/Photos';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route component={NavbarInstance} />
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
)

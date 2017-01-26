import React from 'react'
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import NavbarInstance from './components/NavbarInstance';
import Home from './components/Home';
import Projects from './components/Projects';
import Photos from './components/Photos';

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

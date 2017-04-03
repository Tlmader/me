import React from 'react'
import { Router, Route, hashHistory } from 'react-router';

import MainLayout from './views/MainLayout';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Photos from './views/Photos';

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
)

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../screens/app';
import Start from '../screens/start';
import About from '../screens/about';

export default () => (
  <Route component={ App }>
    <IndexRoute component={ Start } />
    <Route component={ About } path="/about/" />
  </Route>
);

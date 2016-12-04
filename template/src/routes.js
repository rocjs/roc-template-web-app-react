import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';
import Start from './components/start';
{{#if_eq fetchExample true}}
import Fetching from './components/fetching';
{{/if_eq}}
{{#if_eq reduxExample true}}
import Redux from './components/redux';
{{/if_eq}}

export default () => (
  <Route component={App}>
    <IndexRoute component={Start} />
    {{#if_eq fetchExample true}}
    <Route component={Fetching} path="/fetching/" />
    {{/if_eq}}
    {{#if_eq reduxExample true}}
    <Route component={Redux} path="/redux/" />
    {{/if_eq}}
  </Route>
);

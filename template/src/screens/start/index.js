// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Clicker from '../../components/clicker';

import styles from './style.scss';

export default class Start extends Component {
  render() {
    return (
      <div className={ styles.main }>
        <div className="header">
          <h1>Roc Web App React</h1>
          <h2>Fully featured React applications</h2>
        </div>
        <div className="wrapper">
          <h4>Congratulations</h4>
          <p>
            You have set up a complete stack for building a Reactive Universal Application.
          </p>
          <p>
            <strong>Feel free to delete</strong> the generated code and components, they are only
            here for your reference.
          </p>

          <h4>Routing</h4>
          <p>
            Your <a href="https://github.com/reactjs/react-router">React Router</a> entry is set up
            at <strong>src/routes/index.js</strong>
          </p>
          <p>
            You can test the universal route changes with the included test routes using the navbar
            at the top.
          </p>

          <h4>Redux reducers</h4>
          <p>
            Your <a href="https://github.com/reactjs/redux">Redux</a> reducer exports are set up
            at <strong>src/redux/reducers.js</strong>
          </p>
          <p>
            Reducers are pure functions that define new state in your app. We have included a
            simple example.
          </p>

          <h4>Get your Redux actions on</h4>
          <p>
            We have added an example click action for you at <strong>src/redux/clicker.js</strong>
          </p>
          <p>
            Dispatch a click action by hitting the button below!
          </p>

          <Clicker />

          <h4>Get styling</h4>
          <p>
            This template includes CSS and Sass support for your convenience. Just look at the
            included components for examples on usage.
          </p>

          <h4>Powerful devtools</h4>
          <p>
            If running a development build, press ctrl+h for the redux devtools toggle.
            Hot reloading will also be enabled by default.
          </p>

          <h4>Use the Roc commandline</h4>
          For helpful information use <code>--help</code> along with your comand.
          You can see the available documentation for this package <a href="https://github.com/rocjs/roc-package-web-app-react/blob/packages/roc-package-web-app-react/docs/">here</a>.
          <h5>Start development mode</h5>
          <pre>roc dev</pre>

          <h5>Build production bundle</h5>
          <pre>roc build</pre>

          <h5>Run production bundle</h5>
          <pre>roc start</pre>

          <h4>Stack composition</h4>
          <ul>
            <li>Document headers: React Helmet ~2.3.1</li>
            <li>Views: React ~0.14.0</li>
            <li>Routing: React Router ~1.0.0 & Redux Simple Router ~0.0.8</li>
            <li>Flux: Redux ~3.0.2 & React-Redux ~4.0.0</li>
            <li>Configuration: Node config ~1.16.0</li>
          </ul>

          <h4>Learn more</h4>
          <p>
            <a href="https://github.com/rocjs/roc/tree/master/docs" alt="Docs">Roc docs @ Github</a>
          </p>
        </div>
      </div>
    );
  }
}

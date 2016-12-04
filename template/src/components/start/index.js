// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import ext from './ext.png';
import styles from './style.scss';

export default class Start extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h1>Get started</h1>
        <p>
          Open <span>src/components/start.js</span> in your favourite editor
          to make changes to this page.
        </p>
        <p><span>src/routes.js</span> maps routes to your components.</p>

        <h2>Docs</h2>
        <p>
          Run <span>roc docs</span> in your project to generate updated docs for this Roc project.
        </p>

        <h2>Learn more</h2>
        <img src={ext} className={styles.ext} alt="React & Redux extension" />
        <p>
          <a href="https://github.com/rocjs/roc/tree/master/docs#table-of-contents" alt="Docs">Documentation for Roc on Github</a>
        </p>
      </div>
    );
  }
}

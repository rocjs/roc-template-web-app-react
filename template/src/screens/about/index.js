// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from './style.scss';

export default class About extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="header">
          <h1>About</h1>
          <h2>roc-template-web-app-react</h2>
        </div>
        <div className="wrapper">
          <h4>Roc is an open source project by VG</h4>
          <p>
            It allows you to create consistent developer experiences for your teams within the node
            and npm ecosystem. One of the primary goals is to avoid boilerplate fragmentations
            across projects. You are currently in a project powered by
            the <a href="https://github.com/rocjs/roc-package-web-app-react" alt="Github.com Roc Web App React">roc-package-web-app-react</a> package.
          </p>
          <p>
            The project itself is not React-centric.
          </p>
          <h4>Contribute</h4>
          <p>
            If you use the project and have ideas (or code) that will help us improve, please
            feel free to do so at <a href="https://github.com/rocjs" alt="Github.com Roc">Github</a>.
          </p>
        </div>
      </div>
    );
  }
}

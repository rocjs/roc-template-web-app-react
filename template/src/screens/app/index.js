// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import styles from './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet
          link={[{
            rel: 'icon', href: '/favicon.png',
          }]}
        />
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}

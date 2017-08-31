// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import isoFetch from 'isomorphic-fetch';

import Clicker from '../../components/clicker';
import { repoFetchBegin, repoFetchSuccess, repoFetchFail } from '../../redux/repo';
import styles from './style.scss';

const repoApiUrl = 'http://api.github.com/repos/rocjs/roc';

function fetchRocStargazers() {
  return isoFetch(repoApiUrl)
  .then(response => response.json());
}

@provideHooks({
  // by default, fetch is run on both server and client side
  fetch: ({ dispatch }) => {
    // dispatch that fetch has started
    dispatch(repoFetchBegin(repoApiUrl));

    // this "thunk" is compatible with a redux middleware that allows async actions
    // https://www.npmjs.com/package/redux-thunk
    const fetchThunk = (thunkDispatch) => {
      fetchRocStargazers().then((json) => {
        thunkDispatch(repoFetchSuccess(repoApiUrl, json));
      }).catch((err) => {
        thunkDispatch(repoFetchFail(repoApiUrl, err));
      });
    };

    // dispatch the thunk that will later dispatch a success of failure action depending on outcome
    return dispatch(fetchThunk);
  },
})
@connect(state => ({
  stargazers: state.repo.stargazers,
}))
export default class Redux extends Component {
  static propTypes = {
    stargazers: React.PropTypes.number,
  }

  render() {
    const { stargazers } = this.props;

    return (
      <div className={styles.main}>
        <h1>Redux demo</h1>
        <p>
          Roc takes care of all boilerplate required to set up Redux. <br />
          <strong>Clicker</strong> (components/clicker/index.js) is a simple example-component that
          demonstrates how to connect your components to Redux.
        </p>

        <Clicker />

        <p>
          You can of course also do your data-fetching by dispatching a
          Redux action to do so! We have included a simple demo of this below.
        </p>
        <p>Number of stargazers (fetched using Redux): <strong>{ stargazers }</strong></p>
      </div>
    );
  }
}

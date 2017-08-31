// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function, react/no-multi-comp */
import React, { Component } from 'react';
import { provideHooks } from 'redial';
import fetch from 'isomorphic-fetch';

import styles from './style.scss';

/* functions that promise to fetch json data from GitHub API */
function fetchRocRepos() {
  return fetch('https://api.github.com/users/rocjs/repos')
  .then(response => response.json());
}

function fetchRocStargazers() {
  return fetch('https://api.github.com/repos/rocjs/roc')
  .then(response => response.json());
}

/* components for simple presentation */
class RepoList extends Component {
  static propTypes = {
    display: React.PropTypes.number,
    loading: React.PropTypes.bool,
    repo: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  static defaultProps = {
    display: 5,
    repoItems: [],
    loading: true,
  };

  render() {
    if (this.props.loading) {
      return <span>Loading...</span>;
    }

    let repoItemsToDisplay = [];

    if (this.props.repo.length > 0) {
      repoItemsToDisplay = this.props.repo
        .filter((repo, index) => index < this.props.display)
        .map(repo => <li key={repo.id}>{repo.name} </li>);
    }

    return <ul>{ repoItemsToDisplay }</ul>;
  }
}

class RocStargazers extends Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    stars: React.PropTypes.number,
  }

  static defaultProps = {
    stars: 0,
    loading: true,
  };

  render() {
    if (this.props.loading) {
      return <span>Loading...</span>;
    }

    return <span>{this.props.stars}</span>;
  }
}

class FetchButton extends Component {
  static propTypes = {
    fetch: React.PropTypes.func,
  }

  render() {
    return <button onClick={this.props.fetch}>Refetch</button>;
  }
}

/* enhance our component with data fetching abilities */
@provideHooks({
  // by default, fetch is run on both server and client side
  fetch: ({ force, getProps, setProps }) => {
    const alreadyFetched = !!getProps().fetch;

    if (force || !alreadyFetched) {
      return fetchRocRepos()
      .then((json) => {
        setProps({
          repo: json,
        });
      });
    }

    return Promise.resolve();
  },
  // by default, defer only runs on the client side
  defer: ({ setProps }) => fetchRocStargazers()
    .then((json) => {
      setProps({
        stars: json.stargazers_count,
      });
    }),
})
/* this decorated component is mapped to /fetching/ in routes.js */
export default class Fetching extends Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    afterTransitionLoading: React.PropTypes.bool,
    reload: React.PropTypes.func,
    repo: React.PropTypes.arrayOf(React.PropTypes.object),
    stars: React.PropTypes.number,
  }

  static defaultProps = {
    repo: [],
    stars: 0,
  };

  render() {
    return (
      <div className={styles.main}>
        <h1>Data fetching examples</h1>
        <p>
          We recommend the use of these built-in facilities for data-fetching
          connected to your route components.
        </p>
        <p>This gives you powerful data fetching that works on both the server and the client</p>

        <h2>Universal fetch data (server and client)</h2>
        <h3>Top 5 Rocjs repositories</h3>
        <RepoList loading={this.props.loading} repo={this.props.repo} />

        <h2>Clientside fetch data</h2>
        <h3>Number of stargazers of rocjs/roc</h3>
        <RocStargazers loading={this.props.afterTransitionLoading} stars={this.props.stars} />

        <h2>Refetch all data</h2>
        <FetchButton fetch={this.props.reload} />
      </div>
    );
  }
}
/* eslint-enablereact/prefer-stateless-function, react/no-multi-comp */

const FETCH_REPO_REQUEST = 'FETCH_REPO_REQUEST';
const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
const FETCH_REPO_FAIL = 'FETCH_REPO_FAIL';

const defaultState = {
  loading: false,
  error: false,
  stargazers: undefined,
};

export default function repoFetch(state = defaultState, action) {
  if (action.type === FETCH_REPO_REQUEST) {
    return {
      loading: true,
      endpoint: action.payload.endpoint,
      error: false,
      stargazers: undefined,
    };
  }

  if (action.type === FETCH_REPO_SUCCESS) {
    return {
      loading: false,
      error: false,
      endpoint: action.payload.endpoint,
      stargazers: action.payload.data.stargazers_count,
    };
  }

  if (action.type === FETCH_REPO_FAIL) {
    return {
      loading: false,
      error: action.payload.error,
      endpoint: action.payload.endpoint,
      stargazers: undefined,
    };
  }

  return state;
}

export function repoFetchBegin(url) {
  return {
    type: FETCH_REPO_REQUEST,
    payload: {
      endpoint: url,
    },
  };
}

export function repoFetchSuccess(url, json) {
  return {
    type: FETCH_REPO_SUCCESS,
    payload: {
      endpoint: url,
      data: json,
    },
  };
}

export function repoFetchFail(url, err) {
  return {
    type: FETCH_REPO_FAIL,
    payload: {
      error: err,
      endpoint: url,
    },
  };
}

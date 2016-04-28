/**
 * Gets the repositories of the user from Github
 */

/* eslint-disable no-constant-condition */

import { take, call, put, select } from 'redux-saga/effects';

import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import usernameSelector from 'selectors/usernameSelector';

export function* getGithubData() {
  while (true) {
    yield take(LOAD_REPOS);
    const username = yield select(usernameSelector());
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    // Use call from redux-saga for easier testing
    const repos = yield call(request, requestURL);

    // We return an object in a specific format, see utils/request.js for more information
    if (repos.err === undefined || repos.err === null) {
      yield put(reposLoaded(repos.data, username));
    } else {
      console.log(repos.err.response); // eslint-disable-line no-console
      yield put(repoLoadingError(repos.err));
    }
  }
}

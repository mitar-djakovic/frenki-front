import {
  call, put, takeEvery, takeLatest, all, fork,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNUP_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CLEAR,
} from '../../constants';
import * as Api from '../../../api/user';

function* signUp({
  payload,
}) {
  const {
    firstName, lastName, email, password, repeatPassword,
  } = payload;

  function signUpApi() {
    return axios.post('http://localhost:8000/api/accounts/signup', {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    });
  }
  try {
    yield call(signUpApi);
    yield call({ type: SIGNUP_REQUEST });
  } catch (err) {
    console.log('err', err);
  }
}

function* login({ payload }) {
  const { email, password } = payload;
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  try {
    const account = yield call(Api.login, email, password);

    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        token: account.data.token, message: account.data.message, id: account.data.id,
      },
    });

    yield call(delay, 2500);
    yield put({ type: LOGIN_CLEAR });
  } catch (err) {
    yield put({
      type: LOGIN_ERROR,
      payload: {
        message: err.response.data.msg, token: err.response.data.token,
      },
    });

    yield call(delay, 2500);
    yield put({ type: LOGIN_CLEAR });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export const userSagas = [
  fork(watchLogin),
];

import {
  call, put, takeEvery, takeLatest, all,
} from 'redux-saga/effects';
import axios from 'axios';
import { SIGNUP_REQUEST, LOGIN_REQUEST } from '../../constants';

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

function* logIn({ payload }) {
  const {
    email, password,
  } = payload;

  function logInApi() {
    return axios.post('http://localhost:8000/api/accounts/login', {
      email,
      password,
    });
  }
  try {
    yield call(logInApi);
    yield call({ type: LOGIN_REQUEST });
  } catch (err) {
    console.log('err', err);
  }
}
export function* userSaga() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
  yield takeEvery(LOGIN_REQUEST, logIn);
}

import {
  call, put, takeEvery, takeLatest, all, fork,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SINGUP_CLEAR,
} from '../../constants';
import * as Api from '../../../api/user';

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* signup({
  payload,
}) {
  const {
    firstName, lastName, email, password, repeatPassword,
  } = payload;
  try {
    const response = yield call(Api.signup, firstName, lastName, email, password, repeatPassword);
    yield put({ type: SIGNUP_SUCCESS, payload: { message: response.data.message } });

    yield call(delay, 2500);
    yield put({ type: LOGIN_SINGUP_CLEAR });
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, payload: { message: error.response.data.message } });

    yield call(delay, 2500);
    yield put({ type: LOGIN_SINGUP_CLEAR });
  }
}

function* login({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(Api.login, email, password);

    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        token: response.data.token, message: response.data.message, id: response.data.id,
      },
    });

    yield call(delay, 2500);
    yield put({ type: LOGIN_SINGUP_CLEAR });
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      payload: {
        message: error.response.data.message, token: error.response.data.token,
      },
    });

    yield call(delay, 2500);
    yield put({ type: LOGIN_SINGUP_CLEAR });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function* watchSignup() {
  yield takeEvery(SIGNUP_REQUEST, signup);
}

export const userSagas = [
  fork(watchLogin),
  fork(watchSignup),
];

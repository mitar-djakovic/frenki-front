import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_SINGUP_CLEAR,
  LOGIN_ERROR,
} from '../../constants';
import * as Api from '../../../api/user';

const signUpAction = (firstName, lastName, email, password, repeatPassword) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  return Api.signup(firstName, lastName, email, password, repeatPassword)
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });

      setTimeout(() => {
        dispatch({ type: LOGIN_SINGUP_CLEAR });
      }, 2500);

      return res;
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });

      setTimeout(() => {
        dispatch({ type: LOGIN_SINGUP_CLEAR });
      }, 2500);

      return error.response;
    });
};

const logInAction = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return Api.login(email, password)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          id: res.data.id,
          token: res.data.token,
          message: res.data.message,
        },
      });

      setTimeout(() => {
        dispatch({ type: LOGIN_SINGUP_CLEAR });
      }, 2500);

      return res;
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          message: error.response.data.message, token: error.response.data.token,
        },
      });

      setTimeout(() => {
        dispatch({ type: LOGIN_SINGUP_CLEAR });
      }, 2500);

      return error.response;
    });
};

export {
  signUpAction,
  logInAction,
};

import { SIGNUP_REQUEST, LOGIN_REQUEST } from '../../constants';

const signUpAction = (firstName, lastName, email, password, repeatPassword) => ({
  type: SIGNUP_REQUEST,
  payload: {
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
  },
});

const logInAction = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export {
  signUpAction,
  logInAction,
};

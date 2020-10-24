import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SINGUP_CLEAR,
} from '../../constants';

const initialState = {
  loading: false,
  id: '',
  message: '',
  token: '',
  error: false,
  snackbarActive: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: payload.message,
        snackbarActive: true,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        snackbarActive: true,
        message: payload.message,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        id: payload.id,
        token: payload.token,
        message: payload.message,
        error: false,
        snackbarActive: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        snackbarActive: true,
        message: payload.message,
        token: payload.token,
      };
    case LOGIN_SINGUP_CLEAR:
      return {
        ...state,
        message: '',
        snackbarActive: false,
        error: false,
      };
    default:
      return state;
  }
};

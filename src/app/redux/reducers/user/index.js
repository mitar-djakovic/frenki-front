import { SIGNUP_REQUEST } from '../../constants';

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

import {
  USER_LOG_IN_PENDING,
  USER_LOG_IN_SUCCESS,
  USER_LOG_IN_ERROR,
  USER_LOG_OUT,
} from '../actions/types';

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case USER_LOG_IN_PENDING:
      return state;
    case USER_LOG_IN_SUCCESS:
      if (payload.token) localStorage.setItem('token', payload.token);
      return {
        user: payload,
        error: null,
      };
    case USER_LOG_IN_ERROR:
      localStorage.removeItem('token');
      return {
        user: null,
        error: payload,
      };
    case USER_LOG_OUT:
      localStorage.removeItem('token');
      return {
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;

import {
  USER_LOG_IN_PENDING,
  USER_LOG_IN_SUCCESS,
  USER_LOG_IN_ERROR,
  USER_LOG_OUT,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case USER_LOG_IN_PENDING:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
      };
    case USER_LOG_IN_SUCCESS:
      if (payload.token) localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
        error: null,
      };
    case USER_LOG_IN_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: payload,
      };
    case USER_LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;

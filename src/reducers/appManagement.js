import {
  APP_MODAL_ERROR,
  UNIVERSES_FETCH_ERROR,
  USER_LOG_IN_ERROR,
} from '../actions/types';

const initialState = {
  errors: null,
};

const appManagementReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_MODAL_ERROR:
    case USER_LOG_IN_ERROR:
    case UNIVERSES_FETCH_ERROR:
      return {
        ...state,
        errors: payload.errors
      }
    default: 
      return state;
  }
} 

export default appManagementReducer;
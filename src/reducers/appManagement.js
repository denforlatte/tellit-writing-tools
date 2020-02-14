import {
  APP_MODAL_ERROR,
  USER_LOG_IN_ERROR,
  UNIVERSES_FETCH_ERROR,
  CHARACTERS_FETCH_ERROR,
  CHARACTERS_FETCH_ONE_ERROR,
  APP_CLEAR_ERRORS,
} from '../actions/types';

const initialState = {
  errors: [],
};

const appManagementReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_MODAL_ERROR:
    case USER_LOG_IN_ERROR:
    case UNIVERSES_FETCH_ERROR:
    case CHARACTERS_FETCH_ERROR:
    case CHARACTERS_FETCH_ONE_ERROR:
      console.error(type + ' error: ');
      console.error(payload);
      return {
        ...state,
        errors: payload
      }
    case APP_CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      }
    default: 
      return state;
  }
} 

export default appManagementReducer;
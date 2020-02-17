import {
  APP_MODAL_ERROR,
  USER_LOG_IN_ERROR,
  UNIVERSES_FETCH_ERROR,
  CHARACTERS_FETCH_ERROR,
  CHARACTERS_FETCH_ONE_ERROR,
  APP_CLEAR_ERRORS,
  APP_ENABLE_EDITING,
  APP_DISABLE_EDITING,
} from '../actions/types';

const initialState = {
  isEditing: false,
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
    case APP_ENABLE_EDITING:
      return {
        ...state,
        isEditing: true,
      }
    case APP_DISABLE_EDITING: 
      return {
        ...state,
        isEditing: false,
      }
    default: 
      return state;
  }
} 

export default appManagementReducer;
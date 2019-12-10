import {
  APP_MODAL_ERROR,
} from '../actions/types';

const initialState = {
  errors: null,
};

const appManagementReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_MODAL_ERROR:
      return {
        ...state,
        errors: payload.errors
      }
    default: 
      return state;
  }
} 

export default appManagementReducer;
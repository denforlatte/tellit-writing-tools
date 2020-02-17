import { APP_CLEAR_ERRORS, APP_ENABLE_EDITING, APP_DISABLE_EDITING } from './types';

export const clearAppErrors = () => dispatch => {
  dispatch({
    type: APP_CLEAR_ERRORS,
  });
};

export const enableEditing = () => dispatch => {
  dispatch({
    type: APP_ENABLE_EDITING,
  });
};

export const disableEditing = () => dispatch => {
  dispatch({
    type: APP_DISABLE_EDITING,
  });
};
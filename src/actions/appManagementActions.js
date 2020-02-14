import { APP_CLEAR_ERRORS } from './types';

export const clearAppErrors = () => dispatch => {
  dispatch({
    type: APP_CLEAR_ERRORS,
  });
};
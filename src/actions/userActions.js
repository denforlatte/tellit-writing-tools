import axios from 'axios';
import setAuthHeader from '../utils/setAuthHeader';
import { USER_LOG_IN_PENDING, USER_LOG_IN_SUCCESS, USER_LOG_IN_ERROR } from './types';

export const logInUser = ({email, password}) => async dispatch => {
  dispatch({
      type: USER_LOG_IN_PENDING
  });

  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }

  const body = JSON.stringify({email, password});

  try {
      const res = await axios.post('users/login', body, config);
      if (!res.data.token) throw new Error('No token.')

      setAuthHeader(res.data.token)

      dispatch({
          type: USER_LOG_IN_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      const errors = error.response.data.errors;

      // TODO Create a standard error flow
      if (errors) {
          errors.forEach(error => alert(error.message));
      }
      
      dispatch({
          type: USER_LOG_IN_ERROR
      })
  }
};

// TODO What am I even trying to do here?
export const loadLocallySavedUser = () => async dispatch => {
  if (!localStorage.token) {
      setAuthHeader();
      // TODO redirect to login page
  }

  dispatch({
      type: USER_LOG_IN_PENDING
  })

  setAuthHeader(localStorage.token);

  try {
      const res = await axios.get('users/login');
      dispatch({
          type: USER_LOG_IN_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      console.error(error.message);
  }
};

export const logout = () => dispatch => {
  dispatch({
      type: CLEAR_PROFILE
  });
  dispatch({
      type: LOGOUT
  });
};
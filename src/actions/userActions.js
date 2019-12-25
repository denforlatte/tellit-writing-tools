import axios from 'axios';
import setAuthHeader from '../utils/setAuthHeader';
import { USER_LOG_IN_PENDING, USER_LOG_IN_SUCCESS, USER_LOG_IN_ERROR, APP_MODAL_ERROR } from './types';

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
      // TODO refactor host
      const res = await axios.post('users/login', body, config);
      if (!res.data.token) throw new Error('No token.')

      setAuthHeader(res.data.token)

      dispatch({
          type: USER_LOG_IN_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      // const errors = error.response.data.errors;
      console.error(error.message);

      // TODO Create a standard error flow
      
      dispatch({
          type: APP_MODAL_ERROR,
          payload: error.response.data,
      })
  }
};

// TODO What am I even trying to do here?
export const loadLocallySavedUser = () => async dispatch => {
  if (!localStorage.token) {
      setAuthHeader();
      // TODO redirect to login page
      dispatch({
        type: USER_LOG_IN_ERROR,
    })
      return ;
  }

  dispatch({
      type: USER_LOG_IN_PENDING
  })

  setAuthHeader(localStorage.token);

  try {
      const res = await axios.get('/users/authorise');
      
      dispatch({
          type: USER_LOG_IN_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      console.error(error.message);
      dispatch({
          type: USER_LOG_IN_ERROR,
      })
  }
};

// export const logout = () => dispatch => {
//   dispatch({
//       type: CLEAR_PROFILE
//   });
//   dispatch({
//       type: LOGOUT
//   });
// };
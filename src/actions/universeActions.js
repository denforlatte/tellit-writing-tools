import axios from 'axios';
import {
  UNIVERSES_FETCH_PENDING,
  UNIVERSES_FETCH_SUCCESS,
  UNIVERSES_FETCH_ERROR,
  UNIVERSES_ADD_ONE,
  APP_MODAL_ERROR,
  UNIVERSES_FETCH_ONE_PENDING,
  UNIVERSES_FETCH_ONE_SUCCESS,
  UNIVERSES_FETCH_ONE_ERROR,
} from './types';

export const getUniverses = () => async dispatch => {
  dispatch({
    type: UNIVERSES_FETCH_PENDING,
  });

  try {
    const res = await axios.get('/universes');

    dispatch({
      type: UNIVERSES_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: UNIVERSES_FETCH_ERROR,
        payload: error.response.data.errors,
      });
    } else {
      dispatch({
        type: UNIVERSES_FETCH_ERROR,
        payload: [error.message],
      });
    }
  }
};

export const getUniverse = (universeId) => async dispatch => {
  dispatch({
    type: UNIVERSES_FETCH_ONE_PENDING,
  });

  try {
    const res = await axios.get(`/universes/${universeId}`);

    dispatch({
      type: UNIVERSES_FETCH_ONE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const payload = error.response.data ? error.response.data.errors : [error.message];
    dispatch({
      type: UNIVERSES_FETCH_ONE_ERROR,
      payload,
    });
  }
}

export const createUniverse = ({ name }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name });

  try {
    const res = await axios.post('/universes', body, config);

    dispatch({
      type: UNIVERSES_ADD_ONE,
      payload: res.data,
    });
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: APP_MODAL_ERROR,
        payload: error.response.data.errors,
      });
    } else {
      dispatch({
        type: APP_MODAL_ERROR,
        payload: [error.message],
      })
    }
  }
};

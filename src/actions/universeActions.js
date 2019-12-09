import axios from 'axios';
import {
  UNIVERSES_FETCH_PENDING,
  UNIVERSES_FETCH_SUCCESS,
  UNIVERSES_FETCH_ERROR,
  UNIVERSES_SELECT_ONE,
  UNIVERSES_CLEAR_SELECTED,
} from './types';

export const getUniverses = () => async dispatch => {
  dispatch({
    type: UNIVERSES_FETCH_PENDING,
  });

  try {
    const res = await axios.get('universes');

    dispatch({
      type: UNIVERSES_FETCH_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    // TODO Error modal
    console.error(error.message);

    dispatch({
      type: UNIVERSES_FETCH_ERROR,
      payload: error,
    });
  }
};

export const selectUniverse = universe => async dispatch => {
  dispatch({
    type: UNIVERSES_SELECT_ONE,
    payload: universe,
  })
};

export const clearSelectedUniverse = () => async dispatch => {
  dispatch({
    type: UNIVERSES_CLEAR_SELECTED,
  })
}

export const createUniverse = ({name}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({name});

  try {
    const res = await axios.post('universes', body, config);

    // TODO add universe to universe array
        
  } catch (error) {
    console.error(error.message);

    // TODO error modal
  }
}

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

    dispatch({
      type: UNIVERSES_FETCH_ERROR,
      errors: [],
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

export const createUniverse = name => async dispatch => {

}

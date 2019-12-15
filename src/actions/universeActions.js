import axios from 'axios';
import {
  UNIVERSES_FETCH_PENDING,
  UNIVERSES_FETCH_SUCCESS,
  UNIVERSES_FETCH_ERROR,
  UNIVERSES_SELECT_ONE,
  UNIVERSES_CLEAR_SELECTED,
  UNIVERSES_ADD_ONE,
  APP_MODAL_ERROR,
} from './types';
import store from '../store';

export const getUniverses = () => async dispatch => {
  dispatch({
    type: UNIVERSES_FETCH_PENDING,
  });

  try {
    const res = await axios.get('universes');

    dispatch({
      type: UNIVERSES_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    // TODO Error modal
    console.error(error.message);

    dispatch({
      type: UNIVERSES_FETCH_ERROR,
      payload: error,
    });
  }
};

export const selectUniverse = universeId => async dispatch => {
  // TODO fetch all universes when user logs in

  // TODO: check universe is in store or show error
  const universeIds = store.getState().universes.universes.map(x => x._id);

  if (universeIds.includes(universeId)) {
    dispatch({
      type: UNIVERSES_SELECT_ONE,
      payload: universeId,
    });
  } else {
    // TODO redirect to universes and show error modal.
    console.error('Failed to select universe');
  }
};

export const clearSelectedUniverse = () => async dispatch => {
  dispatch({
    type: UNIVERSES_CLEAR_SELECTED,
  });
};

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
    console.error(error.message);

    // TODO error modal
    dispatch({
      type: APP_MODAL_ERROR,
      payload: error,
    });
  }
};

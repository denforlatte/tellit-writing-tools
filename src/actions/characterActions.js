import axios from 'axios';
import {
  CHARACTERS_FETCH_PENDING,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_ERROR,
  CHARACTERS_SELECT_ONE,
  CHARACTERS_CLEAR_SELECTED,
  CHARACTERS_ADD_ONE,
  APP_MODAL_ERROR,
} from './types';
import store from '../store';

export const getCharacters = (universeId) => async dispatch => {
  dispatch({
    type: CHARACTERS_FETCH_PENDING,
  });

  try {
    const res = await axios.get(`universes/${universeId}/characters`);

    dispatch({
      type: CHARACTERS_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    // TODO Error modal
    console.error(error.message);

    dispatch({
      type: CHARACTERS_FETCH_ERROR,
      payload: error,
    })
  }
}
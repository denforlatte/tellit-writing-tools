import axios from 'axios';
import { UNIVERSES_FETCH_PENDING, UNIVERSES_FETCH_SUCCESS, UNIVERSES_FETCH_ERROR } from './types';

export const getUniverses = () => async dispatch => {
  dispatch({
    type: UNIVERSES_FETCH_PENDING,
  });

  try {
    const res = await axios.get('http://localhost:5060/universes');
    console.log(res);
  } catch (error) {
    // TODO Error modal

    dispatch({
      type: UNIVERSES_FETCH_ERROR,
      errors: [],
    })
  }
};

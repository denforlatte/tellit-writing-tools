import axios from 'axios';
import {
  CHARACTERS_FETCH_PENDING,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_ERROR,
  CHARACTERS_FETCH_ONE_PENDING,
  CHARACTERS_FETCH_ONE_SUCCESS,
  CHARACTERS_FETCH_ONE_ERROR,
  CHARACTERS_ADD_ONE,
  APP_MODAL_ERROR,
} from './types';

export const getCharacters = universeId => async dispatch => {
  dispatch({
    type: CHARACTERS_FETCH_PENDING,
  });

  try {
    const res = await axios.get(`/universes/${universeId}/characters`);

    dispatch({
      type: CHARACTERS_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: CHARACTERS_FETCH_ERROR,
      payload: error.response,
    });
  }
};

export const getCharacter = (characterId, universeId) => async dispatch => {
  dispatch({
    type: CHARACTERS_FETCH_ONE_PENDING,
  });

  try {
    if (!universeId) {
      throw new Error('No universeId to fetch character.')
    }
    const res = await axios.get(
      `/universes/${universeId}/characters/${characterId}`
    );
 
    dispatch({
          type: CHARACTERS_FETCH_ONE_SUCCESS,
          payload: res.data,
        });
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: CHARACTERS_FETCH_ONE_ERROR,
      payload: error.response.errors,
    })
  }
};

export const addNewCharacter = ({
  name,
  importance,
  universeId,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, importance });

  try {
    const res = await axios.post(
      `/universes/${universeId}/characters`,
      body,
      config
    );

    dispatch({
      type: CHARACTERS_ADD_ONE,
      payload: res.data,
    });
  } catch (error) {
    console.error('add new char error:', error);
    dispatch({
      type: APP_MODAL_ERROR,
      payload: error,
    });
  }
};

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
    // TODO Error modal
    console.error(error.message);

    dispatch({
      type: CHARACTERS_FETCH_ERROR,
      payload: error,
    });
  }
};

export const selectCharacter = characterId => async dispatch => {
  const majorCharacters = store.getState().characters.majorCharacters;
  const minorCharacters = store.getState().characters.minorCharacters;

  let character = majorCharacters.find(
    character => character._id === characterId
  );
  if (!character)
    character = minorCharacters.find(
      character => character._id === characterId
    );

  if (character) {
    dispatch({
      type: CHARACTERS_SELECT_ONE,
      payload: character,
    });
  } else {
    // TODO Redirect and show error?
    console.error('Failed to select character');
  }
};

export const clearSelectedCharacter = () => async dispatch => {
  dispatch({
    type: CHARACTERS_CLEAR_SELECTED,
  });
};

export const addNewCharacter = ({name, importance, universeId}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({name, importance});

  try {
    const res = await axios.post(`/universes/${universeId}/characters`, body, config);

    dispatch({
      type: CHARACTERS_ADD_ONE,
      payload: res.data,
    })
  } catch (error) {
    console.error('add new char error:', error);
    dispatch({
      type: APP_MODAL_ERROR,
      payload: error,
    });
  }
}

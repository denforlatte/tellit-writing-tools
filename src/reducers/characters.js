import {
  CHARACTERS_FETCH_PENDING,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  majorCharacters: null,
  minorCharacters: null,
  selectedCharacter: null,
};

const charactersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHARACTERS_FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
        majorCharacters: null,
        minorCharacters: null,
      };
    case CHARACTERS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        majorCharacters: payload.filter(
          character => character.importance === 'major'
        ),
        minorCharacters: payload.filter(
          character => character.importance === 'minor'
        ),
      };
    case CHARACTERS_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        majorCharacters: null,
        minorCharacters: null,
      };
    default:
      return state;
  }
};

export default charactersReducer;

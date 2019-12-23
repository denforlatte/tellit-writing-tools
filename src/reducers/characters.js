import {
  CHARACTERS_FETCH_PENDING,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_ERROR,
  CHARACTERS_FETCH_ONE_PENDING,
  CHARACTERS_FETCH_ONE_SUCCESS,
  CHARACTERS_FETCH_ONE_ERROR,
  CHARACTERS_ADD_ONE,
} from '../actions/types';

const initialState = {
  isLoading: true,
  majorCharacters: [],
  minorCharacters: [],
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
    case CHARACTERS_FETCH_ONE_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case CHARACTERS_FETCH_ONE_SUCCESS:
      return {
        ...state,
        selectedCharacter: payload,
      };
    case CHARACTERS_FETCH_ONE_ERROR:
      return {
        ...state,
        isLoading: false,
        selectedCharacter: null,
      }
    case CHARACTERS_ADD_ONE:
      if (payload.importance === 'major') {
        return {
          ...state,
          majorCharacters: [...state.majorCharacters, payload],
        };
      }
      if (payload.importance === 'minor') {
        return {
          ...state,
          minorCharacters: [...state.minorCharacters, payload],
        };
      }
      return state;
    default:
      return state;
  }
};

export default charactersReducer;

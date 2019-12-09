import {
  UNIVERSES_FETCH_PENDING,
  UNIVERSES_FETCH_SUCCESS,
  UNIVERSES_FETCH_ERROR,
  UNIVERSES_SELECT_ONE,
  UNIVERSES_CLEAR_SELECTED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  universes: null,
  selectedUniverse: false,
}

const universesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UNIVERSES_FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
        universes: [],
        selectedUniverse: false,
      };
    case UNIVERSES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        universes: payload,
      };
    case UNIVERSES_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case UNIVERSES_SELECT_ONE:
      return {
        ...state,
        selectedUniverse: payload,
      }
    case UNIVERSES_CLEAR_SELECTED:
      return {
        ...state,
        selectedUniverse: false,
      }
    default: 
      return state;
  }
}

export default universesReducer;
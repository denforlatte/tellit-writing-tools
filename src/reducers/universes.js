import {
  UNIVERSES_FETCH_PENDING,
  UNIVERSES_FETCH_SUCCESS,
  UNIVERSES_FETCH_ERROR,
  UNIVERSES_ADD_ONE,
  UNIVERSES_FETCH_ONE_PENDING,
  USER_LOG_OUT,
  UNIVERSES_FETCH_ONE_SUCCESS,
  UNIVERSES_FETCH_ONE_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  universes: [],
  universe: null,
};

const universesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UNIVERSES_FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
        universes: null,
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
    case UNIVERSES_FETCH_ONE_PENDING:
      return {
        ...state,
        isLoading: true,
        universe: null,
      };
    case UNIVERSES_FETCH_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        universe: payload,
      };
    case UNIVERSES_FETCH_ONE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case UNIVERSES_ADD_ONE:
      return {
        ...state,
        universes: [...state.universes, payload],
      };
    case USER_LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default universesReducer;

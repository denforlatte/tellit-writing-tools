import { combineReducers } from 'redux';
import user from './user';
import universes from './universes'

export default combineReducers({
    user,
    universes,
});
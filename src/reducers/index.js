import { combineReducers } from 'redux';
import appManagement from './appManagement';
import user from './user';
import universes from './universes';
import characters from './characters';

export default combineReducers({
    appManagement,
    user,
    universes,
    characters,
});
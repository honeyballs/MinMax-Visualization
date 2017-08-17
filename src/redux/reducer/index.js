import { combineReducers } from 'redux';
import settings from './settings';
import minmax from './minmax'

export default combineReducers({
    settings,
    minmax
})
//Settings Reducer
import {SET_MAX_DEPTH, SET_MAX_OPTIONS} from '../constants';

const INITIAL_STATE = {
    maxDepth: 3,   
    maxOptions: 2,
    startingPlayer: 1,
}

export default (settingsState = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MAX_DEPTH:
            return {
                ...settingsState,
                maxDepth: action.payload,
            }
        case SET_MAX_OPTIONS:
            return {
                ...settingsState,
                maxOptions: action.payload,
            }
        default:
            return settingsState;
    }
}
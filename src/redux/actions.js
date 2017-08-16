import {SET_MAX_DEPTH, SET_MAX_OPTIONS} from './constants';

export const setMaxDepth = (maxDepth) => ({
    type: SET_MAX_DEPTH,
    payload: maxDepth
})

export const setMaxOptions = (maxOptions) => ({
    type: SET_MAX_OPTIONS,
    payload: maxOptions
})
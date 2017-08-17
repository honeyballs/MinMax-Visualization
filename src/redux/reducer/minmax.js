//MinMax reducer
import { SET_TREE, UPDATE_OPTION, INSERT_OPTIONS_INTO_TREE } from "../constants";

const INITIAL_STATE = {
  currentDepth: 0,
  currentOption: 0,
  currentPlayer: 1,
  tree: [],
  maxValue: -1000,
  minValue: 1000
};

export default (minMaxState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TREE:
      return {
        ...minMaxState,
        tree: action.payload
      };
    case UPDATE_OPTION:
      return {
        ...minMaxState,
        tree: action.payload
      };
    case INSERT_OPTIONS_INTO_TREE:
      return {
          ...minMaxState,
          tree: action.payload
      };
    default:
      return minMaxState;
  }
};

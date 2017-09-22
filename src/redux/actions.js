import {
  SET_MAX_DEPTH,
  SET_MAX_OPTIONS,
  SET_TREE,
  UPDATE_OPTION,
  INSERT_OPTIONS_INTO_TREE,
  CHANGE_PLAYER
} from "./constants";

export const setMaxDepth = maxDepth => ({
  type: SET_MAX_DEPTH,
  payload: maxDepth
});

export const setMaxOptions = maxOptions => ({
  type: SET_MAX_OPTIONS,
  payload: maxOptions
});

export const setTree = tree => ({
  type: SET_TREE,
  payload: tree
});

export const updateOption = (tree, depth, option, indexOfUpdate) => {
    const row = tree[depth]
    const updatedRow = [
        ...row.slice(0, indexOfUpdate),
        option,
        ...row.slice(indexOfUpdate + 1)
    ]
    const updatedTree = [
        ...tree.slice(0, depth),
        updatedRow,
        ...tree.slice(depth + 1)
    ]
    const updatedValue = option.value;
    return {
    type: UPDATE_OPTION,
    payload: {tree: updatedTree, value: updatedValue }
  };
};

export const insertOptionsIntoTree = (tree, depth, options) => {
  var tempRow = tree[depth];
  tempRow.push(options);
  var updatedTree = [
    ...tree.slice(0, depth),
    tempRow,
    ...tree.slice(depth + 1)
  ];
  return {
    type: INSERT_OPTIONS_INTO_TREE,
    payload: updatedTree
  };
};

export const changePlayer = (player) => {
  const newPlayer = player
  return {
    type: CHANGE_PLAYER,
    payload: newPlayer
  }
}
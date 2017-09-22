
//build a tree the size of the user settings
export const generateTree = (tree, maxDepth, maxOptions) => {
  for (var depth = 1; depth <= maxDepth; depth++) {
    var options = []
    for (var option = 1; option <= Math.pow(maxOptions, depth); option++) {
      var obj = {
        id: depth * 10 + option,
        value: 0,
        active: false
      }
      options.push(obj)
    }
    tree.push(options) 
  }
  return tree;
};

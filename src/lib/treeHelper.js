export const generateId = () => Math.floor(Math.random() * 100000);

//build a tree the size of the user settings
export const generateTree = (maxDepth, maxOptions, callback) => {
  var tree = []
  for (var depth = 1; depth <= maxDepth; depth++) {
    var options = []
    for (var option = 1; option <= Math.pow(maxOptions, depth); option++) {
      var obj = {
        id: depth * 10 + option,
        value: 0
      }
      options.push(obj)
    }
    tree.push(options) 
  }
  console.log({ tree }, maxDepth, maxOptions)
  callback(tree)
};

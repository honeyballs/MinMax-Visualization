//generate a set amount of options and return them in an array.
//The id represents the exact position and parents of each option
export const generateOptions = (depth, maxOptions, index, optionCounter, raiseCounter) => {
  var optionsArray = [];
  var counter = optionCounter
  for (var i = 1; i <= maxOptions; i++) {
    var option = {
      id: 100 * depth + 10 * index + counter,
      value: 0
    };
    counter++;
    optionsArray = [...optionsArray, option];
  }
  //update the tree state
  raiseCounter(counter);
  return optionsArray;
};

//insert options into the tree
export const insertNewOptions = (tree, options, depth) => {
  console.log({tree})
  var tempRow = tree[depth]
  console.log({tempRow})
  tempRow.push(options);
  var updatedTree = [
    ...tree.slice(0, depth),
    tempRow,
    ...tree.slice(depth + 1)
  ];

  return updatedTree;
};

//generate a random value as fake evaluation of an option
export const evaluate = () => {
  var random = Math.floor(Math.random() * 10);
  //generates a negative number ~50% of the time
  var randomizeSign = random * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
  return randomizeSign;
};

//find an option by its id
export const findOption = (tree, depth, index, optionIndex) => {
  var row = tree[depth];
  var optionArray = row[index];
  var option = optionArray[optionIndex];
  return option;
};

//returns a new tree with an updated option
export const updateOptionInTree = (tree, option, depth) => {
  const row = tree[depth];
  const indexToUpdate = row.findIndex(item => (item.id = option.id));
  const updatedRow = [
    ...row.slice(0, indexToUpdate),
    option,
    ...row.slice(indexToUpdate + 1)
  ];
  const updatedTree = [
    ...tree.slice(0, depth),
    updatedRow,
    ...tree.slice(depth + 1)
  ];
  //console.log({ updatedTree });
  return updatedTree;
};

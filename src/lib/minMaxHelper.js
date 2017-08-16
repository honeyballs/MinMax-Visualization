//generate a set amount of options and return them in an array.
//The id represents the exact position and parents of each option
export const generateOptions = (depth, maxOptions, index) => {
  var optionsArray = [];
  for (var i = 1; i <= maxOptions; i++) {
    var option = {
      id: 100 * depth + 10 * index + i,
      value: 0
    };
    optionsArray = [...optionsArray, option];
  }
  //update the tree state
  return optionsArray;
};

//insert options into the tree
export const insertNewOptions = (tree, options, depth) => {
  var tempRow = tree[depth];
  // console.log({tree, options, depth, tempRow});
  //add the options to the array
  tempRow.push(options);
  // var updatedRow = [...tempRow, options];
  // console.log('newRow', updatedRow);
  //update the tree with the new row
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
  console.log(randomizeSign)
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
export const updateOptionInTree = (tree, option, depth, index, optionIndex) => {
  var row = tree[depth];
  var optionArray = row[index];
  var newOptionArray = [
    ...optionArray.slice(0, optionIndex),
    option,
    ...optionArray.slice(optionIndex + 1)
  ];
  var newRow = [
    ...row.slice(0, index),
    newOptionArray,
    ...row.slice(index + 1)
  ];
  var newTree = [...tree.slice(0, depth), newRow, ...tree.slice(depth + 1)];
  return newTree;
};


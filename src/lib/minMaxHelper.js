
//generate a random value as fake evaluation of an option
export const evaluate = () => {
  var random = Math.floor(Math.random() * 10);
  //generates a negative number ~50% of the time
  var randomizeSign = random * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
  return randomizeSign;
};


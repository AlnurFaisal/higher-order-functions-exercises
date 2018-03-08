const reducer = (accumulator, current) => {return accumulator + current;}

function sum(array) {
  return array.reduce(reducer);
}

const reduceArray = (accumulator, current) => {return accumulator.concat(current);}
const productNumber = (accumulator, current) => {return accumulator * current;}

function productAll(matrix) {
  return matrix.reduce(reduceArray, []).reduce(productNumber, 1);
}

function luckyNumbers(array) {
  return "Your lucky numbers are: " + array.join(", ") + ".";
  // interesting and straightforward solution!
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};

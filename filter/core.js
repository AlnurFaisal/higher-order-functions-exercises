function onlyEven(array) {
  return array.filter(array => array % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(array => array.indexOf(' ') === -1);
}

function isPositive(element){
    return element > 0;
}
function isPositiverow(array){
  return array.every(isPositive);
}
function positiveRowsOnly(matrix) {
   return matrix.filter(isPositiverow);
}

function truthyValuesOnly(array) {
  return array.filter(row => row);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};

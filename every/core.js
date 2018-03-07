// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  const isEven = (input) => {return input % 2 === 0;} 
  return input.every(isEven); 
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
function positiveMatrix(input) {
  return input.every(row => row.every(num => num > 0));
}

module.exports = {
  allEven,
  positiveMatrix
};

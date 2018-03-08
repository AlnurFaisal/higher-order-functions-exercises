// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(input) {
  return input.some(num => num > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(input) {
  return input.some(word => word.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(input) {
  return input.some(row => row.some(element => element));
  // you could consider renaming element to isTrue, so that the reader
  // won't scratch his head and think about why you're just returning the element
  // return input.some(row => row.some(isTrue => isTrue));
}

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(input) {
  return input.some(row => row == "Lost Carcosa.");
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};

function multiplyBy10(array) {
  return array.map(element => element * 10);
}

const isVowel = chr => "aeiou".includes(chr);

function keepVowel(word){
  return word.split("").filter(isVowel).join("");
  // given that keepVowel is returning a vowelized word (e.g. average -> aeae),
  // the function could be better named as vowelizeWord() or removeConsonants()
}

function onlyVowels(array) {
  return array.map(keepVowel);
}

function doubleMatrix(matrix) {
  return matrix.map(row => row.map(elem => elem * 2));
}

function onlyNames(array) {
  return array.map(obj => obj.name);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};

'use strict';

function median_to_letter(collection) {

  collection = collection.sort((a, b) => a - b);

  let medianIndex = parseInt(collection.length / 2, 10);
  let median = collection[medianIndex];

  if (collection.length % 2 === 0) {
    median = Math.round((median + collection[collection.length / 2 - 1]) / 2);
  }

  return changeCodeToString(median);
}

function changeCodeToString(number) {
  let divisor = parseInt(number / 26, 10);
  let residue = number % 26;

  if (residue === 0) {
    divisor --;
    residue = 26
  }

  const singleDigit = String.fromCharCode(96 + residue);
  let tenDigits = "";

  if (divisor) {
    tenDigits = String.fromCharCode(96 + divisor);
  }

  return tenDigits + singleDigit;
}

module.exports = median_to_letter;

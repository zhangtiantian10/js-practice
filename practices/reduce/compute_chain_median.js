'use strict';

function compute_chain_median(collection) {
  const array = collection.split('->').map(c => parseInt(c, 10)).sort((a, b) => a - b);

  let medianIndex = parseInt(array.length / 2, 10);
  let median = array[medianIndex];

  if (array.length % 2 === 0) {
    median = (median + array[array.length / 2 - 1]) / 2;
  }

  return median;

}

module.exports = compute_chain_median;

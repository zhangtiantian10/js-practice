'use strict';

function compute_median(collection) {
  collection = collection.sort((a, b) => a - b);
  let medianIndex = parseInt(collection.length / 2, 10);
  let median = collection[medianIndex];

  if (collection.length % 2 === 0) {
    median = (median + collection[collection.length / 2 - 1]) / 2;
  }

  return median;

}

module.exports = compute_median;



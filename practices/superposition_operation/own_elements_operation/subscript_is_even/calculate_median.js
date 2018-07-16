'use strict';
var calculate_median = function(collection){

  const evens = collection.filter(c => c % 2 === 0).sort((a, b) => a - b);
  let medianIndex = parseInt(evens.length / 2, 10);
  let median = evens[medianIndex];

  if (evens.length % 2 === 0) {
    median = (median + evens[evens.length / 2 - 1]) / 2;
  }

  return median;
};
module.exports = calculate_median;

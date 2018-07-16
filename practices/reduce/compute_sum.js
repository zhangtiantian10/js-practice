'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, n) => sum + n);
}

module.exports = calculate_elements_sum;


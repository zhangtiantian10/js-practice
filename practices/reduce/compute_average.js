'use strict';

function compute_average(collection) {
  return collection.reduce((sum, n) => sum + n) / collection.length;
}

module.exports = compute_average;


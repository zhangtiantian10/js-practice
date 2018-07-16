'use strict';

function find_first_even(collection) {
  return collection.find(c => c % 2 === 0);
}

module.exports = find_first_even;


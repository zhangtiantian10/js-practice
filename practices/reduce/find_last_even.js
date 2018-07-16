'use strict';

function find_last_even(collection) {
  return collection.reverse().find(c => c % 2 === 0);
}

module.exports = find_last_even;

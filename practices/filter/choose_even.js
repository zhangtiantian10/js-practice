'use strict';

function choose_even(collection) {

  return collection.filter(c => c % 2 === 0);
}

module.exports = choose_even;

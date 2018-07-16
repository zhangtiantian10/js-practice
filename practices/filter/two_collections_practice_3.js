'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(a => {
    const array = collection_b.filter(b => a % b === 0);
    return array.length;
  })
}

module.exports = choose_divisible_integer;

'use strict';

function average_uneven(collection) {
  const unevens = collection.filter(c => c % 2 !== 0);

  return unevens.reduce((a, b) => a + b) / unevens.length;
}

module.exports = average_uneven;

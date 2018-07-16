'use strict';

function hybrid_operation(collection) {

  return collection.map(c => c * 3 + 2).reduce((a, b) => a + b);
}

module.exports = hybrid_operation;


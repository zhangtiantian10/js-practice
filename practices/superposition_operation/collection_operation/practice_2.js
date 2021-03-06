'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.filter(c => c % 2 !== 0).map(c => c * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;


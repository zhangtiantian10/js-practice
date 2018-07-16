'use strict';

function double_to_one(collection) {
  const newCollection = [].concat.apply([], collection);
  const result = [];
  newCollection.forEach(n => {
    if (!result.includes(n)) {
      result.push(n);
    }
  })
  return result;
}

module.exports = double_to_one;

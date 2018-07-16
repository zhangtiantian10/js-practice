'use strict';

function grouping_count(collection) {
  let output = {};

  collection.forEach(c => {
    output = countNumber(c, output);
  })

  return output;
}

function countNumber(str, object) {
  let key = Object.keys(object).find(o => parseInt(o) === str);
  if (key) {
    object[key] ++;
  } else {
    object[str] = 1;
  }

  return object;
}

module.exports = grouping_count;

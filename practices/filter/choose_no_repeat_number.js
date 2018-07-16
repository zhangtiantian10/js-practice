'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((c, index) => index === collection.lastIndexOf(c));
}

module.exports = choose_no_repeat_number;

'use strict';

function average_to_letter(collection) {

  const code = Math.round(collection.reduce((a, b) => a + b) / collection.length);
  return String.fromCharCode(96 + code);
}

module.exports = average_to_letter;


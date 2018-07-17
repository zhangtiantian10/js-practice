'use strict';

function spilt_to_zero(number, interval) {
  const array = [];
  while(number + interval > 0) {
    array.push(number);
    number = parseFloat((number - interval).toFixed(1), 10);
  }

  return array;
}

module.exports = spilt_to_zero;

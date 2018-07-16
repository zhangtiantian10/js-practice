'use strict';

function get_integer_interval(number_a, number_b) {
  const min = Math.min(number_a, number_b);
  const max = Math.max(number_a, number_b);
  const result = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_integer_interval;


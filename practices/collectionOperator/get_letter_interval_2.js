'use strict';

function get_letter_interval_2(number_a, number_b) {
  const min = Math.min(number_a, number_b);
  const max = Math.max(number_a, number_b);
  const result = [];

  for (let i = min; i <= max; i++) {
    let divisor = parseInt(i / 26, 10);
    let residue = i % 26;
    
    if (residue === 0) {
      divisor --;
      residue = 26
    }
    
    const singleDigit = String.fromCharCode(96 + residue);
    let tenDigits = "";

    if (divisor) {
        tenDigits = String.fromCharCode(96 + divisor);
    }

    result.push(tenDigits.concat(singleDigit));
  }

  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval_2;


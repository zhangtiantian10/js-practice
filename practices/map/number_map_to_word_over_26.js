'use strict';
var number_map_to_word_over_26 = function(collection){

  return collection.map(c => {
    let divisor = parseInt(c / 26, 10);
    let residue = c % 26;

    if (residue === 0) {
      divisor --;
      residue = 26
    }

    const singleDigit = String.fromCharCode(96 + residue);
    let tenDigits = "";

    if (divisor) {
      tenDigits = String.fromCharCode(96 + divisor);
    }

    return tenDigits + singleDigit;
  });
};

module.exports = number_map_to_word_over_26;

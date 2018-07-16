'use strict';
var calculate_average = function(collection){

  const evens = collection.filter(c => c % 2 === 0);

  return evens.reduce((a, b) => a + b) / evens.length;
};
module.exports = calculate_average;

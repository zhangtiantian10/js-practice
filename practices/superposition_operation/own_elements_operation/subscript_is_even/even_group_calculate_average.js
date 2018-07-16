'use strict';
var even_group_calculate_average = function(collection){
  const evens = collection.filter((c, index) => (index + 1) % 2 === 0).filter(f => f % 2 === 0).sort((a, b) => a - b);

  let a = 10;
  const result = [];
  while (evens.length > 0) {
    const filterArray = evens.filter(even => even < a);
    if (filterArray.length){
      result.push(filterArray.reduce((a, b) => a + b) / filterArray.length)
      evens.splice(0, filterArray.length);
    }

    a *= 10;
  }

  return result.length ? result : [0];

};
module.exports = even_group_calculate_average;

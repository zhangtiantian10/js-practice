'use strict';
var even_asc_odd_desc = function(collection){

  const evens = collection.filter(c => c % 2 === 0).sort((a, b) => a - b);
  const unevens = collection.filter(c => c % 2 !== 0).sort((a, b) => b - a);

  return evens.concat(unevens);
};
module.exports = even_asc_odd_desc;

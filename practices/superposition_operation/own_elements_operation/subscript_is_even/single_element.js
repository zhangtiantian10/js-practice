'use strict';
var single_element = function(collection){
  const array = collection.filter((c, index) => (index + 1) % 2 === 0);
  return array.filter((a, index) => index === array.lastIndexOf(a) && index === array.indexOf(a)).sort((a, b) => a - b);
};
module.exports = single_element;

'use strict';
var number_map_to_word = function(collection){
  return collection.map(c => String.fromCharCode(96 + c));
};

module.exports = number_map_to_word;

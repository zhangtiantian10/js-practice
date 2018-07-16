'use strict';
var is_exist_element = function(collection,element){

  return collection.find((c, index) => index % 2 === 0 && c === element) !== undefined;
};
module.exports = is_exist_element;

'use strict';
function one_add_next_multiply_three(collection){
  const array = collection.map((c, index) => {
    if (index + 1 !== collection.length) {
      return (c + collection[index + 1]) * 3;
    } else {
      return '';
    }
  });

  array.splice(array.length - 1, 1);

  return array;
}
module.exports = one_add_next_multiply_three;

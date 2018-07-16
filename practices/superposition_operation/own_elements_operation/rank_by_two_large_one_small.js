'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort((a, b) => a - b);

  return collection.map((c, index) => {
    if (index % 3 === 0 && index + 2 < collection.length) {
      return collection[index + 1];
    } else if (index % 3 === 2) {
      return collection[index - 2];
    } else if (index + 2 < collection.length) {
      return collection[index + 1];
    } else {
      return c;
    }
  })
}
module.exports = rank_by_two_large_one_small;

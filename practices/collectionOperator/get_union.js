'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b.filter(b => !collection_a.includes(b)));
}

module.exports = get_union;


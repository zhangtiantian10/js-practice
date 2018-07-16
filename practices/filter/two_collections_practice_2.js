'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  return collection_a.filter(a => !collection_b.includes(a));
}

module.exports = choose_no_common_elements;

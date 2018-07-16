function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(a => collection_b.includes(a));
}

module.exports = collect_same_elements;

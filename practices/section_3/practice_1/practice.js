function create_updated_collection(collection_a, object_b) {
  return collection_a.map(a => {
    if (object_b.value.includes(a.key)) {
      a.count--;
    }

    return a;
  })
}

module.exports = create_updated_collection;

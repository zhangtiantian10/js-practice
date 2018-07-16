function create_updated_collection(collection_a, object_b) {
  const results = [];

  for (let c of collection_a) {
    countNumber(c, results);
  }

  return results.map(result => {
    if (object_b.value.includes(result.key)) {
      const subtraction = parseInt(result.count / 3, 10);
      result.count -= subtraction;
    }

    return result;
  })
}

function countNumber(c, results) {
  let result = results.find(re => re.key === c);

  if (result) {
    result.count++;
  } else {
    result = {key: c, count: 1};
    results.push(result);
  }

  return results;
}


module.exports = create_updated_collection;

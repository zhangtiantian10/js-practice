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
  let key = c;
  let count = 1;
  if (c.includes('-')) {
    key = c.split('-')[0];
    count = parseInt(c.split('-')[1]);
  }
  let result = results.find(re => re.key === key);

  if (result) {
    result.count += count;
  } else {
    result = {key: key, count: count};
    results.push(result);
  }

  return results;
}

module.exports = create_updated_collection;

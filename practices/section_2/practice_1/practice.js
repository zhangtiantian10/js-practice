function count_same_elements(collection) {
  const results = [];

  for (let c of collection) {
    countNumber(c, results);
  }

  return results;
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

module.exports = count_same_elements;

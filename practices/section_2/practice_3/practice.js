function count_same_elements(collection) {
  const results = [];

  for (let c of collection) {
    countNumber(c, results);
  }

  return results;
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

function formatString(str) {
  return
}

module.exports = count_same_elements;

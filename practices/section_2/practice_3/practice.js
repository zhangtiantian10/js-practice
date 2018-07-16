function count_same_elements(collection) {
  const results = [];

  for (let c of collection) {
    countNumber(c, results);
  }

  return results;
}

function countNumber(c, results) {
  const {name, summary = 1} = formatString(c);

  let result = results.find(re => re.name === name);

  if (result) {
    result.summary += summary;
  } else {
    result = {name, summary};
    results.push(result);
  }

  return results;
}

function formatString(str) {
  const strs = str.split('');
  const name = strs[0];
  let numberStr = "";
  for (let s of strs) {
    const reg = new RegExp('^\\d$');
    if (reg.test(s)) {
      numberStr += s;
    }
  }

  return {name, summary: parseInt(numberStr, 10) ? parseInt(numberStr, 10) : 1};
}

module.exports = count_same_elements;

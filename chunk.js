const chunkArray = (array, length) => {
  const chunkedArray = [];

  // Loop through arr
  array.forEach(val => {
    // get last element
    const last = chunkedArray[chunkedArray.length - 1];

    // Check if last and if last length is equal to the chunk length
    if (!last || last.length === length) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArray;
}

module.exports = chunkArray;

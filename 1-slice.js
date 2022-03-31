function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { // end(6)
    slicedArray.push(array[i]); // 4
  }
  return slicedArray; //1
}

module.exports = { slice };

/** T(slice) = 1 + n.6(4) + 1
* T(slice) = 2 + 24.n
* O(n)
**/
function merge(array1, array2) {
  let mergedArray = [];       //1
  let i = 0;  //1
  let j = 0;  //1
  while (i < array1.length && j < array2.length) { // 8 (arr)
    if (array1[i] < array2[j]) {     // 3 (array2[j])
      mergedArray.push(array1[i]); //3
      i++; //2
    } else {
      mergedArray.push(array2[j]); // 3
      j++; //2
    }
  }
  while (i < array1.length) { // 4(arr.length)
    mergedArray.push(array1[i]);  //3
    i++;  //2
  }
  while (j < array2.length) { // 4(arr.length)
    mergedArray.push(array2[j]); //3
    j++;  //2
  }
  return mergedArray; //1
}

module.exports = { merge };

/**   
 * T(merge) = 1 + 1 + 1 + 8(arr)(3+3+2+3+2) + 4(arr)(3+2) + 4(3+2) +1
 *          = 24 + (13)(8)n + 20(n)
 * O(n) 
 */

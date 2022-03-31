const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {        
  if (array.length <= 1) {  // 3
    return array;            // 1
  }
  const middle = Math.floor(array.length / 2); // 5
  const left = slice(array, 0, middle);  // 4 (n) 
  const right = slice(array, middle, array.length); // 5 (n)
  return merge(sort(left), sort(right)); // 6 (n)
}

const array = generateUnorderedArray(10); // 3
console.log(array); //2
console.log(sort(array)); // 3

/**
 * T(6) = 3 + 1 + 5 + 4(n) + 5 (n) + 6 (n) + 3 + 2 + 3
 *      = 17 + 15 (n)
 *      = n
 * O (n)  
 */
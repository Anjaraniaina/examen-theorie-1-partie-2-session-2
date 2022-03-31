const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { // 5(size)
    let number = Math.floor(Math.random() * 100); // 4
    while (arrayContain(array, number)) {  //  (n)
      number = Math.floor(Math.random() * 100); // 4
    }
    array.push(number); //3
  }
  return array; //1
}

module.exports = { generateUnorderedArray };
/**
 * T(4) = 1 + 5 (size) ( 4 + n(4) +3 ) + 1
 *      = 2 + 5 (n)(7 + 4(n))
 *      = 2 + 35n + 20(n**2)
 *      = n^2
 * O(n^2)
 */
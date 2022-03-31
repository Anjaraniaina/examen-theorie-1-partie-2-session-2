function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { // 6(array.length)
    if (array[i] === number) { //3
      return true; //1
    }
  }
  return false; //1 
}

module.exports = { arrayContain };
/**
 * T(3) = 6(array.length)(3 + 1) + 1
 *      = 6n +1
 *      = n
 * 0(n) 
 */

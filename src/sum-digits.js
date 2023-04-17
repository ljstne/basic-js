const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  for (let i = 0; i < String(n).length; i++) {
    if (String(n).length === 2 || String(n).length === 3) {
      return Number(String(n)[i]) + Number(String(n)[i+1])}

      };
    let a = Number(String(n)[i]);
    let b = Number(String(n)[i+1]) || 0;
    let res = a + b;
    console.log(res, i);
    if (res >= 9) {

      res = getSumOfDigits(res)
    }
    else if (res <= 9 && i === String(n).length - 1) {
      // if (res === 1) {return 10}
      return res}
 
}

module.exports = {
  getSumOfDigits
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  for (i = 0; i < str.length; i++) {
    let a = Number(str[i]);
    let b = Number(str[i + 1]);
    if (a > b) {return Number(str.replace(str[i+1],''))}
    else if (a < b) {return Number(str.replace(str[i],''))}
  }
}

module.exports = {
  deleteDigit
};

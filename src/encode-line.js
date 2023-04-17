const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let counterLetter = '';
  let resStr = '';
  for (i = 0; i < str.length; i++) {
    let a = str[i];
    let b = str[i+1];
    if (a === b) {counter++; counterLetter = a}
    else if (a !== b) {if (counter === 1) {resStr += a}
    else {
      resStr += String(counter) + a; counter =1}
  }
}
  return resStr;
}

module.exports = {
  encodeLine
};

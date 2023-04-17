const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split('');
  let a2 = s2.split('');
  let commonCounter = 0;
  if (a1.length <= a2.length) {
    for (let i = 0; i < a1.length; i++) {
      const e = a1[i];
      if (a2.includes(e) && e !== undefined) {a2[a2.indexOf(e)] = undefined; commonCounter++};      console.log(a1, commonCounter);
    }
  }
  else {
    for (let i = 0; i > a2.length; i++) {
      const e = a2[i];
      if (a1.includes(e) && e !== undefined) {a1[a1.indexOf(e)] = undefined; commonCounter++};      console.log(a1, commonCounter);

  }
}
return commonCounter
}

module.exports = {
  getCommonCharacterCount
};

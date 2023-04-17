const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let resArr = [];
  for (let i = 0; i < domains.length; i++) {
    let dom = domains[i].split('.');
    dom.reverse();
    dom.forEach(e=> { if (e === dom[0]) {e= '.' + e}
       if (e === dom[1]) {e = '.' + dom[0] + '.' + dom[1]};
    if(e === dom[2]) {e = '.' + dom[0] + '.' + dom[1] + '.' + dom[2]}
      if (result[e]==null) {
        result[e]=1}
      else {result[e] += 1}
    })
    resArr.push(domains[i])
  }
  return result
}

module.exports = {
  getDNSStats
};

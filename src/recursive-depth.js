const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let innerCounter = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        innerCounter++;
        innerCounter += this.calculateDepth(arr[i])
        innerCounter > counter ? counter = innerCounter : counter;
      }
      innerCounter = 0;
    };
    if (counter === 0) {return 1}
    else {return counter}
  }
}

module.exports = {
  DepthCalculator
};

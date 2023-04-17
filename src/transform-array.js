const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!");}
  
  let transformArr = [];
  let resArr = [];
  let discard = 0;
  let newItem;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (arr[i-1] === '--discard-next') {item = undefined}
    // console.log(arr, transformArr);
    let command = arr[i];
    newItem = undefined;
    console.log(command,'commmmmmmm');
    if (item === '--discard-next') {
      console.log(item,'dndnndndnndn');
      newItem = '--discard-next'
    }    
    else if (item === '--discard-prev') {
      newItem = '--discard-prev';
    }    
    else if (item === '--double-next') {

      newItem =  arr[i+1];
    }
    else if (item === '--double-prev') {
      newItem =  arr[i-1];
    }
    // console.log(newItem,'newitemteitme');
    if (newItem !== undefined) {
      transformArr.push(newItem);
    }
      // if (command === '--discard-next' || command === '--discard-prev')
      // {transformArr.push(undefined);console.log('asdfdfadfadfdaf');
      // console.log('fdfadfadfafadfadfafoadkfoadkfoad');} 
      else if (item !== undefined) {
      // if (arr[i-1] === '--discard-next') {
      //   console.log('hehehrhehrherheh');transformArr.push(undefined)}
      // else {
        console.log(arr[i-1],'heheheuuheuhdueheuh1');
        transformArr.push(item)}

    // }
    console.log(transformArr, 'trarr');
  }

    for (let i = 0; i < transformArr.length; i++) {
      console.log(transformArr[i], transformArr);
      if (transformArr[i+1] === '--discard-prev') {
        transformArr[i] = undefined;
        // console.log(i,'fsafdafadfdafafdaf');
        transformArr[i+1] = undefined;
      }
      else if (transformArr[i] === '--discard-next') {
        transformArr[i+1] = undefined
      }
      else if (transformArr[i]!== undefined && transformArr[i]!== '--discard-prev'
        && transformArr[i]!== '--discard-next'
        &&  transformArr[i]!== '--double-next'
        &&  transformArr[i]!== '--double-prev') {resArr.push(transformArr[i])}
    }
    return resArr


}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};

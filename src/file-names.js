const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};
  let resArr = [];
  let counter = 1;
  for (let i = 0; i < names.length; i++) {
    const match = /^(.*)\((1)\)\s*$/g;

    if (names[i].match(match)) {
      console.log(counter);
      console.log(names[i] + '(' + `${i}`)
      names[i] = names[i] + '(' + counter + ')';
      counter++;
      console.log(names[i], counter);
    }
  }

  for (let i = 0; i < names.length;i++) {
    let file = names[i];

    // if (resArr.includes(file)) {
    //   file = file + '(' + obj[file] + ')';
    // }

    if (file in obj) {
      let n = file + '(' + obj[file] + ')';
      resArr.push(n);
      obj[file]++;
    }



    else {
      resArr.push(file);
      obj[file] = 1;
      console.log(obj);
    }

  

  }


  return resArr;

}
console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']));

module.exports = {
  renameFiles
};

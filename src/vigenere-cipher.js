const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (state) {

  this.state = state;

  this.encrypt = function(str, key) {

    if (str === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
    let table = [];

    const fillTable = (num) => {
      let l = num;
      let alArr = [];
      let startFrom = l;
      console.log(num);
      let letter = startFrom;
      // startFrom++; if (startFrom > 90) {startFrom = 65};
      // letter = startFrom;
      for (let i = 0; i < 26; i++) {
        // let letter = startFrom;
        alArr.push(String.fromCharCode(letter));
        letter++;
        if (letter > 90) {letter = 65}
      }
  
      table.push(alArr);
      while (table.length<26) {fillTable(num+1)}
      }
  
    fillTable(65); console.log(table[4][2]);
  
    let code = ''; 
    let keySeq = '';
    let counterKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (counterKey > key.length-1) {counterKey = 0}
      if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
      else {keySeq += key[counterKey];counterKey++}
    }
    console.log(keySeq);
  
    // let horizontal = 0;
    // let vertical = 0; 
  
    for (let i = 0; i < keySeq.length;i++) {
      if (!keySeq[i].match(/[a-z]/i)) {code += keySeq[i]}
      else {
      let horizontal = table[0].indexOf(keySeq[i].toUpperCase());
      let vertical = table[0].indexOf(str[i].toUpperCase());
      console.log(vertical,horizontal, keySeq[i], str[i]);
      let number = table[vertical][horizontal];
      code += number;
      console.log(number, 'num');}
    }
    console.log(keySeq, code);
    if (this.state === false) {code = [...code].reverse().join(""); return code }
    return code
  }

  this.decrypt = function(str, key) {
    if (str === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
  
    let table = [];

    const fillTable = (num) => {
      let l = num;
      let alArr = [];
      let startFrom = l;
      let letter = startFrom;
      // startFrom++; if (startFrom > 90) {startFrom = 65};
      // letter = startFrom;
      for (let i = 0; i < 26; i++) {
        // let letter = startFrom;
        alArr.push(String.fromCharCode(letter));
        letter++;
        if (letter > 90) {letter = 65}
      }
  
      table.push(alArr);
      while (table.length<26) {fillTable(num+1)}
      }
  
    fillTable(65);
  
    let encrypted = '';
    let keySeq = '';
  
    let counterKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (counterKey > key.length-1) {counterKey = 0}
      if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
      else {keySeq += key[counterKey];counterKey++}
    }
  
      for (let i = 0; i < keySeq.length; i++) {
        if (!keySeq[i].match(/[a-z]/i)) {encrypted += str[i]}
        else {
        let hor = table[0].indexOf(keySeq[i].toUpperCase());
        let vertical = table[0].indexOf(str[i].toUpperCase());
        let horizontal = table[hor].indexOf(str[i].toUpperCase());
        let number = table[0][horizontal];
        encrypted += number;
      }
    }
    if (this.state === false) {encrypted = [...encrypted].reverse().join(""); return encrypted }
      return encrypted
  }
};
}

const dec = new VigenereCipheringMachine(true);
console.log(dec.encrypt('LXFOPV EF RNHR!', 'lemon'));

// class VigenereCipheringMachine {
//   encrypt(str, key) {
//     if (str === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
//     let table = [];

//     const fillTable = (num) => {
//       let l = num;
//       let alArr = [];
//       let startFrom = l;
//       console.log(num);
//       let letter = startFrom;
//       // startFrom++; if (startFrom > 90) {startFrom = 65};
//       // letter = startFrom;
//       for (let i = 0; i < 26; i++) {
//         // let letter = startFrom;
//         alArr.push(String.fromCharCode(letter));
//         letter++;
//         if (letter > 90) {letter = 65}
//       }
  
//       table.push(alArr);
//       while (table.length<26) {fillTable(num+1)}
//       }
  
//     fillTable(65); console.log(table[4][2]);
  
//     let code = ''; 
//     let keySeq = '';
//     let counterKey = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (counterKey > key.length-1) {counterKey = 0}
//       if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
//       else {keySeq += key[counterKey];counterKey++}
//     }
//     console.log(keySeq);
  
//     // let horizontal = 0;
//     // let vertical = 0; 
  
//     for (let i = 0; i < keySeq.length;i++) {
//       if (!keySeq[i].match(/[a-z]/i)) {code += keySeq[i]}
//       else {
//       let horizontal = table[0].indexOf(keySeq[i].toUpperCase());
//       let vertical = table[0].indexOf(str[i].toUpperCase());
//       console.log(vertical,horizontal, keySeq[i], str[i]);
//       let number = table[vertical][horizontal];
//       code += number;
//       console.log(number, 'num');}
//     }
//     console.log(keySeq, code);
//     return code
//   };

//   decrypt(str, key) {

//     if (str === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
  
//     let table = [];

//     const fillTable = (num) => {
//       let l = num;
//       let alArr = [];
//       let startFrom = l;
//       let letter = startFrom;
//       // startFrom++; if (startFrom > 90) {startFrom = 65};
//       // letter = startFrom;
//       for (let i = 0; i < 26; i++) {
//         // let letter = startFrom;
//         alArr.push(String.fromCharCode(letter));
//         letter++;
//         if (letter > 90) {letter = 65}
//       }
  
//       table.push(alArr);
//       while (table.length<26) {fillTable(num+1)}
//       }
  
//     fillTable(65);
  
//     let encrypted = '';
//     let keySeq = '';
  
//     let counterKey = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (counterKey > key.length-1) {counterKey = 0}
//       if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
//       else {keySeq += key[counterKey];counterKey++}
//     }
  
//       for (let i = 0; i < keySeq.length; i++) {
//         if (!keySeq[i].match(/[a-z]/i)) {encrypted += str[i]}
//         else {
//         let hor = table[0].indexOf(keySeq[i].toUpperCase());
//         let vertical = table[0].indexOf(str[i].toUpperCase());
//         let horizontal = table[hor].indexOf(str[i].toUpperCase());
//         let number = table[0][horizontal];
//         encrypted += number;
//       }
//     }
//       return encrypted
//   }
// }


// const encrypt= function(str, key) {

//   let table = [];

//   const fillTable = (num) => {
//     let l = num;
//     let alArr = [];
//     let startFrom = l;
//     console.log(num);
//     let letter = startFrom;
//     // startFrom++; if (startFrom > 90) {startFrom = 65};
//     // letter = startFrom;
//     for (i = 0; i < 26; i++) {
//       // let letter = startFrom;
//       alArr.push(String.fromCharCode(letter));
//       letter++;
//       if (letter > 90) {letter = 65}
//     }

//     table.push(alArr);
//     while (table.length<26) {fillTable(num+1)}
//     }

//   fillTable(65); console.log(table[4][2]);

//   let code = ''; 
//   let keySeq = '';
//   let counterKey = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (counterKey > key.length-1) {counterKey = 0}
//     if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
//     else {keySeq += key[counterKey];counterKey++}
//   }
//   console.log(keySeq);

//   // let horizontal = 0;
//   // let vertical = 0; 

//   for (let i = 0; i < keySeq.length;i++) {
//     if (!keySeq[i].match(/[a-z]/i)) {code += keySeq[i]}
//     else {
//     let horizontal = table[0].indexOf(keySeq[i].toUpperCase());
//     let vertical = table[0].indexOf(str[i].toUpperCase());
//     console.log(vertical,horizontal, keySeq[i], str[i]);
//     let number = table[vertical][horizontal];
//     code += number;
//     console.log(number, 'num');}
//   }
//   console.log(keySeq, code);
//   return code
// }

// const decrypt = (str, key) => {

  
//   let table = [];

//   const fillTable = (num) => {
//     let l = num;
//     let alArr = [];
//     let startFrom = l;
//     let letter = startFrom;
//     // startFrom++; if (startFrom > 90) {startFrom = 65};
//     // letter = startFrom;
//     for (i = 0; i < 26; i++) {
//       // let letter = startFrom;
//       alArr.push(String.fromCharCode(letter));
//       letter++;
//       if (letter > 90) {letter = 65}
//     }

//     table.push(alArr);
//     while (table.length<26) {fillTable(num+1)}
//     }

//   fillTable(65);

//   let encrypted = '';
//   let keySeq = '';

//   let counterKey = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (counterKey > key.length-1) {counterKey = 0}
//     if (str[i].match(/[a-z]/i) === null) {keySeq += str[i];}
//     else {keySeq += key[counterKey];counterKey++}
//   }

//     for (let i = 0; i < keySeq.length; i++) {
//       if (!keySeq[i].match(/[a-z]/i)) {encrypted += str[i]}
//       else {
//       let vertical = table[0].indexOf(str[i].toUpperCase());
//       let horizontal = table[horizontal].indexOf(str[i].toUpperCase());
//       let number = table[0][hhh];
//       encrypted += number;
//     }
//   }
//     return encrypted
// }

// console.log(encrypt('attack at dawn!', 'lemon'));
// console.log(decrypt('LXFOPV EF RNHR!', 'lemon'));

module.exports = {
  VigenereCipheringMachine
};

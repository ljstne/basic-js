const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === null || date == null || date == undefined || date === undefined
  || typeof date === 'undefined') {return 'Unable to determine the time of year!'};

  // if (date == undefined || typeof date.getMonth !== 'function' || !(date instanceof Date)
  // || typeof date === 'string' || date == false || date == null) 
  // {throw new Error ('Invalid date!')}
//   if (Object.prototype.toString.call(date) !== "[object Date]"
//     || Object.prototype.toString.call(date) != "[object Date]" ) {
//     throw new Error ('Invalid date!')
//   }
    try {
      date.getMonth();
      date.getDay();
      date.toLocaleString()
    }
    catch {
      throw new Error ('Invalid date!')
    }
  if (
    Object.prototype.toString.call(date) === "[object Date]" && date instanceof Date 
    && typeof date !== 'string' && date !== false && typeof date && !isNaN(date)
  ) {
    let month = date.getMonth();
    console.log(month);
    switch(month) {
    case 11 :
    case 0 :
    case 1 :
    return 'winter';
    case 2 :
    case 3 :
    case 4 :
    return "spring";
    case 5 :
    case 6 :
    case 7 :
    return 'summer';
    case 8 :
    case 9 :
    case 10 : 
    return 'autumn';
  }
}
  else {throw new Error ('Invalid date!')}
}

module.exports = {
  getSeason
};

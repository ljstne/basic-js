const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  let letters = [];
    members.forEach(e=> {if (typeof e === 'string'){
      e = e.trim();
      letters.push(e[0].toUpperCase())
  };
})
  letters.sort();
  let teamName = letters.join();
  teamName = teamName.replaceAll(',','');
  console.log(teamName,'teamname');
  return teamName

}

module.exports = {
  createDreamTeam
};

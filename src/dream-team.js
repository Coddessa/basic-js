const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *  Придумайте название команды мечты на основе имен ее членов
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
  if (!Array.isArray(members)) {
    return false;
  }

  const dreamTeam = members.filter(
    (memberTeam) => typeof memberTeam === "string"
  );

  const nameTeam = dreamTeam.map((memberName) => {
    const trimName = memberName.trim();
    return trimName[0].toUpperCase();
  });

  return nameTeam.sort().join("");
}

module.exports = {
  createDreamTeam,
};

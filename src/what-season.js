const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 * Извлеките сезон из заданной даты и разоблачите вражеского разведчика!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/* date */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};

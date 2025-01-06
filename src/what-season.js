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
function getSeason(date) {
  
  if (date === undefined) {
    throw new Error('Invalid date!');
  }

 
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  
  const seasonMapping = {
    winter: [11, 0, 1], 
    spring: [2, 3, 4],   
    summer: [5, 6, 7],   
    autumn: [8, 9, 10],  
  };


  const currentMonth = date.getMonth();

 
  for (const season in seasonMapping) {
    if (seasonMapping[season].includes(currentMonth)) {
      return season;
    }
  }


  throw new Error('Invalid date!');
}

module.exports = {
  getSeason,
};
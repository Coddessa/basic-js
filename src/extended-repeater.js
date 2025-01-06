const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 * Создайте повторяющуюся строку на основе заданных параметров
 *
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(baseString, options) {
  
  const string = baseString === undefined ? '' : String(baseString); 
  const numberOfRepeats = options.repeatTimes || 1;  
  const baseSeparator = options.separator || '+'; 
  const appendedString = options.addition === undefined ? '' : String(options.addition); 
  const numberOfAppends = options.additionRepeatTimes || 1; 
  const appendSeparator = options.additionSeparator || '|'; 

  
  const repeatedAppend = Array(numberOfAppends).fill(appendedString).join(appendSeparator);

 
  const resultString = Array(numberOfRepeats).fill(string + repeatedAppend).join(baseSeparator);

  return resultString;
}

module.exports = {
  repeater,
};



const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 * Если задана строка, верните версию ее кодировки.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodVer = "";
  let sum = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      sum += 1;
    } else {
      encodVer += (sum > 1 ? sum : "") + str[i];
      sum = 1;
    }
  }

  return encodVer;
}

module.exports = {
  encodeLine,
};

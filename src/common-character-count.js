const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 * Если даны две строки, найдите количество общих символов между ними.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const strCount = (s) => {
    const objletter = {};

    for (let letter of s) {
      objletter[letter] = objletter[letter] ? objletter[letter] + 1 : 1;
    }

    return objletter;
  };

  const objS1 = strCount(s1);
  const objS2 = strCount(s2);

  let resultCount = 0;
  for (let letter in objS1) {
    if (objS2.hasOwnProperty(letter)) {
      resultCount += Math.min(objS1[letter], objS2[letter]);
    }
  }

  return resultCount;
}

module.exports = {
  getCommonCharacterCount,
};

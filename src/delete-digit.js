const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 * Если дано некоторое целое число, найдите максимальное число, которое можно получить
 *, удалив ровно одну цифру из данного числа.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxN = 0;

  for (let i = 0; i < String(n).length; i += 1) {
    const currentN = String(n).slice(0, i) + String(n).slice(i + 1);
    if (currentN > maxN) {
      maxN = currentN;
    }
  }

  return Number(maxN);
}

module.exports = {
  deleteDigit,
};

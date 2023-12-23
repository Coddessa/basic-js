const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 * Задав массив с высотами, отсортируйте их, за исключением случаев, когда значение равно -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOfi = [];
  const arrFiltr = [];
  arr.forEach((num, i) => {
    if (num === -1) {
      arrOfi.push(i);
    } else arrFiltr.push(num);
  });

  const arrSort = arrFiltr.sort((a, b) => a - b);
  arrOfi.forEach((i) => {
    arrSort.splice(i, 0, -1);
  });
  return arrSort;
}

module.exports = {
  sortByHeight,
};
